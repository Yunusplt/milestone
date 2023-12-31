import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import useBlogCalls from "../hooks/useBlogCalls";
import { useLocation, useNavigate } from "react-router-dom";
import { toastSuccessNotify } from "../helper/ToastNotify";

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
  const { postNewBlog } = useBlogCalls();
  const navigate = useNavigate();

  const currentLocation = useLocation()
  console.log(currentLocation);

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
              title: "",
              content: "",
              image: "",
              category: null,
              status: "",
              slug: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
              //! submit işlemi gerçekleştiğinde yapmasını istediğimiz işlemleri buraya yazıyoruz.
              console.log(values);
              postNewBlog(values);
              actions.resetForm(); // inputları boşaltmak için kullanıyroruz
              toastSuccessNotify("New blog created");
              navigate("/");
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
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
                      <InputLabel id="demo-simple-select-label">
                        Category
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={values.category}
                        label="Category"
                        // onChange={handleChange}
                        onBlur={handleBlur}
                        onChange={(e) => {
                          setFieldValue("category", e.target.value);
                        }}
                      >
                        {categories.map((category) => (
                          <MenuItem value={category.id}>
                            {category.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Status
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={values.status}
                        label="Status"
                        // onChange={handleChange}
                        onBlur={handleBlur}
                        onChange={(e) => {
                          setFieldValue("status", e.target.value);
                        }}
                        required
                      >
                        <MenuItem
                          onClick={(e) => console.log(e.target.dataset.value)}
                          value="d"
                        >
                          Draft
                        </MenuItem>
                        <MenuItem
                          onClick={(e) => console.log(e.target.dataset.value)}
                          value="p"
                        >
                          Published
                        </MenuItem>
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
