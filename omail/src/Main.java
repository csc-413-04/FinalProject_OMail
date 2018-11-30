import com.google.gson.Gson;
import static spark.Spark.*;

public class Main {

    public static void main(String[] args){
        port(1234);
        get("/newuser", (req, res)->{

            return "hi";
        });

    }


}
