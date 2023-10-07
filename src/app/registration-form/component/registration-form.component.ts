import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmationDialogComponent} from '../../confirmation-dialog/confirmation-dialog.component';
import {takeUntil} from "rxjs";
import {DestroyService} from "../../shared/destroy.service";
import {autocompleteOptions} from "../model/autocompleteOptions";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
  providers: [DestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormComponent {
  registrationForm: FormGroup;

  public autocompleteOptions: string[] = autocompleteOptions

  constructor(private dialog: MatDialog, private destroy$: DestroyService) {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      surname: new FormControl(''),
      birthDate: new FormControl('', Validators.required),
      gender: new FormControl(''),
      phoneNumber: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      workplace: new FormControl(''),
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
      Object.values(this.registrationForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }
  
  public openConfirm(): void {
    if (this.registrationForm.valid) {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        width: '300px',
        data: {message: 'Вы уверены, что хотите отправить форму?'}
      });

      dialogRef.afterClosed().pipe(takeUntil(this.destroy$)).subscribe(result => {
        if (result) {
          console.log('Yes');
        }
      });

    }
  }
}
