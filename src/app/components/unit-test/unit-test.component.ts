import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-unit-test',
  templateUrl: './unit-test.component.html',
  styleUrls: ['./unit-test.component.css']
})
export class UnitTestComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.registrationForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.registrationForm.get(controlName);
    return control ? (control.invalid && (control.touched || control.dirty)) : false;
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
    } else {
      this.markTouched(this.registrationForm);
    }
  }

  markTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
        control.markAsTouched();
    });
  }

}
