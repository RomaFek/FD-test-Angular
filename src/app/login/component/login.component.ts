import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

    public login!: FormGroup

    constructor(private router: Router) {
        this._createForm()
    }

    private _createForm() {
        this.login = new FormGroup({
            username: new FormControl(''),
            password: new FormControl('')
        })
    }

    public onSubmit(): void {
        const username = this.login.get('username')?.value;
        const password = this.login.get('password')?.value;
        if (username === '123' && password === '123') {
            sessionStorage.setItem('authenticated', 'true');
            this.router.navigate(['/images']);
        } else {
            alert('Ошибка входа. Пожалуйста, проверьте логин и пароль.');
        }
    }
}
