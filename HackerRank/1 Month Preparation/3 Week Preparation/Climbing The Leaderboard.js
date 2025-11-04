/* An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses Dense Ranking, so its leaderboard works like this:

The player with the highest score is ranked number  on the leaderboard.
Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.
Example



The ranked players will have ranks , , , and , respectively. If the player's scores are ,  and , their rankings after each game are ,  and . Return .

Function Description

Complete the climbingLeaderboard function in the editor below.

climbingLeaderboard has the following parameter(s):

int ranked[n]: the leaderboard scores
int player[m]: the player's scores
Returns

int[m]: the player's rank after each new score */
function climbingLeaderboard(ranked, player) {
    // Step 1: remove duplicates from ranked (dense ranking)
    let leaderboard = [...new Set(ranked)];

    // Step 2: prepare an array to store player ranks
    let playerRanks = [];

    // Step 3: start from the end of the leaderboard (lowest score)
    let i = leaderboard.length - 1;

    // Step 4: loop through each player score
    for (let p = 0; p < player.length; p++) {
        let score = player[p];

        // Move up the leaderboard while player score >= leaderboard score
        while (i >= 0 && score >= leaderboard[i]) {
            i--;
        }

        // Rank is current index + 2 (because array is 0-based)
        playerRanks.push(i + 2);
    }

    return playerRanks;
}
// example usage
console.log(climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]));
