import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact/contact';
import { ContactServiceService } from '../contact-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _contactService: ContactServiceService ) { }

  ngOnInit(): void {
    this._contactService.getContacts().subscribe(
      (res) => {this.contactList = res; console.log("Received from server: ", res)}
    )
  }

  id = 5
  birthday = '2001-01-03'
  email = 'coucou@gmail.com'
  name = 'Francois'
  lastName = 'Pierre'
  phoneNumber = '084456412'



  contactList: Contact[] = []

  onSubmit() {
    this._contactService.createContact({
      id : this.id,
      birthday : this.birthday,
      email : this.email,
      name : this.name,
      lastName : this.lastName,
      phoneNumber: this.phoneNumber
    }).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }


}
