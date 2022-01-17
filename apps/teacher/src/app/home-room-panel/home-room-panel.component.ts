/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { KelasService } from '../services/kelas.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'teacher-home-room-panel',
  templateUrl: './home-room-panel.component.html',
  styleUrls: ['./home-room-panel.component.css'],
})
export class HomeRoomPanelComponent implements OnInit {
  ///
  students!: Student[];
  subjectList!: any;
  namaKelas!: string;
  constructor(
    private studentService: StudentService,
    private kelasService: KelasService
  ) {}

  ngOnInit(): void {
    this.studentService
      .getAllStudentByClass('61dd65db591ae97754b4065c')
      .subscribe((res) => {
        this.students = res;

        this.subjectList = this.students[0].subject?.map((el) => {
          return el.subject_name?.subject_name;
        });
      });

    this.kelasService.getAllClass().subscribe((res) => {
      console.log('RES', res);
      res.forEach((el) => {
        if (el._id.toString() == '61dd65db591ae97754b4065c') {
          console.log('ETE');
          this.namaKelas = el.class_name;
          console.log(el.class_name);
        }
      });
    });
  }
}
