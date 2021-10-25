import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModule } from './login/login.module';
import { FeatureRoutingModule } from './feature-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users/users-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { UsersModule } from './users/users.module';
import { SharedModule } from '@shared/shared.module';
@NgModule({
  declarations: [],
  imports: [
    FeatureRoutingModule,
    UsersRoutingModule,
    LoginModule,
    ReactiveFormsModule,
    CommonModule,
    UsersModule,
    SharedModule
  ]
})
export class FeatureModule { }
