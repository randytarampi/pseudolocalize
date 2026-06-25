import childProcess from "node:child_process";
import {fileURLToPath} from "node:url";
import {expect} from "chai";
import Pseudolocalizer from "../../../lib/pseudolocalizer.js";

const binPath = fileURLToPath(new URL("../../../bin/p7e.js", import.meta.url));

describe("p7e", function () {
    this.timeout(60000);

    it("throws an error when given no input", function () {
        const stubArguments = [];

        return new Promise((resolve, reject) => {
            childProcess.execFile(binPath, stubArguments, (error, stdout, stderr) => {
                try {
                    expect(error).to.be.ok;
                    expect(stdout).to.eql("");
                    expect(stderr).to.match(/Please supply a value|missing required argument/);
                    resolve();
                } catch (expectationError) {
                    reject(expectationError);
                }
            });
        });
    });

    describe("preset", function () {
        it("throws an error when given a bad preset", function () {
            const stubArguments = [
                "--preset=foo",
                "bar"
            ];

            return new Promise((resolve, reject) => {
                childProcess.execFile(binPath, stubArguments, (error, stdout, stderr) => {
                    try {
                        expect(error).to.be.ok;
                        expect(stdout).to.eql("");
                        expect(stderr).to.match(/Please specify a proper preset/);
                        resolve();
                    } catch (expectationError) {
                        reject(expectationError);
                    }
                });
            });
        });

        it("uses a specified preset", function () {
            const stubArguments = [
                "--preset=mix",
                "--relativeScale=1",
                "bar"
            ];

            return new Promise((resolve, reject) => {
                childProcess.execFile(binPath, stubArguments, (error, stdout, stderr) => {
                    try {
                        expect(error).to.eql(null);
                        expect(stdout).to.contain(Pseudolocalizer.mix().pseudolocalize(stubArguments[stubArguments.length - 1]));
                        expect(stderr).to.not.contain(/Please specify a proper preset/);
                        resolve();
                    } catch (expectationError) {
                        reject(expectationError);
                    }
                });
            });
        });

        it("defaults to no preset", function () {
            const stubArguments = [
                "--relativeScale=1",
                "bar"
            ];

            return new Promise((resolve, reject) => {
                childProcess.execFile(binPath, stubArguments, (error, stdout, stderr) => {
                    try {
                        expect(error).to.eql(null);
                        expect(stdout).to.contain(new Pseudolocalizer().pseudolocalize(stubArguments[stubArguments.length - 1]));
                        expect(stderr).to.not.contain(/Please specify a proper preset/);
                        resolve();
                    } catch (expectationError) {
                        reject(expectationError);
                    }
                });
            });
        });
    });
});
