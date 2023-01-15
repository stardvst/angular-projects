import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  username = environment.username;

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Github Portfolio App');
    this.meta.addTags([
      {
        name: 'description',
        content: `${this.username}'s Github portfolio`,
      },
      {
        name: 'author',
        content: this.username,
      },
    ]);
  }
}
