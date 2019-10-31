export interface MoviesList {
  results: MoviesList[];
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    release_date: Date;
    vote_count: number;
    vote_average: number;
}
