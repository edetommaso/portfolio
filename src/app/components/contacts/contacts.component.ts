import { Component } from '@angular/core';
import { FormulaireContactComponent } from '../formulaire-contact/formulaire-contact.component';
import { ListContactsComponent } from '../list-contacts/list-contacts.component';
import { contacts } from '../../models/contacts';
import { Contact } from '../../models/atttributs';
@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [FormulaireContactComponent, ListContactsComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

  contacts: Contact[]= contacts;
}
