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
    this._ContactUsService.contactUs(this.userData).subscribe({
      next:(response)=> { console.log('Data Sent')
        // if(response.message === 'Email sent successfully') {
        //   //success message
        // }
        // else {
        //   //error
        // }
      },
      error:()=> {console.log('Data Not sent')}
    })
  }

}
