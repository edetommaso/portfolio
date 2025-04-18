import { Component } from '@angular/core';
import { ContactsComponent } from '../../components/contacts/contacts.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactsComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {

}
