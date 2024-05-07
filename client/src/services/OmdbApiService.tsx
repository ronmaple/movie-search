import { AxiosResponse } from 'axios'
import HttpService, { HttpServiceConfig } from './HttpService'
import { movieDataApiUrl, movieApiKey } from '../config/env'

export type MovieApiResponse = AxiosResponse<{
  Actors: string
  Awards: string
  BoxOffice: string
  Country: string
  DVD: string
  Director: string
  Genre: string
  Language: string
  Metascore: string
  Plot: string
  Poster: string
  Production: string
  Rated: string
  Ratings: { Source: string; Value: string }[]
  Released: string
  Response: string
  Runtime: string
  Title: string
  Type: string
  Website: string
  Writer: string
  Year: string
  imdbID: string
  imdbRating: string
  imdbVotes: string
}>

class OmdbApiService extends HttpService {
  constructor(props: HttpServiceConfig) {
    super(props)
  }

  getByTitle(title: string): Promise<MovieApiResponse['data']> {
    return this._get(`?apiKey=${movieApiKey}&t=${encodeURIComponent(title)}`)
  }
}

export default new OmdbApiService({
  baseURL: `${movieDataApiUrl}`,
  ignoreHeader: true,
})
