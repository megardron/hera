package hera;
import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class SQLiteConnection {

	
	public SQLiteConnection() throws Exception{
	}
	public void userTable(String name, int amount, int paid) throws Exception{
		String s = "insert into Person(Name, AmountOwed, Paid) values('" + name +"', '"+Integer.toString(amount)+"', '"+Integer.toString(paid)+"')";
		connect(s);
	}
	public void houseTable(int people, int amount, int bills) throws Exception{
		String s = "insert into House(People, BillAmount, Bills) values('" + Integer.toString(people) +"', '"+Integer.toString(amount)+"', '"+Integer.toString(bills)+"')";
		System.out.println(s);
		connect(s);
	}
	public void billTable(String name, int amount, Date date, int paid) throws Exception{
		String s = "insert into Person(Name, AmountOwed, Paid) values('" + name +"', '"+Integer.toString(amount)+"', '"+date.toString()+"', '"+Integer.toString(paid)+"')";
		connect(s);
	}
    public void connect(String s) throws Exception {
        Connection conn = null;
        try {
            // db parameters
            String url = "jdbc:sqlite:C:/Users/Nolan/workspace/hera/hera.db";
            // create a connection to the database
            conn = DriverManager.getConnection(url);
            Statement statement = conn.createStatement();
            statement.setQueryTimeout(30);  // set timeout to 30 sec.
            
            System.out.println("Connection to SQLite has been established.");
            
            statement.executeUpdate(s);
            ResultSet rs = statement.executeQuery("select * from person");
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        } finally {
            try {
                if (conn != null) {
                    conn.close();
                }
            } catch (SQLException ex) {
                System.out.println(ex.getMessage());
            }
        }
    }

	public static void main(String[] args){}

}

