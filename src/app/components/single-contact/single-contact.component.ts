import { Component, Input } from '@angular/core';
import { Contact } from '../../models/atttributs';

@Component({
  selector: 'app-single-contact',
  standalone: true,
  imports: [],
  templateUrl: './single-contact.component.html',
  styleUrl: './single-contact.component.css'
})
export class SingleContactComponent {
  @Input() contact: Contact | null = null;
}
