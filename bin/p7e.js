#!/usr/bin/env node

import {readFileSync} from "node:fs";
import {program} from "commander";
import Pseudolocalizer from "../lib/pseudolocalizer.js";

const packageJson = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));

program
    .version(packageJson.version)
    .argument("<strings...>", "Text-to-ʕ•ᴥ•ʔ translations for strings")
    .description("Text-to-ʕ•ᴥ•ʔ translations for strings")
    .option("-p, --preset <preset>", "Use a preset pseudolocalizer {CJK, LCG, AFB, mix}")
    .option("-r, --relativeScale <number>", "Use a custom relativeScale")
    .option("-s, --prefix <string>", "Use a custom prefix")
    .option("-e, --postfix <string>", "Use a custom postfix")
    .option("--prePad <string>", "Use a custom pre padding")
    .option("--postPad <string>", "Use a custom post padding")
    .parse(process.argv);

const options = program.opts();
let pseudolocalizer;

if (program.args.length === 0) {
    console.error("Please supply a value");  
    process.exit(1);
}

const parsedRelativeScale = options.relativeScale ? parseFloat(options.relativeScale) : undefined;

if (options.preset) {
    if (!["CJK", "LCG", "AFB", "mix"].includes(options.preset)) {
        console.error("Please specify a proper preset");  
        process.exit(1);
    }
    pseudolocalizer = Pseudolocalizer[options.preset](parsedRelativeScale, options.prefix, options.postfix, options.prePad, options.postPad);
} else {
    pseudolocalizer = new Pseudolocalizer(parsedRelativeScale, options.prefix, options.postfix, options.prePad, options.postPad);
}

program.args.forEach(function (string) {
    console.log(pseudolocalizer.pseudolocalize(string));  
});
