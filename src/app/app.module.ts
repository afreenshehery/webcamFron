import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CamraComponent } from './camra/camra.component';
import { WebcamModule } from 'ngx-webcam';
import { ShowImageComponent } from './show-image/show-image.component';
import { HttpClientModule } from '@angular/common/http';
import { ScatchpadComponent } from './scatchpad/scatchpad.component';
import { FormComponent } from './form/form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTreeModule } from '@angular/material/tree';
// import { NewformComponent } from './newform/newform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllshowComponent } from './allshow/allshow.component';
@NgModule({
  declarations: [
    AppComponent,
    CamraComponent,
    ShowImageComponent,
    ScatchpadComponent,
    FormComponent,

    AllshowComponent,
  ],
  imports: [
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    WebcamModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatTreeModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
