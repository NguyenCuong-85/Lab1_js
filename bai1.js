const game = {
    team1: 'Number',
    team2: 'Word',
    players: [
        [
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',

        ],
        [
            '0',
            '1',
            '2',
            '3',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
        ]
    ],
    score: '4:0',
    scored: ['A', 'B', 'C', 'D'],
    date: 'Nov 9th,2023',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
// LAB1.1: (SECTION	9: DATA	STRUCTURES. MODERN	OPERATORS AND STRINGS > CODING CHANLLENGE	#1)
console.log('LAB1.1: (SECTION	9: DATA	STRUCTURES. MODERN	OPERATORS AND STRINGS > CODING CHANLLENGE #1)');
//1
const [players1, players2] = game.players;
console.log(players1, players2);
//2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//4 
const players1Final = [...players1, 'L', 'M', 'N'];
//5
const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);
//6
const printGoals = function (...players) {
    console.log(players);
    console.log(`${players.length} goals were scored`);
};
printGoals(...game.scored);
//7
team1 < team2 && console.log('Team 1 is more likely to win')
//LAB1.2: (SECTION	9: DATA	STRUCTURES. MODERN	OPERATORS AND STRINGS > CODING CHANLLENGE #2)
console.log('LAB1.2: (SECTION	9: DATA	STRUCTURES. MODERN	OPERATORS AND STRINGS > CODING CHANLLENGE #2)');
//1
for (const [i, player] of game.scored.entries())
    console.log(`Goal ${i + 1}:${player}`);
//2
const odds = Object.values(game.odds);
let average = 0
for (const odd of Object.values(game.odds))
    average += odd;
average /= odds.length;
console.log(average);
//3
for (const [team, odd] of Object.entries(game.odds)){
    const teamstr = team === 'x' ? 'draw': `thắng ${game[team]}`;
    console.log(`Tỉ lệ thắng của ${teamstr} : ${odd}`);
}