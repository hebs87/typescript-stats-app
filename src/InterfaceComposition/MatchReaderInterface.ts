import { dateStringToDate } from "../utils";
import { MatchResult } from "../MatchResult";
import { MatchData } from "../MatchData";

interface DataReader {
  read: () => void;
  data: string[][];
}

export class MatchReaderInterface {
  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load = (): void => {
    // Call the reader's read method to create the two-dimensional array
    this.reader.read();
    // Map over this two-dimensional array and create the desired data structure
    this.matches = this.reader.data.map((row: string[]): MatchData => {
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
