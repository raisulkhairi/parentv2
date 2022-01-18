/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { Parent } from '../../../models/parent';
import { ParentService } from '../../../services/parent.service';

@Component({
  selector: 'parent-detail-profile',
  templateUrl: './detail-profile.component.html',
  styleUrls: ['./detail-profile.component.css'],
})
export class DetailProfileComponent implements OnInit {
  constructor(private parentService: ParentService) {}
  parentData: Parent = {
    _id: '',
    first_name: '',
    last_name: '',
    gender: '',
    date_of_birth: '',
    occupation: '',
    blood_group: '',
    religion: '',
    email: '',
    address: '',
    phone: '',
    image: '',
    role: '',
    status: '',
    child: [
      {
        first_name: '',
        last_name: '',
        gender: '',
        date_of_birth: '',
        religion: '',
        email: '',
        phone: '',
        image: '',
        kelas: {
          class_name: '',
        },
        address: '',
      },
    ],
  };
  ngOnInit(): void {
    this._parentInit();
  }

  private _parentInit() {
    this.parentService
      .getParentById('61e29a10f9e10e4f8ad8913d')
      .subscribe((res) => {
        this.parentData = res;
      });
  }
}
