import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './models/contact/contact';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  private IP_ADDRESS = "http://localhost:8888";
  constructor(private http: HttpClient) { }

  id = 0;
  ///ROUTES
  private _getContacts = "/contacts";
  private _getContact = `/contact/${this.id}`;
  private _deleteContact = `/contact/${this.id}`;
  private _createContact = `/contact`;
  private _updateContact = `/contact/${this.id}`;

  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
    })
  }

  getContacts() {
    return this.http.get<Contact[]>(this.IP_ADDRESS + this._getContacts, this.httpOptions);
  }

  createContact(contact: Contact) {
    return this.http.post(this.IP_ADDRESS + this._createContact, contact ,this.httpOptions);
  }
  
}
