function studentData(dataStudent1, dataStudent2) {
    const mixedData = [...dataStudent1, ...dataStudent2]
    const noDuplicate = new Map()

    mixedData.forEach(student =>{
        noDuplicate.set(student.email, student)
    })
    return Array.from(noDuplicate.values())
}
const dataStudent1 =
    [
        {Nama:'Ian', email: 'ian@gmail.com'},
        {Nama:'Jovin', email: 'Jovin@email.com'}
    ]

const dataStudent2 =
[ 
    {Nama:'Ian', email: 'ian@gmail.com'},
    {Nama:'Glenn', email: 'Glenn@yahoo,com'}
]

console.log(studentData(dataStudent1,dataStudent2))