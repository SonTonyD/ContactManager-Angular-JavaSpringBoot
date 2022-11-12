package com.contactmanager.api.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.contactmanager.api.model.Contact;
import com.contactmanager.api.repository.ContactRepository;

import lombok.Data;

@Data
@Service
public class ContactService {
	@Autowired
	private ContactRepository contactRepository;
	
	public Iterable<Contact> getContacts() {
		return contactRepository.findAll();
	}
	
	public void deleteContact(final Long id) {
		contactRepository.deleteById(id);
	}
	
	public Contact saveContact(Contact contact) {
		Contact savedContact = contactRepository.save(contact);
		return savedContact;
	}
	
	public Optional<Contact> getContact(final Long id) {
		return contactRepository.findById(id);
	}
}
