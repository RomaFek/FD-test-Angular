import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ImagesComponent} from './images-list/component/images.component';
import {ImageItemComponent} from './image-item/image-item.component';
import {RegistrationFormComponent} from './registration-form/component/registration-form.component';
import {NavigationMenuComponent} from './navigation-menu/navigation-menu.component';
import {LoginComponent} from './login/component/login.component';
import {UnitTestComponent} from './unit-test/unit-test.component';
import {AuthRedirectGuard} from "./login/guard/auth.redirect.guard";

const routes: Routes = [
  {path: 'registration', component: RegistrationFormComponent},
  {path: 'images', component: ImagesComponent, canActivate: [AuthRedirectGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'images/:id', component: ImageItemComponent},
  {path: 'testlogin', component: UnitTestComponent},
  {path: '', component: NavigationMenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
