export class StudentsResult {
    records:Array<Students>=[];
    top:Array<string>=[];
}
export class Students
{
    name:string;
    students:StudentList;
}
export class StudentList{
    name:Array<StudentName>=[];
    dob:string;
    class:string;
    marks:Array<StudentMarks>=[];
    title:string;
    totalMarks:number=0; 
}

export class StudentName
{
    first:string;
    last:string;
}

export class StudentMarks
{
    subject:string;
    marks:number;
}
