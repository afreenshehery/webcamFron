import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllshowComponent } from './allshow/allshow.component';
import { CamraComponent } from './camra/camra.component';
import { FormComponent } from './form/form.component';
import { ShowImageComponent } from './show-image/show-image.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'camra' },
  {
    path: 'camra',
    component: CamraComponent,
  },
  {
    path: 'showImage',
    component: ShowImageComponent,
  },

  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'allshow',
    component: AllshowComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
