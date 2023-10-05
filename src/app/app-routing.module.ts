import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ImagesComponent} from './content/navigation-menu/images/images.component';
import {ImageItemComponent} from './content/navigation-menu/images/image-item/image-item.component';
import {RegistrationFormComponent} from './content/navigation-menu/registration-form/registration-form.component';
import {NavigationMenuComponent} from './content/navigation-menu/navigation-menu.component';
import {AuthGuard} from './content/navigation-menu/images/auth-guard/auth.guard';
import {LoginComponent} from './content/navigation-menu/images/auth-guard/login/login.component';
import {UnitTestComponent} from './content/unit-test/unit-test.component';

const routes: Routes = [
  {path: 'registration', component: RegistrationFormComponent},
  {path: 'images', component: ImagesComponent, canActivate: [AuthGuard]},
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
