import spark.Request;
import spark.Response;

import static spark.Spark.*;

import java.util.Collections;
import java.util.HashMap;
import java.util.Set;


public class Main {

    public static String processRoute(Request req, Response res) {
        Set<String> params = req.queryParams();
        for (String param : params) {
            // possible for query param to be an array
            System.out.println(param + " : " + req.queryParamsValues(param)[0]);
        }
        // do stuff with a mapped version http://javadoc.io/doc/com.sparkjava/spark-core/2.8.0
        // http://sparkjava.com/documentation#query-maps
        // print the id query value
        System.out.println(req.queryMap().get("id").value());
        return "done!";
    }

    public static void main(String[] args) {

        port(1234);

        post("/create", (req, res) -> {
            String body = req.body();
            System.out.println(body);
            return "OK";
        });


    }

}
