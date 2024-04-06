import { Component } from '@angular/core';
import { ContactUsService } from '../contact-us.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  userData:any[] =[];

  constructor(private _ContactUsService:ContactUsService) {}

  sendUserData(data:any) {
    console.log(data)
    // this.userData.saveUserData(data).subscribe((result) =>{
    //   console.log(data);
    // })
  }

}
