import com.google.gson.*;

import java.util.ArrayList;
import java.util.Iterator;

public class Test {

    public static void main(String[] args) {
        Database d = Database.getInstance();
        //String w = "frealksk1209";
        //ArrayList<String> m = ProcessNetwork.showInboxMail("cc",d);
        //Gson gson = new Gson();
        //Mail tar = gson.fromJson(m.get(1),Mail.class);
        //System.out.println(tar.getMailID());
        //ProcessNetwork.mailToTrash(tar, d);
        //System.out.println(ProcessNetwork.maskPassword(w));
        String s = "\"d\"";
        s = s.replace("\"","");

        System.out.println(s);

        /*ArrayList<String> a = ProcessNetwork.showMail("b", "Inbox");
        for (String b : a)
        {
            System.out.println(b);
        }*/
    }
}
