import com.google.gson.*;

import java.util.*;
import java.time.format.DateTimeFormatter;
import java.time.LocalDateTime;

//These methods have a Database object as a parameter in order to access the methods in Database by
//initializing the Database once.
public class ProcessNetwork {


    public static void sendMail(String from, String to, String subject, String mail, Database data){
        Mail m = new Mail(from, to, subject, mail);
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("MM/dd/yyyy HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        m.setTimeDate(dtf.format(now));
        String id = Long.toString(System.nanoTime());
        m.setMailID(id);
        data.storeMail(m);
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

    public static ArrayList<String> showInboxMail(String user, Database data) {
        //this method returns all the mails in an user's inbox
        //use showMail(user, inbox) to get inbox mails.
        //this is a lists of mail data in JSON
        Gson gson = new Gson();
        ArrayList<String> mailList = data.showMail(user, "Recipient");//Will also show trash
        ArrayList<Mail> List1 = new ArrayList<>();
        for (int i = 0; i < mailList.size(); i++) {
            if (!(gson.fromJson(mailList.get(i), Mail.class).isTrash())) {
                List1.add(gson.fromJson(mailList.get(i), Mail.class));
            }
        }
        mailList.clear();
        for (int i = List1.size() - 1; i >= 0; i--) {
            mailList.add(gson.toJson(List1.get(i)));
        }
        return mailList;
    }

    public static ArrayList<String> showSentMail(String user, Database data) {
        //this method returns a JSON of all the mails in the sent box of a user
        Gson gson = new Gson();
        ArrayList<String> mailList = data.showMail(user, "Sender");
        ArrayList<Mail> List1 = new ArrayList<>();
        for (int i = 0; i < mailList.size(); i++) {
            if (!(gson.fromJson(mailList.get(i), Mail.class).isTrashSend())) {
                List1.add(gson.fromJson(mailList.get(i), Mail.class));
            }
        }
        mailList.clear();
        for (int i = List1.size() - 1; i >= 0; i--) {
            mailList.add(gson.toJson(List1.get(i)));
        }
        return mailList;
    }

    public static ArrayList<String> showTrash(String user, Database data) {
        //similar to showInboxMail() method, but with the trashed mail.
        //use showMail(user, trash) to get trashed mails.\
        Gson gson = new Gson();
        ArrayList<String> mailList = data.showMail(user, "Recipient");
        ArrayList<String> mailList2 = data.showMail(user, "Sender");
        ArrayList<Mail> List1 = new ArrayList<>();
        for (int i = 0; i < mailList.size(); i++) {
            if ((gson.fromJson(mailList.get(i), Mail.class).isTrash()) && !(gson.fromJson(mailList.get(i), Mail.class).didRecepientDelete())) {
                List1.add(gson.fromJson(mailList.get(i), Mail.class));
            }
        }
        for (int i = 0; i < mailList2.size(); i++) {
            if ((gson.fromJson(mailList2.get(i), Mail.class).isTrashSend()) && !(gson.fromJson(mailList2.get(i), Mail.class).didSenderDelete())) {
                List1.add(gson.fromJson(mailList2.get(i), Mail.class));
            }
        }
        mailList.clear();
        for (int i = List1.size() - 1; i >= 0; i--) {
            mailList.add(gson.toJson(List1.get(i)));
        }
        return mailList;
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

    public static boolean createNewUser(String username, String password, Database data) {
        password = maskPassword(password);
        return data.createUser(username, password);
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
}
