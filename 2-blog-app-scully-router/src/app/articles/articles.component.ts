import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit, OnDestroy {
  posts: ScullyRoute[] = [];
  private _routeSub: Subscription | undefined;

  constructor(private _scullyService: ScullyRoutesService) {}

  ngOnInit(): void {
    this._routeSub = this._scullyService.available$.subscribe(posts => {
      this.posts = posts.filter(post => post.title);
    });
  }

  ngOnDestroy(): void {
    this._routeSub?.unsubscribe();
  }
}
