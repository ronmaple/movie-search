import { useEffect, useState, ChangeEvent } from 'react'
import { useDebounce } from 'use-debounce'

import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Loader from '../../components/Loader/Loader'

import Poster from './Poster'
import useGetMovie from './useGetMovie'
// TODO:
// 1 useGetMovie
// 2 Grid logic
// 3 state
const MovieSearch = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  // const [touched, setTouched] = useState<boolean>(false)
  const [searchInput] = useDebounce(searchQuery, 500)
  const { data, loading, error } = useGetMovie(searchInput)

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    // if (!touched) {
    //   setTouched(true)
    // }
  }

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
          {data && (
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
            {data && (loading ? <Loader /> : <Poster {...data}></Poster>)}
            {error && <span>Something went wrong!</span>}
          </Grid>
        </Stack>
      </Container>
    </Box>
  )
}

export default MovieSearch
