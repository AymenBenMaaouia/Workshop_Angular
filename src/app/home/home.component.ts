import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  VAR1="Bonjour 4SE1"
  VAR2="https://cdn.sortiraparis.com/images/80/69688/1115428-demon-slayer-kimetsu-no-yaiba-l-entrainement-des-piliers-bientot-sur-netflix.jpg"
  VAR3="aymen"
  MyList=["4SE1","4SE2","4SE3"]
  Function1(){
    alert('hi')
  }
}
