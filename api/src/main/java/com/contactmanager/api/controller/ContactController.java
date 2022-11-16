package com.contactmanager.api.controller;


import java.sql.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.contactmanager.api.model.Contact;
import com.contactmanager.api.service.ContactService;

@RestController
public class ContactController {
	@Autowired
	private ContactService contactService;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/contacts")
	public Iterable<Contact> getContacts() {
		return contactService.getContacts();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/contact")
	public Contact createContact(@RequestBody Contact contact) {
		return contactService.saveContact(contact);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/contact/{id}")
	public Contact getContact(@PathVariable("id") final Long id) {
		Optional<Contact> contact = contactService.getContact(id);
		if(contact.isPresent()) {
			return contact.get();
		} else {
			return null;
		}
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/contact/{id}")
	public void deleteContact(@PathVariable("id") final Long id) {
		contactService.deleteContact(id);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/contact/{id}")
	public Contact updateContact(@PathVariable("id") final Long id, @RequestBody Contact contact) {
		Optional<Contact> c = contactService.getContact(id);
		
		if(c.isPresent()) {
			Contact currentContact = c.get();
			
			String name = contact.getName();
			if(name != null) {
				currentContact.setName(name);
			}
			
			String lastName = contact.getLastName();
			if(lastName != null) {
				currentContact.setLastName(lastName);
			}
			
			String email = contact.getEmail();
			if(email != null) {
				currentContact.setEmail(email);
			}
			
			String phoneNumber = contact.getPhoneNumber();
			if(phoneNumber != null) {
				currentContact.setPhoneNumber(phoneNumber);
			}
			
			Date birthday = contact.getBirthday();
			if(birthday != null) {
				currentContact.setBirthday(birthday);
			}
			
			contactService.saveContact(currentContact);
			return currentContact;
		} else {
			return null;
		}
	}
}
