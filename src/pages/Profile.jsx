import React from "react";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser, bio, email, image } = useSelector(
    (state) => state.auth
  );

  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 2,
        mb: 6,
      }}
    >
      <Box
        sx={{
          width: 900,
          minWidth: 400,
          marginTop: "7em",
        }}
      >
        <CardMedia
          component="img"
          height="400"
          image={image}
          alt={image}
          sx={{ objectFit: "contain", py: 2 }}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h4">{currentUser}</Typography>
          <Typography variant="h5">{email}</Typography>
          <Typography variant="h6">{bio}</Typography>
        </CardContent>
      </Box>
    </Grid>
  );
};

export default Profile;
