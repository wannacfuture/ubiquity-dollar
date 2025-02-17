import { OptionDefinition } from "command-line-args";

export const optionDefinitions: OptionDefinition[] = [
  { name: "task", defaultOption: true },
  { name: "manager", alias: "m", type: String },
  { name: "network", alias: "n", type: String, defaultValue: "goerli" },
  { name: "creditNftLengthBlocks", alias: "c", type: Number },
  { name: "pool", alias: "p", type: String },
  { name: "dollarToken0", alias: "d", type: String },
  { name: "curve3CRVToken1", alias: "k", type: String },
  { name: "admin", alias: "a", type: String },
  { name: "base3Pool", alias: "b", type: String },
  { name: "depositZap", alias: "z", type: String },
  { name: "name", alias: "e", type: String },
  { name: "symbol", alias: "s", type: String },
  { name: "uri", alias: "u", type: String },
  { name: "stakingFormulasAddress", alias: "f", type: String },
  { name: "originals", alias: "g", type: String, multiple: true },
  { name: "lpBalances", alias: "l", type: String, multiple: true },
  { name: "weeks", alias: "w", type: String, multiple: true },
  { name: "tos", alias: "o", type: String, multiple: true },
  { name: "amounts", alias: "x", type: String, multiple: true },
  { name: "stakingShareIDs", alias: "i", type: String, multiple: true },
  { name: "treasury", alias: "r", type: String },
  { name: "vestingBlocks", alias: "v", type: Number },
  { name: "testenv", alias: "t", type: Boolean, defaultValue: false },
];
