/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';
@Component({
  selector: 'teacher-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  showProfile = false;
  showProfile2 = false;
  showProfile3 = false;
  constructor(private teacherService: TeacherService) {}
  subject?: any[] = [
    {
      _id: '',
      subject_name: '',
      teacher_id: '',
      duration: '',
    },
  ];
  ngOnInit(): void {
    this._teacherInit();
  }
  private _teacherInit() {
    this.teacherService
      .getTeacherByID('61d6f6a79d85b51c80471723')
      .subscribe((res) => {
        this.subject = res.Subject;
        console.log('HASIL : ', this.subject);
      });
  }

  goToLink(idSubject: any) {
    window.location.href = `/add-score/${idSubject}`;
  }
}
