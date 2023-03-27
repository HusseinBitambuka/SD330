import java.util.Random;

/**
 * This class represents a voter in the voting process.
 * A voter chooses a candidate to vote for and submits their ballot to a voting machine.
 */
public class Voter {
    
    private static final Random random = new Random();
    
    /**
     * Constructs a new voter.
     */
    public Voter() {}
    

    public void vote(VotingMachine machine) {
        Ballot ballot = machine.getBallot();
        int numCandidates = ballot.countCandidates();
        int preferredCandidate = random.nextInt(numCandidates);
        ballot.mark(preferredCandidate);
        machine.cast(ballot);
    }
    
}

