import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  sender:string= 'jchristiandias@gmail.com';
  passwordSender:string='(hri$M@sterin';
  receiver:string='';
  subject:string='';
  text:string='';
  submitted: boolean;
  constructor() { }

  ngOnInit(): void {
  }


/*  sendMail(){


    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.sender,
        pass: this.passwordSender
      }
    });

    var mailOptions = {
      from: this.receiver,
      to: this.sender,
      subject: this.subject,
      text: this.text
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }*/

}
