// Define the MajorCredits and MinorCredits interfaces
interface MajorCredits {
  brand: "MajorCredits";
  credits: number;
}

interface MinorCredits {
  brand: "MinorCredits";
  credits: number;
}

// Define the sumMajorCredits function
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    brand: "MajorCredits",
    credits: subject1.credits + subject2.credits,
  };
}

// Define the sumMinorCredits function
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    brand: "MinorCredits",
    credits: subject1.credits + subject2.credits,
  };
}

// // Test the functions
// const major1: MajorCredits = { brand: "MajorCredits", credits: 3 };
// const major2: MajorCredits = { brand: "MajorCredits", credits: 4 };
// const minor1: MinorCredits = { brand: "MinorCredits", credits: 2 };
// const minor2: MinorCredits = { brand: "MinorCredits", credits: 1 };

// const resultMajor = sumMajorCredits(major1, major2);
// console.log(resultMajor); // Output: { brand: "MajorCredits", credits: 7 }

// const resultMinor = sumMinorCredits(minor1, minor2);
// console.log(resultMinor); // Output: { brand: "MinorCredits", credits: 3 }
