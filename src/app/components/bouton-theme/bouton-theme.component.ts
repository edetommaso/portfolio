import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-bouton-theme',
  standalone: true,
  templateUrl: './bouton-theme.component.html',
  styleUrl: './bouton-theme.component.css'
})
export class BoutonThemeComponent {
  isDarkMode = true;

  constructor(private renderer: Renderer2) {
    this.loadTheme();
  }

  toggleTheme() {
    // Démarrer la transition
    document.body.style.transition = 'none';
    document.body.style.opacity = '1.5';
    
    // Forcer le recalcul des styles
    void document.body.offsetWidth;
    
    // Réactiver la transition
    document.body.style.transition = 'opacity 900ms ease, background-color 800ms ease-out';
    
    // Changer le thème
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    this.saveTheme();
    
    // Fin du fondu
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 100);
  }
  
  private applyTheme() {
    const body = document.body;
    if (this.isDarkMode) {
      this.renderer.addClass(body, 'dark-theme');
      this.renderer.removeClass(body, 'light-theme');
    } else {
      this.renderer.addClass(body, 'light-theme');
      this.renderer.removeClass(body, 'dark-theme');
    }
  }

  private loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
      this.applyTheme();
    }
  }

  private saveTheme() {
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }
}
