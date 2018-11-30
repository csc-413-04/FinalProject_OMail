import java.util.Iterator;

public class Test {

    public static void main(String[] args) {
        Database d = Database.getInstance();


/*
        System.out.println(ProcessNetwork.createNewUser("A", "1234", d));
        System.out.println(ProcessNetwork.createNewUser("B", "1234", d));
        System.out.println(ProcessNetwork.createNewUser("C", "1234", d));
        System.out.println(ProcessNetwork.createNewUser("D", "1234", d));
        System.out.println(ProcessNetwork.createNewUser("E", "1234", d));
/**/
//        ProcessNetwork.sendMail("hello", d);
        /*Gson ml = new Gson();
        Mail send = ml.fromJson("hello world", Mail.class);
        System.out.println(send);
//        ProcessNetwork.sendMail("hello world", d);
*/
        /*
        ProcessNetwork.sendM("A", "B", "Hello World", d );
        ProcessNetwork.sendM("A", "C", "I like Apple", d);
        ProcessNetwork.sendM("A", "C", "I like Orange", d);
        ProcessNetwork.sendM("A", "C", "I like Banana", d);
        /**/
/*
        if(ProcessNetwork.login("B", "124",d))
        {
            System.out.println("Sucesss");
        }
        else
            System.out.println("Fail");
*/
        Iterator<String> it = ProcessNetwork.showSentMail("A", d).iterator();
        Iterator<String> ot = ProcessNetwork.showInboxMail("C", d).iterator();

        while(ot.hasNext())
        {
            System.out.println(ot.next());
        }
    }
}
