public class TeamCreator(){
    Team teamA, teamB;
    //Funciton Declaration

    //Create a team
    void CreateTeam();

    //Add Players to the team
    void AddPlayer(Player player);

    // Function Definition

    void CreateTeam(){
        teamA = new Team();
    }

    void AddPlayer(Player player){
        teamA.players.Add(player);
    }
}