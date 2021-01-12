import {MatchResult} from "./MatchResult";

// Define a MatchDate tuple type to assign to the converted tuple in the read() function
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];
