// import { MatchReaderGeneric } from "./GenericInheritance/MatchReaderGeneric";
import { MatchReaderInterface } from "./InterfaceComposition/MatchReaderInterface";
import {CsvFileReaderInterface} from "./InterfaceComposition/CsvFileReaderInterface";
import { Summary } from "./Summary";
// import { WinsAnalysis } from "./analyzers/WinsAnalysis";
// import { ConsoleReports } from "./reportTargets/ConsoleReports";
// import { HtmlReport } from "./reportTargets/HtmlReport";

// USING GENERIC ABSTRACT CLASS INHERITANCE APPROACH
// const reader = new MatchReaderGeneric('football.csv');
// reader.read();
// const matches = reader.data;

// USING INTERFACE COMPOSITION APPROACH
// Create an instance of MatchReader and pass in filename (CsvFileReader is called from the static method
const matchReader = MatchReaderInterface.fromCsv('football.csv');
matchReader.load();
const matches = matchReader.matches;

const htmlSummary = Summary.winsAnalysisWithHtmlReport('Man United');
htmlSummary.buildAndPrintReport(matches);
const consoleSummary = Summary.winsAnalysisWithConsoleReport('Man United');
consoleSummary.buildAndPrintReport(matches);
