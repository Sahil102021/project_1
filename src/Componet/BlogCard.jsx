import * as React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Chip, Stack, Typography }from '@mui/material';


export default function BlogCard(props) {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt={props.altText}
          sx={{ borderRadius: '8px 8px 0 0', objectFit: 'cover' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
            {props.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
            {props.description}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
            - {props.author_name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', marginTop: 1 }}>
            Published: {props.published_time}
          </Typography>
          
          {/* Tags section */}
          <Stack direction="row" spacing={1} sx={{ marginTop: 1 }}>
            {props.tags.map((tag, index) => {
              return (
                <Chip key={index} label={tag} size="small" color="primary" sx={{ fontSize: '0.75rem' }} />
              )
            }
            )}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}