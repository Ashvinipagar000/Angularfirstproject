import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDir';

  data: any = {
    username: "Ashvini",
    password: "1234"
  }

  numbers: any = [1, 2, 3, 4, 6, 7, 8, 9]

  students: any = [
    {
      id: 1,
      name: "Ashvini",
      age:24
    },
    {
      id: 2,
      name: "mahesh",
      age:27
    },
    {
      id: 3,
      name: "Snau",
      age:4
    },
    {
      id: 4,
      name: "Kritika",
      age:4
    }
  ]



color='dark'

ishighlight=false;
highlighjtonoff(){
this.ishighlight=!this.ishighlight;
}

fontsize='15px';
increase(){
  this.fontsize=(parseInt(this.fontsize)+2) +'px'
}


decrease(){
  this.fontsize=(parseInt(this.fontsize)-2) +'px'
}



}


