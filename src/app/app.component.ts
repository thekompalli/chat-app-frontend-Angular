import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'chat-app';
  

   ngOnInit(){
   
   }



}
