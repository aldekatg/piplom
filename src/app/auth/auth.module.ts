import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserModule } from '@angular/platform-browser';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [
    MatFormFieldModule,
    CommonModule,
    AuthRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatInputModule,
    BrowserModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
