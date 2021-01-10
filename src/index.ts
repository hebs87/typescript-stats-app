import { CsvFileReader } from "./CsvFileReader";

// Read the file and convert to 2 dimensional array - first split each new line, then split new line at commas
const reader = new CsvFileReader('football.csv');
reader.read();
const matches = reader.data;

// enum - used to indicate a set of closely related results - stores either numbers or strings and accessed like objects
// These can also be referenced as types, e.g. return value of a function
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

// Count number of Man Utd wins
let manUnitedWins = 0;
for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Manchester United won ${manUnitedWins} games`);
