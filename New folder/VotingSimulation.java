import java.util.Scanner;
public class VotingSimulation {
public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    // Read in the number of candidates and voters from the user
    int numCandidates = readIntInput(scanner, "Enter the number of candidates: ");
    int numVoters = readIntInput(scanner, "Enter the number of voters: ");

    // Create a new voting machine and configure it for the given number of candidates
    VotingMachine machine = new VotingMachine();
    machine.configure(numCandidates);

    // Create an array to hold the number of votes each candidate receives
    int[] voteCounts = new int[numCandidates];

    // Loop through each voter and simulate their vote
    for (int i = 0; i < numVoters; i++) {
        Voter voter = new Voter();
        voter.vote(machine);

        // Count the vote for the chosen candidate
        int vote = machine.determineWinner();
        voteCounts[vote]++;
    }

    // Determine the winner of the election
    int winner = determineWinner(voteCounts);

    // Print out the results of the election
    printElectionResults(numCandidates, winner);
}
// Get input
public static int readIntInput(Scanner input, String display ){
    System.out.println(display);
   int intInput=input.nextInt();
   return intInput;
}
public static int determineWinner(int []voteCounts){
    // get candidate with  the most vote.
    int maxIndex = 0;
    for (int i = 1; i < voteCounts.length; i++) {
        if (voteCounts[i] > voteCounts[maxIndex]) {
            maxIndex = i;
        }
    }
    return maxIndex;

}
public static void printElectionResults(int numCandidates, int winner){
    System.out.println("The winner is the candidate number  "+ winner+" among "+numCandidates+" candidates");
}
}
