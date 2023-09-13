import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask, IConfig } from 'ngx-mask';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ImageItemComponent } from './components/image-item/image-item.component';
import { ImagesListComponent } from './components/images-list/images-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DateFormatPipe } from './date-format.pipe';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { LoginComponent } from './components/login/login.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    ConfirmationDialogComponent,
    ImageItemComponent,
    ImagesListComponent,
    DateFormatPipe,
    NavigationMenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    NgxMaskDirective,
    NgxMaskPipe,
    MatAutocompleteModule,
    MatDialogModule,
    HttpClientModule,
  ],
  providers: [provideNgxMask(maskConfig)],
  bootstrap: [AppComponent]
})
export class AppModule { }
