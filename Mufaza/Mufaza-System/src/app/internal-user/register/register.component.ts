import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../shared/register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service:RegisterService) { }

  positions = [
    {id: 1 ,value: 'Admin'},
    {id: 2 ,value: 'HR'},
    {id: 3 ,value: 'Product Manager'},
    {id: 4 ,value: 'Delivery Manager'}

  ]  
    hide = true;
  ngOnInit() {
    this.service.getInternalUsers();
  }

  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit(){
     if(this.service.form.valid){
       this.service.insertInternalUser(this.service.form.value);
       this.service.form.reset();
       this.service.initializeFormGroup(); 
     }
  }
}
