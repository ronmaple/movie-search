import { useEffect, useState, ChangeEvent } from 'react'
import { useDebounce } from 'use-debounce'

import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Loader from '../../components/Loader/Loader'

import { MovieData } from './types'
import Poster from './Poster'
import omdbService from '../../services/OmdbApiService'

const MovieSearch = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [touched, setTouched] = useState<boolean>(false)
  const [results, setResults] = useState<MovieData>({} as MovieData)
  const [searchInput] = useDebounce(searchQuery, 500)
  const [error, setError] = useState<boolean>(false)

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setLoading(true)
    setError(false)
    if (!touched) {
      setTouched(true)
    }
  }

  useEffect(() => {
    try {
      if (searchInput) {
        omdbService.getByTitle(searchInput).then((data) => {
          setResults({
            actors: data.Actors,
            country: data.Country,
            director: data.Director,
            genre: data.Genre,
            metascore: data.Metascore,
            plot: data.Plot,
            poster: data.Poster,
            rated: data.Rated,
            // ratings: { Source: string; Value: string }[]
            released: data.Released,
            runtime: data.Runtime,
            title: data.Title,
            type: data.Type, // Type: movie
            writer: data.Writer,
            year: data.Year,
            imdbID: data.imdbID,
            imdbRating: data.imdbRating,
          })
          setLoading(false)
          return data
        })
      }
    } catch (error) {
      setError(true)
    }
  }, [searchInput])

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h5" align="center" color="text.primary" paragraph>
          Be kind, rewind
        </Typography>
        <Stack direction="column" justifyContent="center">
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            aria-label="Search Movies"
            placeholder="Search titles..."
            inputProps={{
              autoComplete: 'off',
              'aria-label': 'Movie Search',
            }}
            onChange={handleSearchInput}
          />
          {touched && (
            <Typography
              variant="subtitle1"
              align="left"
              color="text.primary"
              gutterBottom
            >
              Showing results for:{' '}
              {searchInput === '' ? '...' : `"${searchInput}"`}
            </Typography>
          )}
          <Grid container justifyContent="center">
            {touched && (loading ? <Loader /> : <Poster {...results}></Poster>)}
            {error && <span>Something went wrong!</span>}
          </Grid>
        </Stack>
      </Container>
    </Box>
  )
}

export default MovieSearch
