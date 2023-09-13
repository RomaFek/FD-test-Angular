import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesListComponent } from './components/images-list/images-list.component';
import { ImageItemComponent } from './components/image-item/image-item.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './components/login/login.component';
import { UnitTestComponent } from './components/unit-test/unit-test.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationFormComponent },
  { path: 'images', component: ImagesListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'images/:id', component: ImageItemComponent },
  { path: 'testlogin', component: UnitTestComponent },
  { path: '', component: NavigationMenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
