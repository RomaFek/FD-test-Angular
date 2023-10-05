import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RegistrationFormComponent} from './content/navigation-menu/registration-form/registration-form.component';
import {IConfig, NgxMaskDirective, NgxMaskPipe, provideNgxMask} from 'ngx-mask';
import {
  ConfirmationDialogComponent
} from './content/navigation-menu/registration-form/confirmation-dialog/confirmation-dialog.component';
import {ImageItemComponent} from './content/navigation-menu/images/image-item/image-item.component';
import {DateFormatPipe} from './shared/date-format.pipe';
import {NavigationMenuComponent} from './content/navigation-menu/navigation-menu.component';
import {LoginComponent} from './content/navigation-menu/images/auth-guard/login/login.component';
import {ClockComponent} from './content/clock/clock.component';
import {UnitTestComponent} from './content/unit-test/unit-test.component';
import {SharedModule} from "./shared/shared.module";
import {ImagesComponent} from './content/navigation-menu/images/images.component';

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
    SharedModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [provideNgxMask(maskConfig)],
  bootstrap: [AppComponent]
})
export class AppModule {
}
