import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { GetinPageComponent } from './getin-page/getin-page.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'', redirectTo:'/join', pathMatch:'full'},
  {path: 'join', component:GetinPageComponent},
  {path: 'chatroom/chat', component:ChatroomComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
