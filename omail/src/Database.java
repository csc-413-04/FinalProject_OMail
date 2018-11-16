import static com.mongodb.client.model.Filters.*;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import javax.servlet.http.Cookie;
import org.eclipse.jetty.server.Authentication;
import java.util.*;
import javax.print.Doc;
import java.util.ArrayList;

public class Database {
    private  static Database instance = null;

    private  Database() {}

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

    public void storeMail(Mail mail) {
        //this method stores the mail in database
        //return true if successful, false otherwise.
        Document doc = new Document("Sender", mail.getSender())
                .append("Recipient", mail.getRecipient()).append("Subject", mail.getSubject()).append("MailBody", mail.getMailBody()).append("Date", mail.getTimeDate()).append("IsUnread", mail.getIsUnread()).append("MailID",mail.getMailID());
        myCollectionMail.insertOne(doc);
    }

    public String[] showMail(String user, String mailType) {
        //This method returns the list of mails that is specified in mailType
        //if mailType == inbox return inbox mail list, if sent return sent mail list, if trash return trashed mail list
        return null;
    }

    public Boolean moveMail(String user, String mail, String destination) {
        //this method moves the mail from current list to destination list.
        //return true if successful, false otherwise.
        return false;
    }

    public Boolean deleteMail(String mail) {
        //this method permanently deletes the mail from database
        //return true if successful, false otherwise.
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
