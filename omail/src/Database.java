import static com.mongodb.client.model.Filters.*;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import javax.servlet.http.Cookie;
import org.eclipse.jetty.server.Authentication;
import java.util.*;
import javax.print.Doc;
import java.util.*;
import java.util.ArrayList;

public class Database {
    private  static Database instance = null;

    private  Database() {
        mongoClient = new MongoClient("localhost", 27017);
        db = mongoClient.getDatabase("REST2");
        myCollectionUsers = db.getCollection("users ");
        myCollectionMail = db.getCollection("mail ");
    }

    private MongoClient mongoClient;
    private MongoDatabase db;
    private MongoCollection<Document> myCollectionUsers;
    private MongoCollection<Document> myCollectionMail;

    public static Database getInstance() {
        if (instance == null) {
            instance = new Database();
        }
        return instance;
    }

    public boolean loginCheck(String user, String pass){

        try {
            Document search = myCollectionUsers.find(eq("User", user)).first();
            return (search.getString("User").equals(user)&&
                    search.getString("Password").equals(pass));
        }catch (Exception e)
        {
            return false;
        }
    }

    public void storeMail(Mail mail) {
        //this method stores the mail in database
        //return true if successful, false otherwise.
//        Document doc = new Document("Sender", mail.getSender())
//                .append("Recipient", mail.getRecipient()).append("Subject", mail.getSubject()).append("MailBody", mail.getMailBody()).append("Date", mail.getTimeDate()).append("IsUnread", mail.getIsUnread()).append("MailID",mail.getMailID());
        Document doc = new Document("Sender", mail.getSender())
                .append("Recipient", mail.getRecipient()).append("MailBody", mail.getMailBody());
        myCollectionMail.insertOne(doc);
        //Also copy the contents of the mail into the sending user so user has copy of mail
    }

    public String[] showMail(String user, String mailType) {
        //This method returns the list of mails that is specified in mailType
        //if mailType == inbox return inbox mail list, if sent return sent mail list, if trash return trashed mail list
        String[] x = new String[10000];
        x[0] = "[]";
        try {
            Document search = myCollectionUsers.find(eq("User", user)).first();
            Document t = (Document) search.get(mailType);
            x[0] = t.values().toString();
        } catch (Exception e) {
            System.err.println("Error");
        }
        return x;
    }

    public ArrayList<String> showM(String user, String mailType) {
        ArrayList<String> list=new ArrayList<String>();
        MongoCursor<Document> cursor = myCollectionMail.find(eq(mailType, user)).iterator();
        try {
            while (cursor.hasNext()) {
                list.add(cursor.next().toJson());
            }
        } finally {
            cursor.close();
        }
        return list;
    }

    public Boolean moveMail(Mail mail, String destination) {
        //this method moves the mail from current list to destination list.
        //return true if successful, false otherwise.
        if (destination.equals("Trash")) {
            //search for where the mail is located by the mailID
            //copy the contents of the mail
            //delete the mail
            //insert the copy into the trash
        }
        return false;
    }

    public Boolean deleteMail(Mail mail) {
        //this method permanently deletes the mail from database
        //return true if successful, false otherwise.
        //Mails can only be deleted if they are in trash
        return false;
    }

    public boolean createUser(String username, String password)
    {
        Document search = myCollectionUsers.find(eq("User", username)).first();
        if(search == null)
        {
            Document doc = new Document("User", username)
                    .append("Password", password).append("Inbox", new Document()).append("Sent", new Document()).append("Trash", new Document());
            myCollectionUsers.insertOne(doc);
            return true;
        }
        return false;
    }
}
