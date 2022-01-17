/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../models/teacher';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'teacher-detail-profil',
  templateUrl: './detail-profil.component.html',
  styleUrls: ['./detail-profil.component.css'],
})
export class DetailProfilComponent implements OnInit {
  constructor(private teacherService: TeacherService) {}
  teacherData: Teacher = {
    _id: '',
    first_name: '',
    last_name: '',
    gender: '',
    date_of_birth: '',
    blood_group: '',
    religion: '',
    addmission_date: '',
    email: '',
    address: '',
    phone: '',
    short_bio: '',
    image: '',
    role: '',
    kelas: {
      _id: '',
      class_name: '',
    },
    Subject: [
      {
        subject_name: '',
      },
    ],
  };
  ngOnInit(): void {
    this._teacherInit();
  }

  private _teacherInit() {
    this.teacherService
      .getTeacherByID('61d6f6a79d85b51c80471723')
      .subscribe((res) => {
        this.teacherData = res;
      });
  }

  Submit() {}
}
