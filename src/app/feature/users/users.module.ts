import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterUserByNamePipe } from '@shared/pipes/filter-user-by-name/filter-user-by-name.pipe';
import { SharedModule } from '@shared/shared.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateUsersFormsService } from './create-user/shared/services/users/createUsers.form.service';
import { HomeUserComponent } from './home-user/home-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListUsersFormsService } from './list-users/list-users.form.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
    imports :[
        UsersRoutingModule,
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations:[
        NavBarComponent,
        ListUsersComponent,
        HomeUserComponent,
        CreateUserComponent
    ],
    exports: [
        NavBarComponent,
        ListUsersComponent,
        HomeUserComponent,
        CreateUserComponent
    ],
    providers: [
        FilterUserByNamePipe,
        CreateUsersFormsService,
        ListUsersFormsService
    ]
})
export class UsersModule {
}
