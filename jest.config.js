/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src/"],
  verbose: true,
  collectCoverage: true,
  coverageReporters: ["html", "text"],
  coverageDirectory: "coverage",
};
