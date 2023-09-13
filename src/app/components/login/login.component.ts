import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

      constructor(private router: Router) { }

  onSubmit(): void {
    if (this.username === '123' && this.password === '123') {
      sessionStorage.setItem('authenticated', 'true');

      this.router.navigate(['/images']);
    } else {
      alert('Ошибка входа. Пожалуйста, проверьте логин и пароль.');
    }
  }
}
