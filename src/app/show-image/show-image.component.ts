import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.css'],
})
export class ShowImageComponent implements OnInit {
  constructor() {}
  public webcamImage: any;
  name: any;
  email: any;

  // handleImage(webcamImage: WebcamImage)
  //   this.webcamImage = webcamImage;
  // }

  ngOnInit(): void {
    this.webcamImage = localStorage.getItem('image');
    this.email = localStorage.getItem('email');
    this.name = localStorage.getItem('name');

    // location.reload();
    console.log(this.name);

    //   let stote:any
    //   for (let index = 0; index < this.webcamImage.length; index++) {
    //     stote = this.webcamImage[index];
    //     stote.forEach((element:any)=> {
    //       console.log(element);

    //   }

    // )}
  }
  hello() {
    console.log('gjhgjh');
  }
}
