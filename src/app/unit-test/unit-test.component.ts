import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-unit-test',
    templateUrl: './unit-test.component.html',
    styleUrls: ['./unit-test.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnitTestComponent {
    loginForm!: FormGroup<{
        login: FormControl<string | null>;
        password: FormControl<string | null>;
    }>;

    constructor() {
        this._createForm()
    }

    private _createForm() {
        this.loginForm = new FormGroup({
            login: new FormControl(''),
            password: new FormControl('')
        })
    }

    isInvalid(controlName: string) {
        const control = this.loginForm.get(controlName);
        return control ? (control.invalid && (control.dirty || control.touched)) : false;
    }
}
