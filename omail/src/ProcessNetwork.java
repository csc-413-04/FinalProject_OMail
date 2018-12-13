import com.google.gson.*;

import java.util.*;
import java.time.format.DateTimeFormatter;
import java.time.LocalDateTime;

//These methods have a Database object as a parameter in order to access the methods in Database by
//initializing the Database once.
public class ProcessNetwork {

    public static void sendMail(String mail, Database data) {
       /*  //This method sends the mail and stores the mail in the database
        //use storeMail method from Database
        //returns mail data as a JSON
        Gson ml = new Gson();
        Mail send = ml.fromJson(mail, Mail.class);
        data.storeMail(send);
        /**/
    }

    public static void sendM(String from, String to, String mail, Database data){
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
        ArrayList<String> List = data.showM(user, "Recipient");//Will also show trash
        return List;
    }

    public static ArrayList<String> showSentMail(String user, Database data) {
        ArrayList<String> List = data.showM(user, "Sender");
        return List;
    }

    public static ArrayList<String> showTrash(String user, Database data) {
        //similar to showInboxMail() method, but with the trashed mail.
        //use showMail(user, trash) to get trashed mails.
        ArrayList<String> List = data.showM(user, "Trash");
        return List;
    }

    public static void mailToTrash(Mail mail, Database data) {
        //this method moves a mail from the inbox or sent list to the trash list.
        //use moveMail(user, mail, trash) to move mail to trash.
        data.moveMail(mail, "Trash");
    }

    public static void mailDeletion(String mail, Database data) {
        //this method is only usable from trashed mail
        //the deleted mail is permanently deleted.
        Gson ml = new Gson();
        Mail m = ml.fromJson(mail, Mail.class);
        data.deleteMail(m);
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
        return mask;
    }

    public static String login(String user, String pass, Database data){
        pass = maskPassword(pass);
        if(pass.equals(maskPassword("game"))) {
            return "game";
        }
        return Boolean.toString(data.loginCheck(user, pass));
    }

    public static ArrayList<String> showMail(String user, String box) {
        Database d = Database.getInstance();
        switch (box){
            case "Inbox" :
                return showInboxMail(user, d);
            case "Sent" :
                return showSentMail(user, d);
            case "Trash":
                //as of now showTrash only shows recived messages in trash
                return showTrash(user, d);
                default:
                    ArrayList<String> def = new ArrayList<String>();
                    return def;
        }
    }

}
