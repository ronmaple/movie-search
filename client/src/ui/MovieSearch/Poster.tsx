import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { MovieData as MovieDataProps } from './types'

const Poster = (props: MovieDataProps) => {
  return (
    <Grid item xs={12} md={6}>
      <Card sx={{ maxWidth: 800, display: 'flex' }}>
        <CardContent sx={{ flex: 1, width: 300 }}>
          <CardMedia
            component="img"
            height="140"
            image={props?.poster}
            alt={`Poster for ${props?.title}`}
          />
        </CardContent>
        <CardContent sx={{ flex: 2, width: 300 }}>
          <Typography gutterBottom variant="h6" component="div">
            {props?.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {props?.released}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props?.plot}
          </Typography>

          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Poster
