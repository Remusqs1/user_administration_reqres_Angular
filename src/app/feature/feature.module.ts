import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModule } from './login/login.module';
import { FeatureRoutingModule } from './feature-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    LoginModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class FeatureModule { }
