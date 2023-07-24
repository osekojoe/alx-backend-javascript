// Import the createReportObject function from the correct file path.
import createReportObject from './path-to-createReportObject.js';

// Fix ESLint errors related to indentation, semicolons, and unused variables.
export default function* createIteratorObject(report) {
  for (const department in report) {
    for (const employee of report[department]) {
      yield employee;
    }
  }
}
