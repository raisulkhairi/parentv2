import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student.service';

interface gradeInterface {
  'Subject Name': string;
  score: number;
}

@Component({
  selector: 'parent-score-info',
  templateUrl: './score-info.component.html',
  styleUrls: ['./score-info.component.css'],
})
export class ScoreInfoComponent implements OnInit {
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) {}

  studentData: any[] = [];
  idStudent: any;
  displayedColumns: string[] = ['Subject Name', 'score'];
  grades: gradeInterface[] = [];
  grades2: gradeInterface[] = [];

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      params['idStudent'];

      this.idStudent = params['idStudent'];
    });
    this._studentInit(this.idStudent);
  }

  private _studentInit(id: any) {
    this.studentService.getStudentByID(id).subscribe((res) => {
      res.subject?.forEach((el: any) => {
        this.studentData.push(el);
      });
      this.studentData.forEach((el) => {
        this.grades2.push({
          'Subject Name': el.subject_name.subject_name,
          score: parseInt(el.score_subject),
        });
      });
      console.log(this.grades2);
    });
    setTimeout(() => {
      this.grades = this.grades2;
    }, 200);
  }
}
