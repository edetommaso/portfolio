import { Component, Input } from '@angular/core';
import { Contact } from '../../models/atttributs';
import { SingleContactComponent } from '../single-contact/single-contact.component';
@Component({
  selector: 'app-list-contacts',
  standalone: true,
  imports: [SingleContactComponent],
  templateUrl: './list-contacts.component.html',
  styleUrl: './list-contacts.component.css'
})
export class ListContactsComponent {

   @Input() contacts: Contact[] = [];
}
