// teacher interface
interface Teacher {
	readonly firstName: string,
	readonly lastName: string,
	fullTimeEmployee: boolean,
	yearsOfExperience?: number,
    location: string,
	[anyproperty: string]: any
}

// Directors interface extends Teachers interface
interface Directors extends Teacher {
	numberOfReports: number,
}

// printing teachers
interface printTeacherFunction {
	(firstName: string,
		lastName: string): string;
}

const printTeacher: printTeacherFunction = (
	firstName: string,
	lastName: string
): string => `${firstName.charAt(0)}. ${lastName}`;
