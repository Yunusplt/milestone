import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { Formik } from "formik";
// import useAuthCall from "../hooks/useAuthCall";
import RegisterForm, { RegisterSchema } from "../components/auth/RegisterForm";
import useAuthCalls from "../hooks/useAuthCalls";
import { useSelector } from "react-redux";

const Register = () => {
  const  register = useAuthCalls();



  return (
    <Container sx={{ mt: 8 }} maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "blue",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="40" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Sign Up
          </Typography>
          <Formik
            //todo apiye register istegi attigimda bana ne lazimsa onlardan olusturuyorum initialValuesleri. Postmannden bakilabilir.
            initialValues={{
              username: "",
              email: "",
              image: "",
              bio: "",
              password: "",
              password2: "",
            }}
            validationSchema={RegisterSchema}
            //todo submit işlemi gerçekleştiğinde yapmasını istediğimiz işlemleri buraya yazıyoruz.
            onSubmit={(values, actions) => {
              // same shape as initial values
              console.log(values);
              register(values)     //todo formdan gelen values
              actions.resetForm();
            }}
            component={(props) => <RegisterForm {...props} />}
          >
          </Formik>

          <Box sx={{ textAlign: "left", mt: 2 }}>
            Already have an account? <Link to="/">Sign in</Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
