import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
// import { ServoiceService } from '../servoice.service';

@Component({
  selector: 'app-allshow',
  templateUrl: './allshow.component.html',
  styleUrls: ['./allshow.component.css'],
})
export class AllshowComponent implements OnInit {
  constructor(private service: ServiceService) {}
  data: any;
  data1: any = [];
  ngOnInit(): void {
    this.service.getwebcam().subscribe((Response) => {
      this.data = Response.DoctorInfo;
      console.log(Response.DoctorInfo);
    });
    this.data = '';
    setInterval(() => {
      this.reload();
    }, 2000);
  }

  reload() {
    this.service.getwebcam().subscribe((Response) => {
      this.data = Response.DoctorInfo;
      console.log(Response.DoctorInfo);
    });
  }
}
