import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/user/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },

  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule'},

  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard]},

  { path: 'event-create', loadChildren: './pages/event-create/event-create.module#EventCreatePageModule', canActivate: [AuthGuard]},

  { path: 'event-detail/:id', loadChildren: './pages/event-detail/event-detail.module#EventDetailPageModule' },

  { path: 'event-list', loadChildren: './pages/event-list/event-list.module#EventListPageModule', canActivate: [AuthGuard] },

  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },

  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule', canActivate: [AuthGuard]},

  { path: 'reset-password', loadChildren: './pages/reset-password/reset-password.module#ResetPasswordPageModule' },

  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
