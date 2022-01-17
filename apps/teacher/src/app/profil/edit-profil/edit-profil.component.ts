/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Teacher } from '../../models/teacher';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'teacher-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css'],
})
export class EditProfilComponent implements OnInit {
  form!: FormGroup;
  formImage!: FormGroup;
  imageTeacher: any;
  imageDisplay: any;
  constructor(
    private teacherService: TeacherService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this._teachertInit();
    this._teacherImageInit();
    this.teacherEditForm('61d6f6a79d85b51c80471723');
  }

  private _teachertInit() {
    this.form = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      gender: ['', Validators.required],
      date_of_birth: ['', Validators.required],
      blood_group: ['', Validators.required],
      religion: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      short_bio: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  private _teacherImageInit() {
    this.formImage = this.formBuilder.group({
      image: ['', Validators.required],
    });
  }

  private teacherEditForm(id: any) {
    this.teacherService.getTeacherByID(id).subscribe((res) => {
      this.imageTeacher = res.image;
      console.log(this.imageTeacher);
      this.teacherForm['first_name'].setValue(res.first_name);
      this.teacherForm['last_name'].setValue(res.last_name);
      this.teacherForm['gender'].setValue(res.gender);
      this.teacherForm['date_of_birth'].setValue(res.date_of_birth);
      this.teacherForm['blood_group'].setValue(res.blood_group);
      this.teacherForm['religion'].setValue(res.religion);

      this.teacherForm['email'].setValue(res.email);
      this.teacherForm['address'].setValue(res.address);
      this.teacherForm['phone'].setValue(res.phone);
      this.teacherForm['short_bio'].setValue(res.short_bio);
      this.teacherForm['password'].setValue(res.password);
    });
  }

  editImage(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.formImage.patchValue({ image: file });
      this.formImage.get('image')?.updateValueAndValidity();
      const fileReader = new FileReader();
      fileReader.onload = () => {
        this.imageDisplay = fileReader.result;
      };
      fileReader.readAsDataURL(file);
    }
  }
  editTeacher() {
    const teacherData: Teacher = {
      first_name: this.teacherForm['first_name'].value,
      last_name: this.teacherForm['last_name'].value,
      gender: this.teacherForm['gender'].value,
      date_of_birth: this.teacherForm['date_of_birth'].value,
      blood_group: this.teacherForm['blood_group'].value,
      religion: this.teacherForm['religion'].value,
      email: this.teacherForm['email'].value,
      address: this.teacherForm['address'].value,
      phone: this.teacherForm['phone'].value,
      short_bio: this.teacherForm['short_bio'].value,
      password: this.teacherForm['password'].value,
    };

    this.teacherService
      .editTeacherByTeacher('61d6f6a79d85b51c80471723', teacherData)
      .subscribe((res) => {
        console.log('HASIL EDIT DATA : ', res);
      });
  }

  submitImage() {
    const imageTeacher = new FormData();
    Object.keys(this.imageForTeacherForm).map((key) => {
      imageTeacher.append(key, this.imageForTeacherForm[key].value);
    });

    this.teacherService
      .editTeacherImageByTeacher('61d6f6a79d85b51c80471723', imageTeacher)
      .subscribe((res) => {
        console.log('Hasil : ', res);
      });
  }

  get teacherForm() {
    return this.form.controls;
  }
  get imageForTeacherForm() {
    return this.formImage.controls;
  }
}
