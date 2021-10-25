import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenGuard } from '@core/guard/token/token.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUsersComponent } from './list-users/list-users.component';

const userRoutes: Routes = [
  { path: '', canActivate: [TokenGuard], component: ListUsersComponent },
  { path: 'list', canActivate: [TokenGuard], component: ListUsersComponent },
  { path: 'create', canActivate: [TokenGuard], component: CreateUserComponent },
  { path: '**', canActivate: [TokenGuard], pathMatch: '**', redirectTo: '/users/list' },
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {
}
