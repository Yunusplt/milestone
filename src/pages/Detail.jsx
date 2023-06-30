import React, { useEffect, useState } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import { getBlogDetSuccess } from "../features/blogSlice";
import { useLocation, useParams } from "react-router-dom";
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
import { useSelector } from "react-redux";
import CommentForum from "../components/blog/CommentForum";
import CommentCard from "../components/blog/CommentCard";
import Modal from "@mui/material/Modal";

 const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: 400,
   bgcolor: "background.paper",
   border: "2px solid #000",
   boxShadow: 24,
   p: 4,
 };

const Detail = () => {
  const [commentField, setCommentField] = useState(false);

  const { getBlogDetailData } = useBlogCalls();

  const { currentUser } = useSelector((state) => state.auth);
  console.log(currentUser);

  const location = useLocation();
  const blog = location.state.blog;
  console.log(blog);
  console.log(blog.id);
  useEffect(() => {
    getBlogDetailData(blog.id);
  }, []);

  const { detail } = useSelector((state) => state.blog);
  console.log(detail);

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

 

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 2,
      }}
    >
      <Box
        sx={{
          width: 700,
          minWidth: 400,
          border: "none",
        }}
      >
        <CardMedia
          component="img"
          height="400"
          image={blog?.image}
          alt={blog?.title}
          sx={{ objectFit: "contain", py: 2 }}
        />
        <CardContent
          sx={{ display: "flex", justifyContent: "left", alignItems: "center" }}
        >
          <IconButton size="small" color="error" aria-label="share">
            <AccountCircleIcon sx={{ fontSize: 47 }} />
          </IconButton>
          <Box>
            <Typography>{blog?.author}</Typography>
            <Typography>{formattedDate}</Typography>
          </Box>
        </CardContent>

        <CardContent>
          <Typography variant="h5">{blog?.title} </Typography>
          <Typography variant="body2">{blog?.content}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            <Typography variant="h5">{blog?.likes}</Typography>
          </IconButton>
          <IconButton
            onClick={() => setCommentField(!commentField)}
            aria-label="share"
          >
            <CommentIcon />
            <Typography variant="h5">{blog?.comment_count}</Typography>
          </IconButton>
          <IconButton aria-label="share">
            <VisibilityIcon />
            <Typography variant="h5">{blog?.post_views}</Typography>
          </IconButton>
        </CardActions>
        <Box sx={{ textAlign: "center" }}>
          {currentUser === blog.author ? (
            <>
              {" "}
              <Button
                sx={{ marginLeft: "auto" }}
                variant="contained"
                color="success"
                size="small"
              >
                Update Blog
              </Button>
              <Button onClick={handleOpen}>Open modal</Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Text in a modal
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula.
                  </Typography>
                </Box>
              </Modal>
            </>
          ) : (
            ""
          )}{" "}
          {currentUser === blog.author ? (
            <Button
              sx={{ marginLeft: "auto" }}
              variant="contained"
              color="error"
              size="small"
            >
              Delete Blog
            </Button>
          ) : (
            ""
          )}
        </Box>
        {commentField ? (
          <>
            <CommentForum blog={blog} />
            <CommentCard idNo={blog.id} />{" "}
          </>
        ) : (
          ""
        )}
      </Box>
    </Grid>
  );
};

export default Detail;
