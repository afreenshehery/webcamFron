import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  data: any;
  name: any;
  email: any;
  store: any;
  store1: any;
  constructor(private router: Router, private service: ServiceService) {}
  onSignup(form: NgForm) {
    this.store = localStorage.getItem('image');
    console.log(this.store);
    console.log(form.value);
    console.log(form.value.email);
    this.name = form.value.name;
    this.email = form.value.email;

    this.data = {
      name: form.value.name,
      // email: form.value.email,
      Image: this.store,
    };
    this.router.navigate(['/showImage']);

    localStorage.setItem('name', form.value.name);
    localStorage.setItem('email', form.value.email);
    form.resetForm();
    this.service.webcam(this.data).subscribe((response) => {
      console.log(response.data);
    });
  }

  // click() {
  //   console.log('clicked');

  // }
  element: [] = [];
  ngOnInit(): void {
    // this.service.getwebcam().subscribe((Response) => {
    // console.log(Response.DoctorInfo);
    // this.data = Response.DoctorInfo;
    // console.log(data);
    // for (let index = 1; index < data.length; index++) {
    //   this.element = data[index];
    // }
    // data.forEach((element: { image: any; name: any }) => {
    //   console.log(element.image);
    //   this.store1 = element.image;
    // });
    // });
  }
}
