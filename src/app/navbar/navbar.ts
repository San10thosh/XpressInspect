import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {
  isMenuOpen = false;
  isHidden = false;
  private lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollTop > this.lastScrollTop) {
      // Scrolling down
      this.isHidden = true;
    } else {
      // Scrolling up
      this.isHidden = false;
    }
    this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}