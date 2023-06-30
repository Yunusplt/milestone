import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";

const About = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 2,
      }}
    >
      <Box>
        <CardMedia
          component="img"
          height="400"
          image="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_1280.png"
          alt=""
          sx={{ objectFit: "cover", py: 2 }}
        />
        <CardContent sx={{ textAlign: "left" }}>
          <Typography variant="h6">Hii Everyone.. </Typography>{" "}
          <Typography> My name is Yunus and I'm a Web Designer. </Typography>
          <Typography>
            Mehr information about me. please visit my{" "}
            <a
              href="https://www.linkedin.com/in/herrpolat/"
              style={{ textDecoration: "none", fontSize: "large" }}
            >
              LinkedIn
            </a>
          </Typography>
          <Typography>{""}</Typography>
        </CardContent>
      </Box>
    </Grid>
  );
};

export default About;
