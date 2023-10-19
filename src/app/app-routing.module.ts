import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoteComponent } from './vote/vote.component';
import { AdminComponent } from './admin/admin.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GetComponent } from './get/get.component';
import { HomeComponent } from './home/home.component';
import { WinnerComponent } from './winner/winner.component';

const routes: Routes = [

  {
    path:'vote',
    component:VoteComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'aboutus',
    component:AboutusComponent
  },
  {
    path:'contact',
    component:ContactusComponent
  },
  {
    path:'get',
    component:GetComponent
  },
  {
    path:'home',
    component:HomeComponent
  },{
    path:'',//to redirect to main path
    redirectTo:'home',//to load plist page onto webpage firstly of all pages
    pathMatch:'full'
  },
  {
    path:'winner',
    component:WinnerComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
