import { useEffect, useState } from 'react'
import omdbApiService from '../../services/OmdbApiService'
import { MovieData } from './types'

const useGetMovie = (title: string) => {
  const [data, setData] = useState<MovieData | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const getMovie = async () => {
      try {
        const result = await omdbApiService.getByTitle(title)
        setData({
          actors: result.Actors,
          country: result.Country,
          director: result.Director,
          genre: result.Genre,
          metascore: result.Metascore,
          plot: result.Plot,
          poster: result.Poster,
          rated: result.Rated,
          // ratings: { Source: string; Value: string }[]
          released: result.Released,
          runtime: result.Runtime,
          title: result.Title,
          type: result.Type, // Type: movie
          writer: result.Writer,
          year: result.Year,
          imdbID: result.imdbID,
          imdbRating: result.imdbRating,
        })
        setError(null)
      } catch (err) {
        setError(err as Error)
        setData({} as MovieData)
      } finally {
        setLoading(false)
      }
    }

    if (title) {
      getMovie()
    }
  }, [title])

  return { data, loading, error }
}

export default useGetMovie
