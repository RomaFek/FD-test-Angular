import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RegistrationFormComponent} from './registration-form/component/registration-form.component';
import {IConfig, NgxMaskDirective, NgxMaskPipe, provideNgxMask} from 'ngx-mask';
import {ConfirmationDialogComponent} from './confirmation-dialog/confirmation-dialog.component';
import {ImageItemComponent} from './image-item/image-item.component';
import {DateFormatPipe} from './shared/date-format.pipe';
import {NavigationMenuComponent} from './navigation-menu/navigation-menu.component';
import {LoginComponent} from './login/component/login.component';
import {ClockComponent} from './clock/clock.component';
import {UnitTestComponent} from './unit-test/unit-test.component';
import {ImagesComponent} from './images-list/component/images.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import {MatRadioModule} from "@angular/material/radio";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatDialogModule} from "@angular/material/dialog";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {ImageInterceptor} from "./images-list/interceptor/image.interceptor";
import {environment} from "../environment";

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    ConfirmationDialogComponent,
    ImageItemComponent,
    DateFormatPipe,
    NavigationMenuComponent,
    LoginComponent,
    ClockComponent,
    UnitTestComponent,
    ImagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatDialogModule,
    HttpClientModule,
    MatButtonModule,
  ],
  providers: [provideNgxMask(maskConfig),
    {
      provide: 'baseUrl',
      useValue: environment.baseUrl
    },
    {
      provide: 'accessKey',
      useValue: environment.accessKey
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ImageInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
