import {ComponentFixture, TestBed} from '@angular/core/testing';
import {UnitTestComponent} from './unit-test.component';
import {FormBuilder} from '@angular/forms';

describe('UnitTestComponent', () => {
    let component: UnitTestComponent;
    let fixture: ComponentFixture<UnitTestComponent>;
    let formBuilder: FormBuilder;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UnitTestComponent],
        });

        fixture = TestBed.createComponent(UnitTestComponent);
        component = fixture.componentInstance;
        formBuilder = TestBed.inject(FormBuilder);
    });

    it('should create', () => {
        expect(1).toEqual(1);
    });

    it('должна отображаться ошибка для поля "Логин", когда оно было касано и невалидно', () => {
        const errorElement = fixture.nativeElement.querySelector('.unittest__error');
        expect(errorElement).toBeFalsy();

        const loginControl = component.loginForm.get('login');
        loginControl && loginControl.setValue('');
        loginControl && loginControl.markAsTouched();

        fixture.detectChanges();

        const updatedErrorElement = fixture.nativeElement.querySelector('.unittest__error');
        expect(updatedErrorElement.textContent).toContain('Введите логин');
    });

    it('должна отображаться ошибка для поля "Пароль", когда оно было касано и невалидно', () => {
        const errorElement = fixture.nativeElement.querySelector('.unittest__error');
        expect(errorElement).toBeFalsy();

        const passwordControl = component.loginForm.get('password');
        passwordControl && passwordControl.setValue('abc');
        passwordControl && passwordControl.markAsTouched();

        fixture.detectChanges();

        const updatedErrorElement = fixture.nativeElement.querySelector('.unittest__error');
        expect(updatedErrorElement.textContent).toContain('Минимум 6 символов');
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
