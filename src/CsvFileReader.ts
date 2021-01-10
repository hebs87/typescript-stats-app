import fs from 'fs';
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

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

export class CsvFileReader {
  // This is an array of tuples - MatchData is an array/tuple, so we're saying data will be an array of arrays/tuples
  data: MatchData[] = [];

  constructor(public filename: string) {}

  // Read the file and convert to 2 dimensional array - first split each new line, then split new line at commas
  read = (): void => {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map((row: string[]): MatchData => {
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
      });
  };
}
