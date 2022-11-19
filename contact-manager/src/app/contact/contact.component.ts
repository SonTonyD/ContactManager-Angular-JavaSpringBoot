import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact/contact';
import { ContactServiceService } from '../contact-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _contactService: ContactServiceService ) { }

  ngOnInit(): void {
    
  }
  contactList$: Observable<Contact[]> = this._contactService.getContacts(); 

  birthday = '2001-01-03'
  email = 'coucou@gmail.com'
  name = 'Francois'
  lastName = 'Pierre'
  phoneNumber = '084456412'

  


  onSubmit() {
    this._contactService.createContact({
      id : 0,
      birthday : this.birthday,
      email : this.email,
      name : this.name,
      lastName : this.lastName,
      phoneNumber: this.phoneNumber
    }).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
    this.contactList$ = this._contactService.getContacts(); 

    this._contactService.getContacts().subscribe(
      res => console.log(res)
    )
  }


}
