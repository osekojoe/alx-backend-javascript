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

