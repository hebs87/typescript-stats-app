import { MatchReaderInterface } from "./MatchReaderInterface";
import {CsvFileReaderInterface} from "./CsvFileReaderInterface";
import { MatchResult } from "./MatchResult";

// Create an object that satisfies the DataReader interface
const csvReader = new CsvFileReaderInterface('football.csv');
// Create an instance of MatchReader and pass in something to satisfy the MatchReader interface
const matchReader = new MatchReaderInterface(csvReader);
matchReader.load();
const matches = matchReader.matches;

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
