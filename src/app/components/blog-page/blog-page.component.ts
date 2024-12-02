import { Component, OnInit } from '@angular/core';
import { BlogService } from '@app/services/blog/blog.service';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.scss'
})
export class BlogPageComponent implements OnInit {

  constructor(
    private blogServ: BlogService
  ) {}

  ngOnInit(): void {
    this.getBlog();
  }

  private getBlog(): void {
    this.blogServ.getBlog().subscribe(
      (res: any) => console.log(res)
    )
  }
}
