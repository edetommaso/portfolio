import { Component } from '@angular/core';
import { ContactsComponent } from '../../components/contact/contacts/contacts.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactsComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {

}
