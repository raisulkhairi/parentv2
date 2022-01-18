/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Parent } from '../../../models/parent';
import { ParentService } from '../../../services/parent.service';
@Component({
  selector: 'parent-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  form!: FormGroup;
  formImage!: FormGroup;
  imageParent: any;
  imageDisplay: any;
  constructor(
    private parentService: ParentService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this._parentInit();
    this._parentImageInit();
    this.parentEditForm('61e29a10f9e10e4f8ad8913d');
  }

  private _parentInit() {
    this.form = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      gender: ['', Validators.required],
      date_of_birth: ['', Validators.required],
      occupation: ['', Validators.required],
      blood_group: ['', Validators.required],
      religion: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  private _parentImageInit() {
    this.formImage = this.formBuilder.group({
      image: ['', Validators.required],
    });
  }

  private parentEditForm(id: any) {
    this.parentService.getParentById(id).subscribe((res) => {
      this.imageParent = res.image;
      console.log(this.imageParent);
      this.parentForm['first_name'].setValue(res.first_name);
      this.parentForm['last_name'].setValue(res.last_name);
      this.parentForm['gender'].setValue(res.gender);
      this.parentForm['date_of_birth'].setValue(res.date_of_birth);
      this.parentForm['occupation'].setValue(res.occupation);
      this.parentForm['blood_group'].setValue(res.blood_group);
      this.parentForm['religion'].setValue(res.religion);
      this.parentForm['email'].setValue(res.email);
      this.parentForm['address'].setValue(res.address);
      this.parentForm['phone'].setValue(res.phone);
      this.parentForm['password'].setValue(res.password);
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
  editParent() {
    const parentData: Parent = {
      first_name: this.parentForm['first_name'].value,
      last_name: this.parentForm['last_name'].value,
      gender: this.parentForm['gender'].value,
      date_of_birth: this.parentForm['date_of_birth'].value,
      occupation: this.parentForm['occupation'].value,
      blood_group: this.parentForm['blood_group'].value,
      religion: this.parentForm['religion'].value,
      email: this.parentForm['email'].value,
      address: this.parentForm['address'].value,
      phone: this.parentForm['phone'].value,
      password: this.parentForm['password'].value,
    };

    this.parentService
      .editByParent('61e29a10f9e10e4f8ad8913d', parentData)
      .subscribe((res) => {
        console.log('HASIL EDIT DATA : ', res);
      });
  }

  submitImage() {
    const imageParent = new FormData();
    Object.keys(this.imageForparentForm).map((key) => {
      imageParent.append(key, this.imageForparentForm[key].value);
    });

    this.parentService
      .editParentImageByParent('61e29a10f9e10e4f8ad8913d', imageParent)
      .subscribe((res) => {
        console.log('Hasil : ', res);
      });
  }

  get parentForm() {
    return this.form.controls;
  }
  get imageForparentForm() {
    return this.formImage.controls;
  }
}
