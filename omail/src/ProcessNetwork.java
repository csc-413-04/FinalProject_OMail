import com.google.gson.*;

import java.util.*;
import java.time.format.DateTimeFormatter;
import java.time.LocalDateTime;

//These methods have a Database object as a parameter in order to access the methods in Database by
//initializing the Database once.
public class ProcessNetwork {


    public static void sendMail(String from, String to, String mail, Database data){
        Mail m = new Mail(from, to, mail);
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("MM/dd/yyyy HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        m.setTimeDate(dtf.format(now));
        String id = Long.toString(System.nanoTime());
        m.setMailID(id);
        data.storeMail(m);
    }

    public static ArrayList<String> showInboxMail(String user, Database data) {
        //this method returns all the mails in an user's inbox
        //use showMail(user, inbox) to get inbox mails.
        //this is a lists of mail data in JSON
        ArrayList<Mail> mailList = data.showM(user, "Recipient");//Will also show trash
        ArrayList<Mail> List = new ArrayList<>();
        for (int i = 0; i < mailList.size(); i++) {
            if (!(mailList.get(i).isTrash())) {
                List.add((mailList.get(i)));
            }
        }
        return sortTrash(List);
    }

    public static ArrayList<String> showSentMail(String user, Database data) {
        //this method returns a JSON of all the mails in the sent box of a user
        ArrayList<Mail> mailList = data.showM(user, "Sender");
        ArrayList<Mail> List = new ArrayList<>();
        for (int i = 0; i < mailList.size(); i++) {
            if (!(mailList.get(i).isTrashSend())) {
                List.add(mailList.get(i));
            }
        }
        return sortTrash(List);
    }

    public static ArrayList<String> showTrash(String user, Database data) {
        //similar to showInboxMail() method, but with the trashed mail.
        //use showMail(user, trash) to get trashed mails.\
        ArrayList<Mail> mailList = data.showM(user, "Recipient");//Will also show trash
        ArrayList<Mail> mailList2 = data.showM(user, "Sender");
        ArrayList<Mail> List = new ArrayList<>();
        for (int i = 0; i < mailList.size(); i++) {
            if ((mailList.get(i).isTrash())) {
                List.add((mailList.get(i)));
            }
        }
        for (int i = 0; i < mailList2.size(); i++) {
            if ((mailList2.get(i).isTrashSend())) {
                List.add((mailList2.get(i)));
            }
        }
        return sortTrash(List);
    }

    public static void mailToTrash(String mailId, String user, Database data) {
        //this method moves a mail from the inbox or sent list to the trash list.
        //use moveMail(user, mail, trash) to move mail to trash.
        data.moveMail(mailId, "Trash", user);
    }

    public static void mailDeletion(String mailId, String user, Database data) {
        //this method is only usable from trashed mail
        //the deleted mail is permanently deleted.
        data.deleteMail(mailId, user);
    }

    public static void update() {
        //method used to updte user's inbox
        // make sure it is constantly running. Need to figure out how
        // often it needs to run.
    }

    public static String createNewUser(String username, String password, Database data) {
        password = maskPassword(password);
        if(data.createUser(username, password)) {
            return "okay";
        }
        return "Username already in use.";
    }

    public static String maskPassword(String pass) {
        String mask = "";
        String evn = "";
        String odd = "";
        pass += "omail";
        for (int i = 0; i < pass.length(); i++) {
            if (i % 2 == 0) {
                evn += pass.charAt(i);
            } else {
                odd += pass.charAt(i);
            }
        }
        mask = odd + evn;
        mask = moreMask(mask);
        return mask;
    }

    public static String moreMask(String pass) {
        String mask = "";
        String evn = "";
        String odd = "";
        for (int i = 0; i < pass.length(); i++) {
            if (i % 2 == 0) {
                evn += pass.charAt(i);
            } else {
                odd += pass.charAt(i);
            }
        }
        mask = evn + odd;
        return mask;
    }

    public static boolean login(String user, String pass, Database data){
        pass = maskPassword(pass);
        return data.loginCheck(user, pass);
    }

    public static ArrayList<String> showMail(String user, String box, Database d) {
        switch (box){
            case "Inbox" :
                return showInboxMail(user, d);
            case "Sent" :
                return showSentMail(user, d);
            case "Trash":
                return showTrash(user, d);
                default:
                    ArrayList<String> def = new ArrayList<String>();
                    return def;
        }
    }

    public static ArrayList<String> sortTrash(ArrayList<Mail> trash) {
        Gson gson = new Gson();
        ArrayList<String> List = new ArrayList<>();
        for (int i = 0; i < trash.size(); i++) {
            for (int j = i+1; j < trash.size(); j++) {
                if(Long.parseLong(trash.get(j).getMailID()) > Long.parseLong(trash.get(i).getMailID())) {
                    Mail mail = trash.get(j);
                    trash.add(j, trash.get(i));
                    trash.add(i, mail);
                }
            }
        }
        for (int i = 0; i < trash.size(); i++) {
            List.add(gson.toJson(trash.get(i)));
        }
        return List;
    }

}
