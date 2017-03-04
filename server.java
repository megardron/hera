package hera;
/* Project Hera - 0.1
 * Nolan Dickson - 100956964
 * 
 * March 4, 2017 - This is a very simple test of the capabilities of dealing with
 * Http; sending and receiving to a ServerSocket.
 * 
*/
import java.io.*;
import java.net.*;
import java.net.ServerSocket;

public class server{
	public static void main(String[] args) throws Exception {
		
		final ServerSocket server  = new ServerSocket(8080);
		System.out.println("Listening for connection on ServerSocket Port...");
		
		while (true){
			try(final Socket clientSocket = server.accept()){
				
				// Send a string to the accepted client Socket
				String response = "HTTP/1.1 200 OK\r\n\r\n" + "Hello World!";
				clientSocket.getOutputStream().write(response.getBytes("UTF-8"));
			
			
				// Setup to receive info from client
				InputStreamReader isr =  new InputStreamReader(clientSocket.getInputStream());
				BufferedReader reader = new BufferedReader(isr);
				String line = reader.readLine(); 
            
				// Prints info from connection on ServerSocket to console
				while (!line.isEmpty()) {
					System.out.println(line);
					line = reader.readLine();
				}
			}
		}
	}
}