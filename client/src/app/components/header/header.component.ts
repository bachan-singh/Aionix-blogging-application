import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { jwtDecode } from "jwt-decode";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  user: any;

  constructor() { }



  menuOptions = [
    { icon: 'ri-user-line', link: '/profile', text: 'Profile' },
    { icon: 'ri-bookmark-line', link: '/category', text: 'Category' },
    { icon: 'ri-edit-2-line', link: '/write', text: 'Write Article' },
    { icon: 'ri-feedback-line', link: '/support', text: 'Support' }
  ];


  onMenuClose() {
    this.isVisible = false;
  }

  isVisible: boolean = false;

  toggle() {
    this.isVisible = !this.isVisible;
  }
}
