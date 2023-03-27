public class Ballot {
    /*
     This class encapsulates the ballot. It contains the mark method that marks the voice of a candidate.
     */
    private boolean[] candidates;
    public Ballot(int numCandidates){
        this.candidates=new boolean[numCandidates];
    }
    public void mark(int index){
        // mark the candidate who was just voted
        this.candidates[index]=true;
    }
    public int countCandidates(){
        return this.candidates.length;
    }
    boolean [] getcandidates(){
        return this.candidates;
    }
}
