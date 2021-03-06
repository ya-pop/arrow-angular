import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule, MatInputModule, MatSelectModule} from '@angular/material';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LocalizationModule} from '../shared/localization/localization.module';
import { SpinnerModule } from '../shared/spinner/spinner.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    SpinnerModule,
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LocalizationModule,
    MatCheckboxModule,
  MatInputModule,
  MatSelectModule

  ]
})
export class AuthenticationModule { }
