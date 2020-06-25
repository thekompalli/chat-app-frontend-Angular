import * as io from 'socket.io-client';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  lst:any[];
  users;
  welcome;
  i = 1;
  userInfo:{users:[], room:string};
  socket = io('localhost:3000')

  constructor(private activatedRoute:ActivatedRoute, private router:Router, private auth:AuthService) {
    this.users = this.activatedRoute.snapshot.queryParams
    console.log(this.users)
   }

  ngOnInit(): void {
    let temp = []
    this.socket.on('test', (msg)=>{
      temp.push(msg)
      this.lst = temp
    })

    this.socket.emit('join', this.users, (err) => {
      if(err){
        alert(err)
        this.router.navigate(["/"])
      }
    })

    this.socket.on('roomInfo', (data) => {
     this.userInfo = data
    })

  }

  
  isUrl(s) {
    let regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    return regexp.test(s);
  }



 send(form:NgForm){
   if (!form.valid){
     return
   }
   else{
    let val = form.value.message
    this.socket.emit('sendMessage', val, (err) => {
      if(err){
        console.log(err)
        
      }
      else{
        console.log(err)
      }
      form.reset()
    })

   }

 }

 getLocation(){
   if(!navigator.geolocation){
     return alert("GeoLocation is not supported by your browser!")
   }

   navigator.geolocation.getCurrentPosition((position) =>{
     
     
     this.socket.emit('position', {latitude: position.coords.latitude, longitude: position.coords.longitude})
   } )
 }
 

logout(){
  this.auth.loggedIn = false
}

}
