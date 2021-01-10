import fs from 'fs';

export class CsvFileReader {
  data: string[][] = [];

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
      });
  };
}
