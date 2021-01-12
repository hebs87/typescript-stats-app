import { Analyzer, OutputTarget } from "./interfaces";
import { MatchData } from "./MatchData";

export class Summary {
  // We get the analyzer and the output target and call both relevant methods from them
  // This class doesn't really have any functionality as such, it just holds references to other classes and brings
  // their methods together - it is more of a coordinator
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {};

  buildAndPrintReport = (matches: MatchData[]): void => {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  };
}
