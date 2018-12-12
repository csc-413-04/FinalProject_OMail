import com.google.gson.*;

import java.util.ArrayList;

public class User {

    private String User;
    private String Password;
    private String[] Inbox;
    private String[] Sent;
    private String[] Trash;

    public ArrayList<Mail> showUserMail(String box) {
        ArrayList<Mail> mail = new ArrayList<>();
        Gson gson = new Gson();
        switch (box){
            case "Inbox" :
                for (int i = 0; i < this.Inbox.length; i++) {
                    Mail m = gson.fromJson(this.Inbox[i],Mail.class);
                    mail.add(m);
                }
                return mail;
            case "Sent" :
                for (int i = 0; i < this.Sent.length; i++) {
                    Mail m = gson.fromJson(this.Sent[i],Mail.class);
                    mail.add(m);
                }
                return mail;
            case "Trash":
                for (int i = 0; i < this.Trash.length; i++) {
                    Mail m = gson.fromJson(this.Trash[i],Mail.class);
                    mail.add(m);
                }
                return mail;
            default:
                ArrayList<Mail> def = new ArrayList<>();
                return def;
        }
    }

}
