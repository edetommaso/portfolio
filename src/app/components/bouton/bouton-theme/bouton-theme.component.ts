import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-bouton-theme',
  standalone: true,
  templateUrl: './bouton-theme.component.html',
  styleUrl: './bouton-theme.component.css'
})
export class BoutonThemeComponent {
  isDarkMode = true;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-theme', this.isDarkMode);
    document.body.classList.toggle('light-theme', !this.isDarkMode);
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme ? savedTheme === 'dark' : true;
    document.body.classList.add(this.isDarkMode ? 'dark-theme' : 'light-theme');
  }
}
