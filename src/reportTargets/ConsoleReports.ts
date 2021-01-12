import { OutputTarget } from "../interfaces";

export class ConsoleReports implements OutputTarget {
  print = (report: string): void => {
    console.log(report);
  };
}
