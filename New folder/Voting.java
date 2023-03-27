import java.util.Scanner;
public class Voting {
/**
 * This class represents a simulation of a voting process.
 */


    /**
     * The main method that runs the voting simulation.
     * @param args The command-line arguments.
     */
    public static void main(String[] args) {
        // Read the number of candidates and voters from the user
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of candidates: ");
        int numCandidates = scanner.nextInt();
        System.out.print("Enter the number of voters: ");
        int numVoters = scanner.nextInt();
        scanner.close();

        // Configure the voting machine
        VotingMachine votingMachine = new VotingMachine();
        votingMachine.configure(numCandidates);

        // Simulate the first round of voting
        simulateRound(numVoters, votingMachine);

        // Check if a second round is needed
        int firstPlaceCount = votingMachine.getVoteCount(votingMachine.determineWinner());
        int secondPlaceCount = votingMachine.getVoteCount(votingMachine.determineSecondPlace());
        if (firstPlaceCount > numVoters / 2) {
            // There is a clear winner
            System.out.println("Candidate " + (votingMachine.determineWinner() + 1) + " wins the election!");
        } else if (firstPlaceCount + secondPlaceCount == numVoters) {
            // There is a tie between the top two candidates
            System.out.println("There is a tie between candidates " + (votingMachine.determineWinner() + 1)
                    + " and " + (votingMachine.determineSecondPlace() + 1) + "!");
        } else {
            // Simulate the second round of voting
            simulateRound(numVoters, votingMachine, true);

            // Determine the winner
            System.out.println("Candidate " + (votingMachine.determineWinner() + 1) + " wins the election!");
        }
    }

    /**
     * Simulates a round of voting with the given number of voters and voting machine.
     * @param numVoters The number of voters.
     * @param votingMachine The voting machine.
     */
    private static void simulateRound(int numVoters, VotingMachine votingMachine) {
        simulateRound(numVoters, votingMachine, false);
    }

    /**
     * Simulates a round of voting with the given number of voters and voting machine,
     * and whether it is the second round of voting.
     * @param numVoters The number of voters.
     * @param votingMachine The voting machine.
     * @param isSecondRound Whether it is the second round of voting.
     */
    private static void simulateRound(int numVoters, VotingMachine votingMachine, boolean isSecondRound) {
        // Simulate each vote
        for (int i = 0; i < numVoters; i++) {
            Voter voter = new Voter();
            voter.vote(votingMachine, isSecondRound);
        }

        // Report the results of the round
        System.out.println("Results of the " + (isSecondRound ? "second" : "first") + " round:");
        for (int i = 0; i < votingMachine.getNumCandidates(); i++) {
            int voteCount = votingMachine.getVoteCount(i);
            System.out.println("Candidate " + (i + 1) + ": " + voteCount + " votes");
        }
    }

}
