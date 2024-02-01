import { createAction, props } from '@ngrx/store';
import { PostInterface } from '../models/post.interface';

export const getPosts = createAction('[Posts] Get Posts');

export const getPostsSuccess = createAction(
    '[Posts] Get Posts Success',
    props<{ posts: PostInterface[] }>()
);

export const getPostsFailure = createAction(
    '[Posts] Get Posts Failure',
    props<{ error: string }>()
);

export const selectPost = createAction('[Posts] Selected Post', props<{ index: number }>());

// export const togglePostDetails = createAction('[Posts] Toggle Post');