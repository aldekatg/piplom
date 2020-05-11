import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  labelPosition: 'before' | 'after' = 'after';

  constructor(private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: '',
      password_confirm: '',
      type: '',
    });
  }

  register() {
    console.log('register', this.form.value);
    this.router.navigate(['home']);
  }
}
