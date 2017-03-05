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

public class server{
	
	// Local variables
	private int localPort;
	private int bufferSize;
	private int socketTimeout;
	
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
				TimeUnit.SECONDS.sleep(1);
				System.out.println();
				
				// Setup to receive info from client
				InputStreamReader isr =  new InputStreamReader(clientSocket.getInputStream());
				BufferedReader reader = new BufferedReader(isr);
				String line = reader.readLine(); 
            
				// Prints info from connection on ServerSocket to console
				while (!line.isEmpty()) {
					System.out.println(line);
					line = reader.readLine();
				}
				
				// Send a string to the accepted client Socket
				String response = "HTTP/1.1 200 OK\r\n\r\n" + server.toString();
				clientSocket.getOutputStream().write(response.getBytes("UTF-8"));
				
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
}
