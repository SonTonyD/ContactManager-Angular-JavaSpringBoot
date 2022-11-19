import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ContactServiceService } from '../contact-service.service';
import { Contact } from '../models/contact/contact';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: ContactServiceService
  ) { }

 

  contact$!: Observable<any>;

  ngOnInit(): void {
    this.contact$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.service.getContact(params.get('id')!)
      )
    )
  }

  birthday = ''
  email = ''
  name = ''
  lastName = ''
  phoneNumber = ''

  onSubmit() {
    this.contact$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.service.updateContact(params.get('id')!)
      )
    )
  }

}
