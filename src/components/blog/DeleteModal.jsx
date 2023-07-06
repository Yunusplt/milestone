import { Modal } from "@mui/material";
import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import useBlogCalls from "../../hooks/useBlogCalls";

const DeleteModal = ({
  open,
  handleClose,
  blogId,
  formValues,
  setFormValues,
}) => {
  const { categories } = useSelector((state) => state.blog);
  const { putUpdateData } = useBlogCalls();

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    putUpdateData(formValues, blogId);

    handleClose(); 
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        handleClose();
        setFormValues({
          title: "",
          image: "",
          category_name: "",
          address: "",
          status: "",
          content: "",
        });
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 2,
          boxShadow: 20,
          backgroundColor: "white",
          width: 350,
        }}
        component={"form"}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5" align="left" mt={2} color="secondary.light">
          New Blog
        </Typography>
        <TextField
          id="title"
          label="Title"
          type="text"
          variant="outlined"
          name="title"
          value={formValues.title}
          onChange={handleChange}
          required
        />
        <TextField
          id="image"
          label="Image URL"
          type="text"
          variant="outlined"
          name="image"
          value={formValues.image}
          onChange={handleChange}
        />
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formValues.category}
              onChange={handleChange}
              label="Category"
              name="category"
            >
              {categories.map((category) => (
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
              value={formValues.status}
              onChange={handleChange}
              label="Status"
              name="status"
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
          value={formValues.content}
          onChange={handleChange}
          required
          multiline
          rows={3}
        />
        <Button color="info" type="submit" variant="contained" size="large">
          New Blog
        </Button>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
