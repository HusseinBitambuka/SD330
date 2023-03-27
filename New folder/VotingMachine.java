import java.util.Arrays;

public class VotingMachine {
    
    private Ballot configuredBallot;
    private int[] voteCounts;
    
    
    public VotingMachine() {
        this.configuredBallot = null;
        this.voteCounts = null;
    }
    
    
    public void configure(int numCandidates) {
        /*
         Configure the voting machine
         */
        this.configuredBallot = new Ballot(numCandidates);
        this.voteCounts = new int[numCandidates];
    }
    
    
    public boolean cast(Ballot ballot) {
        // if no ballot is configured, discarde the cast
        if (ballot.countCandidates() != configuredBallot.countCandidates()) {
            return false;
        }
        int preferredCandidate = -1;
        //
        for (int i = 0; i < configuredBallot.countCandidates(); i++) {
            if (ballot.getcandidates()[i]) {
                //check if the candidate was marked before
                if (preferredCandidate == -1) {
                    preferredCandidate = i;
                } else {
                    return false;
                }
            }
        }
        // if  the ballot contains no mark candidate, then discard the vote
        if (preferredCandidate == -1) {
            return false;
        }
        // Increament the vote for the candidate
        voteCounts[preferredCandidate]++;
        return true;
    }
    
    
    public int determineWinner() {
        // if no one voted, return -1
        if (voteCounts == null) {
            return -1;
        }
        // get the most vote.
        int maxIndex = 0;
        for (int i = 1; i < voteCounts.length; i++) {
            if (voteCounts[i] > voteCounts[maxIndex]) {
                maxIndex = i;
            }
        }
        return maxIndex;
    }
    // get the configured ballot

        public Ballot getBallot() {
            return this.configuredBallot;
        }
        // reset the vote counts
        public void reset() {
            Arrays.fill(voteCounts, 0);
        }
    }        
