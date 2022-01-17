/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { Student } from '../../../models/student';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'student-detail-profile',
  templateUrl: './detail-profile.component.html',
  styleUrls: ['./detail-profile.component.css'],
})
export class DetailProfileComponent implements OnInit {
  constructor(private studentService: StudentService) {}
  studentData: Student = {
    _id: '',
    first_name: '',
    last_name: '',
    gender: '',
    father_name: '',
    mother_name: '',
    date_of_birth: '',
    father_occupation: '',
    blood_group: '',
    religion: '',
    email: '',
    year_academic: '',
    addmission_date: '',

    kelas: {
      _id: '',
      class_name: '',
      teacher: {
        _id: '',
        first_name: '',
        last_name: '',
        email: '',
        short_bio: '',
      },
      subject: [
        {
          _id: '',
          subject_name: '',
          teacher_id: {
            _id: '',
            first_name: '',
            last_name: '',
            email: '',
            short_bio: '',
            id: '',
          },
          duration: '',
          id: '',
        },
      ],
    },
    address: '',
    phone: '',
    short_bio: '',
    image: '',
    role: '',
    status: '',
    subject: [
      {
        subject_name: {
          _id: '',
          subject_name: '',
          teacher_id: '',
          duration: '',
          id: '',
        },
        score_subject: '',
      },
    ],
  };
  ngOnInit(): void {
    this._studentInit();
  }

  private _studentInit() {
    this.studentService
      .getStudentByID('61dd725e5d67e84ef1b830d2')
      .subscribe((res) => {
        this.studentData = res;
      });
  }
}
