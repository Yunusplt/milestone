import { Modal } from "@mui/material";
import React from "react";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useNavigate } from "react-router-dom";
import { toastSuccessNotify } from "../../helper/ToastNotify";

const DeleteModal = ({ open, handleClose, blogId }) => {
  const { deleteBlog } = useBlogCalls();
  const navigate = useNavigate();

  const handleClickDel = () => {
    deleteBlog(blogId);
    handleClose();
    toastSuccessNotify("Blog was deleted");
    navigate("/");
  };

  return (
    <Modal
      open={open}
      onClose={() => handleClose()}
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
      >
        <Typography variant="h5" textAlign="center">
          Do you really want to delete your blog? This process cannot be undone!
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Button
            color="success"
            type="submit"
            variant="contained"
            size="medium"
            onClick={handleClose}
          >
            cancel
          </Button>
          <Button
            onClick={handleClickDel}
            color="error"
            type="submit"
            variant="contained"
            size="medium"
          >
            delete
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default DeleteModal;

// sx={{
//   display: "flex",
//   flexDirection: "column",
//   gap: 2,
//   p: 2,
//   boxShadow: 20,
//   backgroundColor: "white",
//   width: 350,
// }}
