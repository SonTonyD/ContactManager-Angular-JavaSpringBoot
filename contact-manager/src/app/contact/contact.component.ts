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

  contactList: Contact[] = [{
    name : "Jean",
    lastName : "François",
  },{
    name : "Pierre",
    lastName : "Dupont",
  }]



}
