import React, { useEffect } from "react";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

const CommentForum = ({ blog }) => {
  const { getComments} = useBlogCalls();

  const { comments } = useSelector((state) => state.blog);
  console.log(comments);

  useEffect(() => {
    getComments(blog.id);
  }, []); // eslint-disable-line

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
      <Typography variant="h4">Comments</Typography>
      {comments.map((comment) => (
        <Box sx={{ borderBottom: 1, borderColor: "green", marginBottom: 2 }}>
          <Typography variant="h6">{comment.user}</Typography>
          <Typography variant="body2">Posted{formattedDate}</Typography>
          <Typography>{comment.content}</Typography>
        </Box>
      ))}
    </>
  );
};

export default CommentForum;
