import fs from 'fs';

// To make this class abstract and generic (able to accept different data types), we can pass in an argument in the
// angle brackets, and then use that as the type definition for any of the parameters inside the class
// Naming convention states that we call the first argument T
export abstract class CsvFileReaderGeneric<T> {
  // This is an array of tuples - T is an array/tuple, so we're saying data will be an array of arrays/tuples
  data: T[] = [];

  constructor(public filename: string) {}

  // abstract method - logic to be defined used in child classes
  abstract mapRow(row: string[]): T;

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
      .map(this.mapRow);
  };
}
