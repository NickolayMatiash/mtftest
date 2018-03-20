import { Car } from './entity/car.model';
import { Post } from './entity/post.model';

export interface AppState {
  cars: {
    cars: Car[]
  };

  post: Post;

  message: string;
}
