import { Analyzer, OutputTarget } from "./interfaces";
import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";
import { ConsoleReports } from "./reportTargets/ConsoleReports";

export class Summary {
  // Static method allows us to call it without instantiating the class first - shortcut to the below
  // const summary = new Summary(
  //   new WinsAnalysis('Man United'),
  //   new HtmlReport('report.html')
  // );
  static winsAnalysisWithHtmlReport = (teamName: string): Summary => {
    return new Summary(
      new WinsAnalysis(teamName),
      new HtmlReport('report.html')
    );
  }

  static winsAnalysisWithConsoleReport = (teamName: string): Summary => {
    return new Summary(
      new WinsAnalysis(teamName),
      new ConsoleReports()
    );
  };

  // We get the analyzer and the output target and call both relevant methods from them
  // This class doesn't really have any functionality as such, it just holds references to other classes and brings
  // their methods together - it is more of a coordinator
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {};

  buildAndPrintReport = (matches: MatchData[]): void => {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  };
}
