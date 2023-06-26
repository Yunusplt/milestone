import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Grid } from "@mui/material";
import Card from "../components/blog/Card";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getSuccess } from "../features/blogSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  //   const BASE_URL = process.env.REACT_APP_BASE_URL;

  const getBlogs = async () => {
    try {
      const { data } = await axios.get(
        "http://35113.fullstack.clarusway.com/api/blogs/"
      );
      const url = "blogs";
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []); // eslint-disable-line

  const { blogs } = useSelector((state) => state.blog);

  return (
    <>
      <Navbar />
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        {blogs?.map((blog) => (
          <Grid item key={blog?.id}>
            <Card blog={blog} />
          </Grid>
        ))}
      </Grid>
      <Footer />
    </>
  );
};

export default Dashboard;
