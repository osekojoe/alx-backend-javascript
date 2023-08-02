// interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// create students
const student1: Student = {
	firstName: 'a',
	lastName: 'b',
	age: 32,
	location: 'London',
}

const student2: Student = {
	firstName: 'c',
	lastName: 'd',
	age: 23,
	location: 'Paris',
}

// array containing students
const studentsList: Student[] = [student1, student2]

// render table
function renderTable() {
	const table = document.createElement('table')

	// create table headers
	const headerRow = document.createElement('tr')
	const headerFirstName = document.createElement('th')
	headerFirstName.textContent = 'First Name'
	const headerLocation = document.createElement('th')
	headerLocation.textContent = 'Location'

	// append headers as rows to the table
	headerRow.appendChild(headerFirstName)
	headerRow.appendChild(headerLocation)
	table.appendChild(headerRow)

	// append rows for each student to the table
	studentsList.forEach(student => {
		const row = document.createElement('tr')
		const firstNameCell = document.createElement('td')
		firstNameCell.textContent = student.firstName
		const locationCell = document.createElement('td')
		locationCell.textContent = student.location

		row.appendChild(firstNameCell)
		row.appendChild(locationCell)
		table.appendChild(row)
	})

	document.body.appendChild(table)
}

renderTable()
