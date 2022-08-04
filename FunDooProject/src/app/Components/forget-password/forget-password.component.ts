import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  Forgetpassword!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.Forgetpassword = this.formBuilder.group({
      EmailOrPhoneNumber: ['', Validators.required],
    });
  }
  ForgetPassword() {
    console.log("filled data", this.Forgetpassword.value);
  }

}
