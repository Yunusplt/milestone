import React from "react";
import { Box, Button, TextField } from "@mui/material";
import * as Yup from "yup";
import { Form } from "formik";

export const LoginSchema = Yup.object().shape({
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
});

const LoginForm = ({ values, errors, touched, handleBlur, handleChange }) => {
  return (
    <div>
      <Form>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
          <Button variant="contained" type="submit" size="large">
            Submit
          </Button>
        </Box>
      </Form>
    </div>
  );
};

export default LoginForm;
