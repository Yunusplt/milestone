import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import Card from "../components/blog/Card";
import {useSelector } from "react-redux";
import useBlogCalls from "../hooks/useBlogCalls";

const Dashboard = () => {
  const {getCategoryData, getBlogs} = useBlogCalls()
 




  useEffect(() => {
    getBlogs();
    getCategoryData()
  }, []); // eslint-disable-line

  const { blogs } = useSelector((state) => state.blog);
  console.log(blogs);

  return (
    <>
      <Box sx={{ minHeight: "100vh", marginBottom:2 }}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            mt: 2,
          }}
        >
          {blogs?.map((blog) => (
            <Grid item key={blog?.id}>
              <Card blog={blog} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
