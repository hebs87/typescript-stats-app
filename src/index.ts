// import { MatchReaderGeneric } from "./GenericInheritance/MatchReaderGeneric";
import { MatchReaderInterface } from "./InterfaceComposition/MatchReaderInterface";
import {CsvFileReaderInterface} from "./InterfaceComposition/CsvFileReaderInterface";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
// import { ConsoleReports } from "./reportTargets/ConsoleReports";
import { HtmlReport } from "./reportTargets/HtmlReport";

// USING GENERIC ABSTRACT CLASS INHERITANCE APPROACH
// const reader = new MatchReaderGeneric('football.csv');
// reader.read();
// const matches = reader.data;

// USING INTERFACE COMPOSITION APPROACH
// Create an object that satisfies the DataReader interface
const csvReader = new CsvFileReaderInterface('football.csv');
// Create an instance of MatchReader and pass in something to satisfy the MatchReader interface
const matchReader = new MatchReaderInterface(csvReader);
matchReader.load();
const matches = matchReader.matches;

// Create new Summary instance and pass in the analyzer and output target classes - pass in team name to analyzer
// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new ConsoleReports()
// );
// Call the buildAndPrintReport method in the Summary instance to trigger the analysis and output
// summary.buildAndPrintReport(matches);

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new HtmlReport('report.html')
);
summary.buildAndPrintReport(matches);
