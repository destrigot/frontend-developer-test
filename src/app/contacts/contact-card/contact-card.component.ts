import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../interfaces';

/**
 * PLEASE DO NOT CHANGE THIS FILE, AND PERFORM ALL VIEW RENDERING IMPROVEMENTS IN THE PLACES WHERE
 * IT IS INDICATED.
 */
@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  @Input()
  public contact!: Contact;

  constructor() { }

  ngOnInit(): void {
  }

}
