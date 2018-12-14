public class Mail {

  private String Sender;
  private String Recipient;
  //    private String subject;
  private String MailBody;
  private String Date;
  private String MailID;
  //    private boolean isUnread = true;
  private boolean Trash = false;
  private boolean deletedRec = false;
  private boolean deletedSen = false;

  public Mail(String from, String to, String mail) {
    Sender = from;
    Recipient = to;
    MailBody = mail;
  }

  public String getSender() {
    return Sender;
  }

  public String getRecipient() {
    return Recipient;
  }

  //    public String getSubject() {return subject;}
  public String getMailBody() {
    return MailBody;
  }

  public String getMailID() {return MailID;}
  public String getTimeDate() {
    return Date;
  }
//
     public void setTimeDate(String date) {this.Date = date;}

     public void setMailID(String id){this.MailID = id;}
//    public void mailRead(){this.isUnread = false;}
  public boolean isTrash() {
    return Trash;
  }
  public boolean didSenderDelete() {return deletedSen;}
  public boolean didRecepientDelete() {return deletedRec;}

  public void moveToTrash() {
    Trash = true;
  }
  public void senderDelete() {deletedSen = true;}
  public void recepientDelete() {deletedRec = true;}


}
