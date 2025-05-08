export default class Student {
    constructor(name, lastName, averageScore) {
        this.name = name;
        this.lastName = lastName;
        this.averageScore = averageScore;
    }

    static getStudentsAverageScore(studentsList) {
        if (studentsList.length > 0) {
            console.log(studentsList.length);
            let averageScoreValue = 0;
            for (let i = 0; i < studentsList.length; i++) {
                averageScoreValue += studentsList[i].averageScore;
            }
            return (averageScoreValue / studentsList.length);
        } else {
            return 0;
        }
    }
}