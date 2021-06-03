import { Component, OnInit } from '@angular/core';
import  *  as  StudentData  from  './../../../assets/Input.json';
import {Students, StudentList,StudentsResult} from './student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentData:Array<any>;
  studentsRecord:Students;
  studentsList:StudentList;
  studentResult:StudentsResult;
  constructor() 
  {
     this.studentsRecord=new Students();
     this.studentsList=new StudentList();
     this.studentResult=new StudentsResult();
  }

  ngOnInit(): void {
    this.processData();
  }

  processData()
  {
    this.studentData=new Array<any>();
    this.studentData.push(StudentData);
    this.studentData=this.studentData[0].default;
    var OutputResult=this.calculateData();
    console.log(OutputResult)
  }

  calculateData()
  {
    for(var i=0; i<this.studentData.length; i++)
    {
      this.studentsList=new StudentList();
      this.studentsRecord=new Students();
      this.studentsRecord.name=this.studentData[i].class;
      this.studentsList.name=this.studentData[i].name;
      this.studentsList.class=this.studentData[i].class;
      this.studentsList.dob=this.studentData[i].dob;
      this.studentsList.marks=this.studentData[i].marks;
      this.studentsList.title=this.studentData[i].name.first +" "+ this.studentData[i].name.last;
      for(var k=0 ;k<this.studentsList.marks.length; k++)
      {
        this.studentsList.totalMarks+=this.studentsList.marks[k].marks;
      }
    
    this.studentsRecord.students=this.studentsList;
    this.studentResult.records.push(this.studentsRecord)
    var topResultString=this.studentsList.title +" from "+ this.studentsList.class+ " obtained " +this.studentsList.totalMarks;
    this.studentResult.top.push(topResultString);
    }
    this.studentResult.top= this.studentResult.top.reverse();
    return this.studentResult;
    
  }

}
