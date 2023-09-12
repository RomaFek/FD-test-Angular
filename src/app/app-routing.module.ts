import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesListComponent } from './components/images-list/images-list.component';
import { ImageItemComponent } from './components/image-item/image-item.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationFormComponent },
  { path: 'images', component: ImagesListComponent },
  { path: 'images/:id', component: ImageItemComponent },
  { path: '', component: NavigationMenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
