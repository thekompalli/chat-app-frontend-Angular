import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-getin-page',
  templateUrl: './getin-page.component.html',
  styleUrls: ['./getin-page.component.css']
})
export class GetinPageComponent implements OnInit {

  constructor(private router:Router, private auth:AuthService) { }

  ngOnInit(): void {
  }

  join(form:NgForm){
    console.log(form.value)
    this.router.navigate(['/chatroom', 'chat'], {queryParams:{username:`${form.value.username}`, room:`${form.value.room}`}})
    this.auth.loggedIn = true;
  }

}
