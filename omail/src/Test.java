import com.google.gson.*;

import java.util.ArrayList;
import java.util.Iterator;

public class Test {

    public static void main(String[] args) {
        Database d = Database.getInstance();
        //String w = "frealksk1209";
        //w = ProcessNetwork.maskPassword(w);
        //ArrayList<String> m = ProcessNetwork.showInboxMail("cc",d);
        //Gson gson = new Gson();
        //Mail tar = gson.fromJson(m.get(1),Mail.class);
        //System.out.println(tar.getMailID());
        //ProcessNetwork.mailToTrash(tar, d);
        //System.out.println(ProcessNetwork.maskPassword(w));
        long var = System.nanoTime();
        while (var > 10000) {
            var /= 100;
        }
        ProcessNetwork.sendMail("Payae", "b", "Did you get my email?","Yo, I wanted to check if you got my last email.  I havent' heard back from you.  Are we still metting after class?", d);
        ProcessNetwork.sendMail("JJ", "b", "Testing","I noticed a few bugs in the project.  I keep seeing issues when I try to switch between the menu options.", d);
        ProcessNetwork.sendMail("Sawyer", "b", "Lunch?","I'm starving!  I haven't had anyting to eat since that pizza last night.  I'm SO hungry, I feel like eating 6 candy bars in between class.", d);
        ProcessNetwork.sendMail("Nick", "b", "Sunday Wedding","I can't make it to the group meeting on Sunday, I have a wedding out of town to attend.  Sorry!", d);
        ProcessNetwork.sendMail("Osbaldo", "b", "Want to see X Men?","I feel like it's an underrated movie.  Personally I like it better than Antman", d);
        ProcessNetwork.sendMail("b", "a", "Can I borrow your car tomorrow?","So, my car is still getting the brakes fixed and I need to run some errands.  Can I borrow your car for a couple hours tomorrow?", d);
        ProcessNetwork.sendMail("b", "e", "Receipt from lunch","Thanks again for paying for lunch.  Can you tell me how much I owe you so I can venmo you?", d);
        ProcessNetwork.sendMail("Brian", "b", "Wednesday Night","So, I got home super late... I didn't realize that I would have to transfer on Muni after 9:00 PM, I wasn't ready for that.", d);
        //ProcessNetwork.mailDeletion("5044375673990","cc",d);
        //System.out.println(w);
        //String s = "\"d\"";
        //s = s.replace("\"","");

        //System.out.println(s);

        ArrayList<String> a = ProcessNetwork.showMail("cola", "Inbox", d);
        for (String b : a)
        {
            System.out.println(b);
        }/**/
    }
}
