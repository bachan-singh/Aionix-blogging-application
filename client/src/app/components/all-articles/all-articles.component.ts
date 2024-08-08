import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { ArticleComponent } from "../../shared/article/article.component";

@Component({
  selector: 'app-all-articles',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './all-articles.component.html',
  styleUrl: './all-articles.component.css'
})
export class AllArticlesComponent implements OnInit {
  articles!:any[]
  constructor(public articleService: ArticleService){}

  ngOnInit(){
    this.articleService.getAllArticles().subscribe( articles =>
    this.articles = articles
  )}
}
