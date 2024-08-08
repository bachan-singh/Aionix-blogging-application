import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
    @Input() postID!: number;
    @Input() thumbnail!: string;
    @Input() title!: string;
    @Input() content!: string;
    @Input() authorId!: number;
    @Input() categories!: number;
    @Input() createdAt!: string;

    get shortDescription(): string {
      return this.content.length > 145 ? this.content.slice(0, 145) + '...' : this.content;
    }
  
    get postTitle(): string {
      return this.title.length > 30 ? this.title.slice(0, 30) + '...' : this.title;
    }

}
