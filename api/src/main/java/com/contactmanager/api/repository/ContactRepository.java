package com.contactmanager.api.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.contactmanager.api.model.Contact;

@Repository
public interface ContactRepository extends CrudRepository<Contact, Long> {

}
