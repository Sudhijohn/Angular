import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { Routes,RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './authService';
import { canDeactivateGuard } from './servers/edit-server/can-deactivate-guard-service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ResolverService } from './servers/server/server.resolver.service';

/*const appRoutes: Routes = [
  {path:"",component:HomeComponent},
  {path:"servers",component:ServersComponent,children:[
    {path:":id/edit",component:EditServerComponent},
    {path:":id",component:ServerComponent},
  ]},
  {path:"users",component:UsersComponent},
  {path:"users/:id/:name",component:UserComponent},
  {path:"**",redirectTo:""}
]*/

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    UsersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //RouterModule.forRoot(appRoutes)
    AppRoutingModule
  ],
  providers: [ServersService, AuthGuard, AuthService, canDeactivateGuard, ResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
