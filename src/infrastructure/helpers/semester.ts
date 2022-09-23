import moment from "moment"


export class VerifySemester {

    static semesterVerify() {
        let semester: number = 0
        if (moment().format('MM') >= '01' && moment().format('MM') <= '06') semester = 1
        else if (moment().format('MM') >= '07' && moment().format('MM') <= '12') semester = 2
        return semester
    }

}


