import { MoviesList } from './MoviesList';
export interface NowPlayingMoviesResponseModel {
   total_pages: number;
   total_results: number;
   page: number;
   results: MoviesList[];
}
