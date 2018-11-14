
//These methods have a Database object as a parameter in order to access the methods in Database by
//initializing the Database once.
public class ProcessNetwork {

    public static String sendMail(String mail, Database data) {
        //This method sends the mail and stores the mail in the database
        //use storeMail method from Database
        //returns mail data as a JSON
        return null;
    }

    public static String[] showInboxMail(String user, Database data) {
        //this method returns all the mails in an user's inbox
        //use showMail(user, inbox) to get inbox mails.
        //this is a lists of mail data in JSON
        return null;
    }

    public static String[] showSentMail(String user, Database data) {
        //similar to showInboxMail() method, but with the sent mail.
        //use showMail(user, sent) to get sent mails.
        return null;
    }

    public static String[] showTrash(String user, Database data) {
        //similar to showInboxMail() method, but with the trashed mail.
        //use showMail(user, trash) to get trashed mails.
        return null;
    }

    public static void mailToTrash(String mail, Database data) {
        //this method moves a mail from the inbox or sent list to the trash list.
        //use moveMail(user, mail, trash) to move mail to trash.
    }

    public static void mailDeletion(String mail, Database data) {
        //this method is only usable from trashed mail
        //the deleted mail is permanently deleted.
    }

}
