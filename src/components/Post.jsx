import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, Typography } from '@mui/material'
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'

import React from 'react'

const Post = () => {
  return (
    <Box flex={4} p={2}>
      <Card sx={{margin:'5'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:'red' }} aria-label="recipe">
          
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://cdn.tgdd.vn//GameApp/1381706//sapixarvirtualbgcoco16x99ccd7110-800x450.jpeg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}}/>} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
    </Box>
  )
}

export default Post