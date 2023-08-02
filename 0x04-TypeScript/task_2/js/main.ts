// DirectorInterface interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
	workFromHome(): string {
    	return "Working from home";
  }

  	getCoffeeBreak(): string {
    	return "Getting a coffee break";
  	}

  	workDirectorTasks(): string {
    	return "Getting to director tasks";
  	}
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  	workFromHome(): string {
    	return "Cannot work from home";
	}

	getCoffeeBreak(): string {
		return "Cannot have a break";
	}

	workTeacherTasks(): string {
		return "Getting to work";
	}
}

// Function to create Employee based on salary
function createEmployee(salary: number | string): Director | Teacher {
	if (typeof salary === "number" && salary < 500) {
		return new Teacher()
	} else {
		return new Director()
	}
}

// Type predicate function to check if employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
	return "workDirectorTasks" in employee;
}

// Function to execute work based on the employee type
function executeWork(employee: Director | Teacher) {
	if (isDirector(employee)) {
		console.log(employee.workDirectorTasks());
	} else {
		console.log(employee.workTeacherTasks());
	}
}

// String literal type for Subjects
type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
	if (todayClass === 'Math') {
		return 'Teaching Math';
	} else if(todayClass === 'History') {
		return 'Teaching History';
	} else {
		return 'Unknown subject';
	}
}
