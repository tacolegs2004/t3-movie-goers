export interface TMovie {
  page: number;
  results: TMovieResult[];
  total_pages: number;
  total_results: number;
}

export interface TNowPlayingMovieObject extends TMovie {
  dates: {
    maximum: string;
    minimum: string;
  };
}

export interface TMovieResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

