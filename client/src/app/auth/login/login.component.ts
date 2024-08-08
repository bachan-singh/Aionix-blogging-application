import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm:FormGroup;
  constructor(private authService:AuthService, private router: Router){

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$')
      ])
    })
  }

  validateForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      this.validateForm(this.loginForm);
      return;
    }
    this.authService.login(this.loginForm.value).subscribe({
      next: (response: any) => {
        localStorage.setItem('currentUser', JSON.stringify(response));
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error(err);
        if (err.status === 401) {
          alert('Invalid information');
        } else if (err.status === 404) {
          alert('Email does not exist');
        } else {
          alert('An error occurred. Please try again later.');
        }
      }
    });
  }
}
