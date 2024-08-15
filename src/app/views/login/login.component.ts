import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  userForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  getErrors(controlName: string): string[] {
    const control = this.userForm.get(controlName);
    const errors: string[] = [];
    if (control && control.errors) {
      for (const errorKey in control.errors) {
        if (control.errors.hasOwnProperty(errorKey)) {
          switch (errorKey) {
            case 'required':
              errors.push('This field is required.');
              break;
            case 'minlength':
              const minLengthError = control.errors['minlength'];
              errors.push(
                `Minimum length is ${minLengthError.requiredLength} characters.`
              );
              break;
          }
        }
      }
    }
    return errors;
  }
}
