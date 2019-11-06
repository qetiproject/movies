import { MoviesList } from './MoviesList';
export interface MoviesModel {
   total_pages: number;
   total_results: number;
   page: number;
   results: MoviesList[];
}
