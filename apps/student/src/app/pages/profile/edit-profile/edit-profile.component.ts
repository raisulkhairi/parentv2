/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../../models/student';
import { StudentService } from '../../../services/student.service';
@Component({
  selector: 'student-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  form!: FormGroup;
  formImage!: FormGroup;
  imageStudent: any;
  imageDisplay: any;
  constructor(
    private studentService: StudentService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this._studentInit();
    this._studentImageInit();
    this.studentEditForm('61dd725e5d67e84ef1b830d2');
  }

  private _studentInit() {
    this.form = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      gender: ['', Validators.required],
      father_name: ['', Validators.required],
      mother_name: ['', Validators.required],
      date_of_birth: ['', Validators.required],
      father_occupation: ['', Validators.required],
      blood_group: ['', Validators.required],
      religion: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      short_bio: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  private _studentImageInit() {
    this.formImage = this.formBuilder.group({
      image: ['', Validators.required],
    });
  }

  private studentEditForm(id: any) {
    this.studentService.getStudentByID(id).subscribe((res) => {
      this.imageStudent = res.image;
      console.log(this.imageStudent);
      this.studentForm['first_name'].setValue(res.first_name);
      this.studentForm['last_name'].setValue(res.last_name);
      this.studentForm['gender'].setValue(res.gender);
      this.studentForm['father_name'].setValue(res.father_name);
      this.studentForm['mother_name'].setValue(res.mother_name);
      this.studentForm['date_of_birth'].setValue(res.date_of_birth);
      this.studentForm['father_occupation'].setValue(res.father_occupation);
      this.studentForm['blood_group'].setValue(res.blood_group);
      this.studentForm['religion'].setValue(res.religion);

      this.studentForm['email'].setValue(res.email);
      this.studentForm['address'].setValue(res.address);
      this.studentForm['phone'].setValue(res.phone);
      this.studentForm['short_bio'].setValue(res.short_bio);
      this.studentForm['password'].setValue(res.password);
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
  editStudent() {
    const studentData: Student = {
      first_name: this.studentForm['first_name'].value,
      last_name: this.studentForm['last_name'].value,
      gender: this.studentForm['gender'].value,
      father_name: this.studentForm['father_name'].value,
      mother_name: this.studentForm['mother_name'].value,
      date_of_birth: this.studentForm['date_of_birth'].value,
      father_occupation: this.studentForm['father_occupation'].value,
      blood_group: this.studentForm['blood_group'].value,
      religion: this.studentForm['religion'].value,
      email: this.studentForm['email'].value,
      address: this.studentForm['address'].value,
      phone: this.studentForm['phone'].value,
      short_bio: this.studentForm['short_bio'].value,
      password: this.studentForm['password'].value,
    };

    this.studentService
      .editStudent('61dd725e5d67e84ef1b830d2', studentData)
      .subscribe((res) => {
        console.log('HASIL EDIT DATA : ', res);
      });
  }

  submitImage() {
    const imageStudent = new FormData();
    Object.keys(this.imageForStudentForm).map((key) => {
      imageStudent.append(key, this.imageForStudentForm[key].value);
    });

    this.studentService
      .editStudentImageByStudent('61dd725e5d67e84ef1b830d2', imageStudent)
      .subscribe((res) => {
        console.log('Hasil : ', res);
      });
  }

  get studentForm() {
    return this.form.controls;
  }
  get imageForStudentForm() {
    return this.formImage.controls;
  }
}
