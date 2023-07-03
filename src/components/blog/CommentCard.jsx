import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useBlogCalls from "../../hooks/useBlogCalls";

const CommentCard = ({ idNo }) => {
  const { postNewComment } = useBlogCalls();

  const handleSubmit = (e) => {
    e.preventDefault();

    const comment = e.target[0].value;

    const newComment = {
      content: `${comment}`,
      post: `${idNo}`,
    };
    console.log(newComment);
    postNewComment(newComment, idNo);
    e.target[0].value = ""
    };

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "95%" },
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-number" label="Add a new comment" />
      <Button
        sx={{ width: "95%", marginLeft: "8px" }}
        type="submit"
        variant="contained"
      >
        Add Comment
      </Button>
    </Box>
  );
};

export default CommentCard;
