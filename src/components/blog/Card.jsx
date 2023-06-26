import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Button, Grid } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CommentIcon from "@mui/icons-material/Comment";
import VisibilityIcon from "@mui/icons-material/Visibility";

const CardBlogs = ({blog}) => {
 

  const formattedDate = new Date(`${blog?.publish_date}`).toLocaleString("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <Card sx={{ maxWidth: 350, cursor: "pointer" }}>
      <CardMedia
        component="img"
        height="200"
        image={blog?.image}
        alt={blog?.title}
        sx={{ objectFit: "contain", py: 2 }}
      />
      <CardHeader
        title={blog?.title}
        subheader={formattedDate}
      />

      <CardContent
        component="div"
        fontSize="h5.fontSize"
        overflow="hidden"
        textOverflow="ellipsis"
        height={20}
      >
        <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
          <Grid container wrap="nowrap" >
            <Grid item xs zeroMinWidth>
              <Typography noWrap>{blog?.content}</Typography>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <CardContent
        sx={{ display: "flex", justifyContent: "left", alignItems: "center" }}
      >
        <IconButton aria-label="share">
          <AccountCircleIcon />
        </IconButton>
        <Typography>{blog?.author}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
          <Typography variant="h5">{blog?.likes}</Typography>
        </IconButton>
        <IconButton aria-label="share">
          <CommentIcon />
          <Typography variant="h5">{blog?.comment_count}</Typography>
        </IconButton>
        <IconButton aria-label="share">
          <VisibilityIcon />
          <Typography variant="h5">{blog?.post_views}</Typography>
        </IconButton>
        <Button sx={{ marginLeft: "auto" }} variant="contained" color="info">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardBlogs




// export default function RecipeReviewCard() {



// }



// //todo   marginLeft: "auto",