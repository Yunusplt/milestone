import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CommentIcon from "@mui/icons-material/Comment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toastWarnNotify } from "../../helper/ToastNotify";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useState } from "react";

const CardMyBlogs = ({ blog }) => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.auth);
  const { postLike, getBlogs } = useBlogCalls();

  //todo domain e id ekleme???
  const handleOnClick = (blog) => {
    if (currentUser) {
      navigate(`/blog/detail/`, { state: { blog } });
    } else {
      navigate("/login");
      toastWarnNotify("You must be logged in!");
    }
  };

  const [isClicked, setClicked] = useState(false);

  const handleClickLike = () => {
    postLike(blog?.id);
    getBlogs();
    setClicked(!isClicked);
  };

  const formattedDate = new Date(`${blog?.publish_date}`).toLocaleString(
    "tr-TR",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }
  );

  return (
    <>
      <Card
        sx={{
          width: 350,
          cursor: "pointer",
          height: 540,
          boxShadow: 11,
          borderRadius: 2,
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={blog?.image}
          alt={blog?.title}
          sx={{ objectFit: "contain", py: 2 }}
        />
        <CardHeader title={blog?.title} subheader={formattedDate} />

        <CardContent>
          <Typography
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}
          >
            {blog?.content}
          </Typography>
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
          }}
        >
          <IconButton aria-label="share">
            <AccountCircleIcon />
          </IconButton>
          <Typography>{blog?.author}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            color={isClicked ? "error" : "default"}
            onClick={handleClickLike}
            aria-label="add to favorites"
          >
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
          <Button
            onClick={() => handleOnClick(blog)}
            sx={{ marginLeft: "auto" }}
            variant="contained"
            color="info"
          >
            Read More
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CardMyBlogs;
