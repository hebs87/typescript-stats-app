import { Analyzer } from "../interfaces";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";

// implements ensures that the class implements the methods/requirements of the Analyser interface
export class WinsAnalysis implements Analyzer {
  constructor(public teamName: string) {};

  run = (matches: MatchData[]): string => {
    let teamWins: number = 0;
    for (let match of matches) {
      if (match[1] === this.teamName && match[5] === MatchResult.HomeWin) {
        teamWins++;
      } else if (match[2] === this.teamName && match[5] === MatchResult.AwayWin) {
        teamWins++;
      }
    }
    return `${this.teamName} won ${teamWins} matches`;
  }
}
