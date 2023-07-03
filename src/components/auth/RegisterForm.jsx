import React from "react";
import { Box, Button, TextField } from "@mui/material";
import * as Yup from "yup";
import { Form } from "formik";

export const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .max(150, "Username must be maximum 150 characters")
    .min(1, "Username must be minimum 1 character"),
  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be minimum 8 characters")
    .max(50, "Password muss maximum 50 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@/./+/-/_])[A-Za-z\d@/./+/-/_]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one special character'@/./+/-/_', one digit, and be at least 8 characters long"
    ),
  password2: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Passwords do not match"),
});

const RegisterForm = ({
  values,
  errors,
  touched,
  handleBlur,
  handleSubmit,
  handleChange,
}) => {
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            id="username"
            label="User Name"
            type="text"
            name="username"
            variant="outlined"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.username && errors.username}
            error={touched.username && errors.username}
            required
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            name="email"
            variant="outlined"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.email && errors.email}
            error={touched.email && errors.email}
            required
          />
          <TextField
            id="image"
            label="Image"
            type="text"
            name="image"
            variant="outlined"
            value={values.image}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextField
            id="bio"
            label="Bio"
            type="bio"
            name="bio"
            variant="outlined"
            value={values.bio}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            name="password"
            variant="outlined"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.password && errors.password}
            error={touched.password && errors.password}
            required
          />
          <TextField
            id="password2"
            label="Verify Password"
            type="password"
            name="password2"
            variant="outlined"
            value={values.password2}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.password2 && errors.password2}
            error={touched.password2 && errors.password2}
            required
          />
          <Button variant="contained" type="submit" size="large">
            Submit
          </Button>
        </Box>
      </Form>
    </div>
  );
};

export default RegisterForm;
