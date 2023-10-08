import {ComponentFixture, TestBed} from '@angular/core/testing';
import {UnitTestComponent} from './unit-test.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";

describe('UnitTestComponent', () => {
    let fixture: ComponentFixture<UnitTestComponent>;
    let component: UnitTestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [UnitTestComponent],
            imports: [
                ReactiveFormsModule,
                MatInputModule,
                MatFormFieldModule,
                MatButtonModule,
                BrowserAnimationsModule,
            ],
        });

        fixture = TestBed.createComponent(UnitTestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('должна отображаться ошибка для поля "Логин", когда оно было касано и невалидно', () => {
        const loginControl = component.loginForm.get('login');
        loginControl && loginControl.setValue('');
        loginControl && loginControl.markAsTouched();
        fixture.detectChanges();

        const errorElement = fixture.nativeElement.querySelector('.unittest__error');
        expect(errorElement.textContent).toContain('Введите логин');
    });

    it('должна отображаться ошибка для поля "Пароль", когда оно было касано и невалидно', () => {
        const passwordControl = component.loginForm.get('password');
        passwordControl && passwordControl.setValue('abc');
        passwordControl && passwordControl.markAsTouched();
        fixture.detectChanges();

        const errorElement = fixture.nativeElement.querySelector('.unittest__error');
        expect(errorElement.textContent).toContain('Минимум 6 символов');
    });

    it('должна быть заблокирована кнопка "Вход", когда форма невалидна', () => {
        const buttonElement = fixture.nativeElement.querySelector('.unittest__button');
        expect(buttonElement.disabled).toBeTruthy();

        const loginControl = component.loginForm.get('login');
        loginControl && loginControl.setValue('valid_login');
        const passwordControl = component.loginForm.get('password');
        passwordControl && passwordControl.setValue('valid_password');
        fixture.detectChanges();

        expect(buttonElement.disabled).toBeFalsy();
    });
});
