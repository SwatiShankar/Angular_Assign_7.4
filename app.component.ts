import { Component } from '@angular/core';

export class USERS {
	id : number;
	name: string;
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  templateUrl : 'app.component.html'
})
export class AppComponent {
  
   color : string;
  
   users : USERS[] = [];

   ngOnInit(){
    this.users = [
      {id : 1, name : "shruthi"},
      {id : 2, name : "swati"},
      {id : 3, name : "saleena"},
      {id : 4, name : "Veda"}
  ];
   }

   status : boolean = false;

   isEven(n){
      if(n%2 == 0){
          this.status = true;
      }
   }
  
}