class studentData {
    name = '';
    email = '';
    age = '';
    score = 0;

    constructor(studentName, studentEmail, studentAge, studentScore) {
        this.name = studentName;
        this.email = studentEmail;
        this.birthDate = studentAge;
        this.score = studentScore;
    }
    get convertAge(){
        return new Date().getFullYear() - new Date(this?.birthDate).getFullYear()
    }
}

const student1 = new studentData('Ian', 'ian@gmail.com', "2004-12-14", 70)
const student2 = new studentData('Riky', 'Riky@gmail.com', "2003-12-12", 75)
const student3 = new studentData('Glenn', 'Glenn@gmail.com', "2002-05-20", 80)

function calculateStudentStats(students) {
    let scores = students.map(i => i.score).sort((a, b) => (a-b))
    let highestScore = scores[scores.length - 1]
    let lowestScore = scores[0]
    let averageScore = scores.reduce((acc, score) => acc + score, 0) / scores.length
    console.log(scores)

    let ages = students.map(i => i.convertAge).sort((a, b) => a - b)
    let highestAge = ages[ages.length - 1]
    let lowestAge = ages[0]
    let averageAge = ages.reduce((acc, item) => acc + item , 0) / ages.length
    console.log(ages)

    return{
        score: {
            highest: highestScore,
            lowest: lowestScore,
            average: averageScore
        },
        age: {
            highest: highestAge,
            lowest: lowestAge,
            average: averageAge
        }
    }
}

const students = [student1, student2, student3]
console.log(calculateStudentStats(students))