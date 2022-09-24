import moment from "moment"


export class VerifySemester {

    static semesterVerify() {
        let semester: number = 0
        if (moment().month() >= 1 && moment().month() <= 6) semester = 1
        else if (moment().month() >= 7 && moment().month() <= 12) semester = 2
        return semester
    }
}

