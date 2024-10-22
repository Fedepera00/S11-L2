import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      password: ['', Validators.required],
      confermaPassword: ['', Validators.required],
      genere: ['', Validators.required],
      immagineProfilo: [''],
      biografia: [''],
      username: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }
}
