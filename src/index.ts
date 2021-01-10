import fs from 'fs';

// Read the file and convert to 2 dimensional array - first split each new line, then split new line at commas
const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8'
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

console.log(matches);
