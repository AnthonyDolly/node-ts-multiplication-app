import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Base of multiplication table",
  })
  .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "Limit of multiplication table",
  })
  .option("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "Show multiplication table in console",
  })
  .option("n", {
    alias: "name",
    type: "string",
    default: "multiplication-table",
    describe: "File name",
  })
  .option("d", {
    alias: "destination",
    type: "string",
    default: "outputs",
    describe: "File destination",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "Base must be a number";
    } else if (isNaN(argv.l)) {
      throw "Limit must be a number";
    } else if (argv.l < 1) {
      throw "Limit must be greater than 0";
    } else if (argv.s !== true && argv.s !== false) {
      throw "Show must be a boolean";
    }

    return true;
  })
  .parseSync();
