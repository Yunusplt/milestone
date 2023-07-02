import React, { useEffect, useState } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import { useLocation, useParams } from "react-router-dom";
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
import DeleteModal from "../components/blog/DeleteModal";
import UpdateModal from "../components/blog/UpdateModal";


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

  const { getBlogDetailData , postLike, getBlogs} = useBlogCalls();
  

  const { currentUser } = useSelector((state) => state.auth);


  const location = useLocation();
  const blog = location.state.blog;
 const { detail } = useSelector((state) => state.blog);

 
  const formattedDate = new Date(`${detail?.publish_date}`).toLocaleString(
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
   const handleClose = () => {
     setOpen(false);
     setFormValues({
       title: "",
       image: "",
       category_name: "",
       address: "",
       status:"",
       content:""
     });
     //* handleClose olduğunda yani modal kapnadığında formdaki verilerin temizlenmesi için burada tanımladık.
   };

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
   const handleClose1 = () => setOpen1(false);

   

   const warning = "Do you really want to delete your blog? This process cannot be undone!"

    
    const [formValues, setFormValues] = useState({
      title: "",
      image: "",
      category_name: "",
      address: "",
      status: "",
      content: "",
    });

  useEffect(() => {
  getBlogDetailData(blog.id)

    }, [])

  const [isClicked, setClicked] = useState(false);

  const handleClickLike = () => {
    postLike(detail?.id);
    getBlogDetailData(detail.id);
    setClicked(!isClicked);
  };
    

  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 2,
        mb:8
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
          image={detail?.image}
          alt={detail?.title}
          sx={{ objectFit: "contain", py: 2 }}
        />
        <CardContent
          sx={{ display: "flex", justifyContent: "left", alignItems: "center" }}
        >
          <IconButton size="small" color="error" aria-label="share">
            <AccountCircleIcon sx={{ fontSize: 47 }} />
          </IconButton>
          <Box>
            <Typography>{detail?.author}</Typography>
            <Typography>{formattedDate}</Typography>
          </Box>
        </CardContent>

        <CardContent>
          <Typography variant="h5">{detail?.title} </Typography>
          <Typography variant="body2">{detail?.content}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            color={isClicked ? "error" : "default"}
            onClick={handleClickLike}
            aria-label="add to favorites"
          >
            <FavoriteIcon />
            <Typography variant="h5">{detail?.likes}</Typography>
          </IconButton>
          <IconButton
            onClick={() => setCommentField(!commentField)}
            aria-label="share"
          >
            <CommentIcon />
            <Typography variant="h5">{detail?.comment_count}</Typography>
          </IconButton>
          <IconButton aria-label="share">
            <VisibilityIcon />
            <Typography variant="h5">{detail?.post_views}</Typography>
          </IconButton>
        </CardActions>
        <Box sx={{ textAlign: "center" }}>
          {currentUser === detail.author ? (
            <>
              {" "}
              <Button
                sx={{ marginLeft: "auto" }}
                variant="contained"
                color="success"
                size="small"
                onClick={() => {
                  setFormValues(detail);
                  handleOpen();
                }}
              >
                Update Blog
              </Button>
              <DeleteModal
                open={open}
                handleClose={handleClose}
                blogId={detail.id}
                formValues={formValues}
                setFormValues={setFormValues}
              />
            </>
          ) : (
            ""
          )}{" "}
          {currentUser === detail.author ? (
            <>
              <Button
                sx={{ marginLeft: "auto" }}
                variant="contained"
                color="error"
                size="small"
                onClick={() => handleOpen1()}
              >
                Delete Blog
              </Button>
              <UpdateModal
                open={open1}
                handleClose={handleClose1}
                blogId={detail.id}
              />
            </>
          ) : (
            ""
          )}
        </Box>
        {commentField ? (
          <>
            <CommentForum blog={detail} />
            <CommentCard idNo={detail.id} />{" "}
          </>
        ) : (
          ""
        )}
      </Box>
    </Grid>
  );
};

export default Detail;
