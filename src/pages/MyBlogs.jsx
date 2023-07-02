import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import useBlogCalls from "../hooks/useBlogCalls";
import CardMyBlogs from "../components/blog/CardMyBlogs";

const MyBlogs = () => {
  const { getUserData } = useBlogCalls();

  const { id } = useSelector((state) => state.auth);
  useEffect(() => {
    getUserData(id);
  }, []); // eslint-disable-line

  const { userDetail } = useSelector((state) => state.blog);

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          mt: 2,
          mb: 28,
        }}
      >
        {userDetail?.map((blog) => (
          <Grid item key={blog?.id}>
            <CardMyBlogs blog={blog} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MyBlogs;
