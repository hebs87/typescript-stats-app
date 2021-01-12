import { Analyzer, OutputTarget } from "./interfaces";

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {};
}
