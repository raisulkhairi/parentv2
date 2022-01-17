/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'student-kelas',
  templateUrl: './kelas.component.html',
  styleUrls: ['./kelas.component.css'],
})
export class KelasComponent implements OnInit {
  constructor(private studentService: StudentService) {}
  classData: any;
  ngOnInit(): void {
    this._studentInit();
  }

  private _studentInit() {
    this.studentService
      .getStudentByID('61dd725e5d67e84ef1b830d2')
      .subscribe((res) => {
        console.log(res.kelas);
        this.classData = res.kelas;
      });
  }
}
