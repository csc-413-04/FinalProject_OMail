import com.google.gson.*;

import java.util.ArrayList;
import java.util.Iterator;

public class Test {

    public static void main(String[] args) {
        Database d = Database.getInstance();
        String w = "frealksk1209";
        w = ProcessNetwork.maskPassword(w);
        //ArrayList<String> m = ProcessNetwork.showInboxMail("cc",d);
        //Gson gson = new Gson();
        //Mail tar = gson.fromJson(m.get(1),Mail.class);
        //System.out.println(tar.getMailID());
        //ProcessNetwork.mailToTrash(tar, d);
        //System.out.println(ProcessNetwork.maskPassword(w));
        //long var = System.nanoTime();
        //while (var > 1000) {
        //    var /= 100;
        //}
        //ProcessNetwork.sendM("cola", "cc", "ha" + var, d);
        System.out.println(w);
    }
}
