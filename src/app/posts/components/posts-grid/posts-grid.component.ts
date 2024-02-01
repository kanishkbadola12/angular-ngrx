import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as PostsActions from '../../store/actions';
import { Observable } from 'rxjs';
import { errorSelector, isLoadingSelector, postsSelector } from '../../store/selectors';
import { AppStateInterface } from '../../../models/app-state-interface';
import { PostInterface } from '../../models/post.interface';

@Component({
  selector: 'posts-grid',
  templateUrl: './posts-grid.component.html',
  styleUrl: './posts-grid.component.css'
})
export class PostsGridComponent implements OnInit {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  posts$: Observable<PostInterface[]>;

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.posts$ = this.store.pipe(select(postsSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(PostsActions.getPosts());
  }
}