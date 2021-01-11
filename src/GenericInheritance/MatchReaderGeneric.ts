import { CsvFileReaderGeneric } from "./CsvFileReaderGeneric";
import { dateStringToDate } from "../utils";
import { MatchResult } from "../MatchResult";

// Define a MatchDate tuple type to assign to the converted tuple in the read() function
type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];

// Pass in MatchData as the argument for the generic argument value in CsvFileReaderGeneric
export class MatchReaderGeneric extends CsvFileReaderGeneric<MatchData> {
  mapRow = (row: string[]): MatchData => {
    // Map over each single array/line and change it to new array with values in correct format
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      // Type assertion to tell TS to convert the result string to the MatchResult string instead
      row[5] as MatchResult,
      row[6]
    ];
  };
}
