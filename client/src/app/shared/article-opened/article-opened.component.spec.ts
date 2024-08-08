import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleOpenedComponent } from './article-opened.component';

describe('ArticleOpenedComponent', () => {
  let component: ArticleOpenedComponent;
  let fixture: ComponentFixture<ArticleOpenedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleOpenedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleOpenedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
