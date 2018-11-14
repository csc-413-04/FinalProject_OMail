
public class Database {
    private  static Database instance = null;

    private  Database() {}

    public static Database getInstance() {
        if (instance == null) {
            instance = new Database();
        }
        return instance;
    }

    public Boolean storeMail(String mail) {
        //this method stores the mail in database
        //return true if successful, false otherwise.
        return false;
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

}
