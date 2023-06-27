import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/result.svg";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Form, Formik } from "formik";

import * as Yup from "yup";
import useAuthCalls from "../hooks/useAuthCalls";
import { useState } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import { useSelector } from "react-redux";


const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(1, "Too Short!")
    .max(100, "Too Long!")
    .required("Title is required"),
  content: Yup.string().required("Content is required"),
  image: Yup.string().max(400, "Too Long!").required("Image URL is required"),
});

const NewBlog = () => {
const { categories } = useSelector((state) => state.blog);
console.log(categories);
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState("");

    const handleChangeCat = (event) => {
      setCategory(event.target.value);
    
    };
    const handleChangeStat = (event) => {
      setStatus(event.target.value)
    };



  return (
    <Container maxWidth="lg">
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
          <Formik
            initialValues={{
              username: "",
              first_name: "",
              last_name: "",
              email: "",
              password: "",
              password2: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
              //! submit işlemi gerçekleştiğinde yapmasını istediğimiz işlemleri buraya yazıyoruz.
              console.log(values);
              // register(values);
              actions.resetForm(); // inputları boşaltmak için kullanıyroruz
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <Form sx={{ border: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    border: 0,
                    p: 2,
                    boxShadow: 20,
                  }}
                >
                  <Typography
                    variant="h5"
                    align="left"
                    mt={2}
                    color="secondary.light"
                  >
                    New Blog
                  </Typography>
                  <TextField
                    id="title"
                    label="Title"
                    type="text"
                    variant="outlined"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.title && errors.title} 
                    error={touched.title && errors.title} 
                    required
                  />
                  <TextField
                    id="image"
                    label="Image URL"
                    type="text"
                    variant="outlined"
                    name="image"
                    value={values.image}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.image && errors.image} //validationda verdiğimiz kalıba uymazsa ilgili mesajları göstermesi için
                    error={touched.image && errors.image} //validationda verdiğimiz kalıba uymazsa rengi errora çevirmesi için
                  />
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Category</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="Category"
                        onChange={handleChangeCat}
                      >
                      {categories.map((category)=>(
                        <MenuItem value={category.id}>{category.name}</MenuItem>
                      ))}
                      
                      </Select>
                    </FormControl>
                  </Box>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Status</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={status}
                        label="Status"
                        onChange={handleChangeStat}
                        required
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <TextField
                    id="content"
                    label="Content"
                    type="text"
                    variant="outlined"
                    name="content"
                    value={values.content}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.content && errors.content} //validationda verdiğimiz kalıba uymazsa ilgili mesajları göstermesi için
                    error={touched.content && errors.content} //validationda verdiğimiz kalıba uymazsa rengi errora çevirmesi için
                    required
                    multiline
                    rows={4}
                  />
                  <Button
                    color="info"
                    type="submit"
                    variant="contained"
                    size="large"             
                  >
                    New Blog
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewBlog;
