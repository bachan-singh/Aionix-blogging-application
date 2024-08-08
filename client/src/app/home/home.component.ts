import { Component } from '@angular/core';
import { HeaderComponent } from "../components/header/header.component";
import { AllArticlesComponent } from "../components/all-articles/all-articles.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, AllArticlesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
