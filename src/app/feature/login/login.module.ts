import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginFormsService } from './shared/services/login/login.form.service';
import { LoginService } from './shared/services/login/login.service';

@NgModule({
    imports: [
        LoginRoutingModule,
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [
        LoginComponent
    ],
    declarations:[
        LoginComponent
    ],
    providers: [
        LoginService,
        LoginFormsService,
        FormBuilder
    ]
})
export class LoginModule {
}
