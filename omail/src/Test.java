import java.util.Iterator;

public class Test {

    public static void main(String[] args) {
        Database d = Database.getInstance();
        String w = "frealksk1209";
        System.out.println(ProcessNetwork.maskPassword(w));
    }
}
