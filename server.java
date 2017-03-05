package hera;
/* Project Hera - 0.6
 * Nolan Dickson - 100956964
 * 
 * March 4, 2017 - This is a very simple test of the capabilities of 
 * Http; sending and receiving with a client.
 * 
*/
import java.io.*;
import java.net.*;
import java.util.concurrent.TimeUnit;
import java.net.ServerSocket;
import java.sql.Date;


public class server{
	
	// Local variables
	private int localPort;
	private int bufferSize;
	private int socketTimeout;
	private String info;
	
	// To be sent to SQL Database
	protected String action;
	protected String owner;
	protected int house;
	protected String name;
	protected int amount;
	protected Date date;
	protected int paid;
	protected int people;
	protected int bills;
	protected String tableType;
	
	// Constants
	private static String ACTIONMARKER = "action";
	private static String OWNERMARKER = "owner";
	private static String NAMEMARKER = "name";
	private static String HOUSEMARKER = "house";
	private static String AMOUNTMARKER = "amount";
	private static String DATEMARKER = "date";
	private static String PAIDMARKER = "paid";
	private static String PEOPLEMARKER = "people";
	private static String BILLSMARKER = "bills";
	
	// Server 
	public server(int port) throws Exception{
		final ServerSocket server  = new ServerSocket(port);
		System.out.println("Listening for connection on ServerSocket Port...");
		
		// Set info
		localPort = port;
		setBufferSize(server.getReceiveBufferSize());
		setSocketTimeout(server.getSoTimeout());
		
		// Start client contact
		clientInteract(server);
	}// End of Server
	
	private void clientInteract(ServerSocket server) throws Exception{
		while (true){
			try(final Socket clientSocket = server.accept()){
				// We're in!
				System.out.println("Connection Established.");
				System.out.println();
				
				// Setup to receive info from client
				InputStreamReader isr =  new InputStreamReader(clientSocket.getInputStream());
				BufferedReader reader = new BufferedReader(isr);
				String line = reader.readLine(); 
				System.out.println(line);
				
				// Save the first line to collect info for SQL, parse
				info = line;
				parse(info);
				
				// Send to SQL database
				SQLiteConnection q = new SQLiteConnection();
				
				if(tableType.equals("/house")){
					q.houseTable(people,amount,bills);
				}
				else if(tableType.equals("/user")){
					q.userTable(name,amount, paid);
				}
				else q.billTable(name,amount,date,paid);
				
				// Prints info from connection on ServerSocket to console
				while (!line.isEmpty()) {
					System.out.println(line);
					line = reader.readLine();
				}
				
				// Send a string to the accepted client Socket
				String response = "HTTP/1.1 200 OK\r\nAccess-Control-Allow-Origin: *\r\n\r\n" + server.toString();
				clientSocket.getOutputStream().write(response.getBytes("UTF-8"));
				
			}
		}	
	}
	public void parse(String info){
		// Isolate and store table type
		String delims1 = "[?]+";
		String[] tokens = info.split(delims1);	
		tableType = tokens[1];
		
		// Parse message info
		String delims2 = "[&=%/ ]+"; // Strip useless characters in line
		tokens = tokens[2].split(delims2); // Separate actual info
		
		// Navigate array of strings, values will always be tokens[i+1]
		
		for (int i = 0; i < tokens.length; i++){
			System.out.println(tokens[i]);

		    if(tokens[i].equals(ACTIONMARKER)){
		    	action = tokens[i+1];
		    }
	    	if(tokens[i].equals(OWNERMARKER)){
	    		owner = tokens[i+1];
	    	}	
	    	if(tokens[i].equals(HOUSEMARKER)){
	    		house = Integer.parseInt(tokens[i+1]);
	    	}
	    	if(tokens[i].equals(NAMEMARKER)){
	    		name = tokens[i+1];
	    	}
	    	if(tokens[i].equals(AMOUNTMARKER)){
	    		amount = Integer.parseInt(tokens[i+1]);
	    	}
	    	if(tokens[i].equals(DATEMARKER)){
	    		date = Date.valueOf(tokens[i+1]);
	    	}
	    	if(tokens[i].equals(PAIDMARKER)){
	    		paid = Integer.parseInt(tokens[i+1]);
	    	}
	    	if(tokens[i].equals(PEOPLEMARKER)){
	    		people = Integer.parseInt(tokens[i+1]);
	    	}
	    	if(tokens[i].equals(BILLSMARKER)){
	    		bills = Integer.parseInt(tokens[i+1]);
	    	}
		}
	}

	public int getPort(){
		return localPort;
	}
	public int getBufferSize() {
		return bufferSize;
	}

	public void setBufferSize(int bufferSize) {
		this.bufferSize = bufferSize;
	}

	public int getSocketTimeout() {
		return socketTimeout;
	}

	public void setSocketTimeout(int socketTimeout) {
		this.socketTimeout = socketTimeout;
	}
	
	// Main
	public static void main(String[] args) throws Exception {
		server s = new server(8080);
	}
