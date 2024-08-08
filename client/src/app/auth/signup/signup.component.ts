import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm:FormGroup;

  constructor(private authService:AuthService, private router:Router){

    this.signupForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[A-Za-z]+( [A-Za-z]+)*$'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
        ),
      ]),
    });
  
  }
    onSignup() {
    if (this.signupForm.invalid) {
      this.validateForm(this.signupForm);
      return;
    }
    this.authService.signup(this.signupForm.value).subscribe({
      next: (response: any) => {
        alert('Account Created Successfully');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error(err);
        if (err.status === 409) {
          alert('Email already exists');
        } else {
          alert('An error occurred. Please try again later.');
        }
      },
    });

  }

   
  validateForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });
  }
}
