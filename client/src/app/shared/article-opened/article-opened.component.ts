import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import moment from 'moment';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-article-opened',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './article-opened.component.html',
  styleUrl: './article-opened.component.css'
})
export class ArticleOpenedComponent implements OnInit {

  articles!: any[];

  constructor( private route: ActivatedRoute,public articleService:ArticleService){}
  ngOnInit(): void {
    debugger
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.articleService.getArticleById(id).subscribe({
        next: (response: any) => {
          this.articles = response


        },
        error: (err) => {
          console.error(err);
        },
      },
    );
    }
  }
  getShortTime(date: string): string {
    return moment(date).fromNow();
  }
 

}
