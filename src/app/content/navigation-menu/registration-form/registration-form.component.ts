import {Component, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmationDialogComponent} from './confirmation-dialog/confirmation-dialog.component';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnDestroy {
  private dialogRefSubscription!: Subscription;
  registrationForm: FormGroup;

  public autocompleteOptions: string[] = [
    'Apple',
    'Bananas',
    'Mango',
    'Pineapple',
    'Melon',
    'Cherry'
  ];

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      surname: [''],
      birthDate: ['', Validators.required],
      gender: [''],
      phoneNumber: ['', [Validators.required]],
      email: ['', Validators.email],
      workplace: [''],
    });
  }

  public isInvalid(controlName: string): boolean {
    const control = this.registrationForm.get(controlName);
    return control ? (control.invalid && (control.touched || control.dirty)) : false;
  }

  public onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
    } else {
      this.markTouched(this.registrationForm);
    }
  }

  public markTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  public openConfirm(): void {
    if (this.registrationForm.valid) {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        width: '300px',
        data: {message: 'Вы уверены, что хотите отправить форму?'}
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log('Yes');
        }
      });

    }
  }

  public ngOnDestroy() {
    if (this.dialogRefSubscription) {
      this.dialogRefSubscription.unsubscribe();
    }
  }
}
