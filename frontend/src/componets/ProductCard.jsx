import React, { useState } from "react";
import { Box, Button, Typography, Modal, TextField } from "@mui/material";
import { MdAutoDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useProductStore } from "../store/product";

const ProductCard = ({ product }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [editableProduct, setEditableProduct] = useState(null);

  const { deleteProduct, updateProduct } = useProductStore();

  const handleEditClick = () => {
    setEditableProduct(product);
    setIsPopupOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableProduct({ ...editableProduct, [name]: value });
  };

  const handleSubmit = async () => {
    const { _id, ...updatedProduct } = editableProduct; // Extract ID
    const response = await updateProduct(_id, updatedProduct);
    if (response.success) {
      alert("Product updated successfully!");
      setIsPopupOpen(false);
    } else {
      alert(response.message);
    }
  };

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      alert("Error: " + message);
    } else {
      alert("Product deleted successfully!");
    }
  };

  return (
    <Box
      sx={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        maxWidth: 300,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        margin: "16px auto",
        backgroundColor: "#fff",
        width: "400px",
      }}
    >
      {/* Product Image */}
      <Box
        sx={{
          height: "200px",
          overflow: "hidden",
          backgroundColor: "#f9f9f9",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>

      {/* Product Name */}
      <Box sx={{ padding: "16px" }}>
        <Typography variant="h6" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          ${product.price}
        </Typography>
      </Box>

      {/* Action Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-around", padding: "8px" }}>
        <Button
          variant="contained"
          color="error"
          startIcon={<MdAutoDelete />}
          aria-label="Delete"
          sx={{ textTransform: "none" }}
          onClick={() => handleDeleteProduct(product._id)}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<CiEdit />}
          aria-label="Edit"
          sx={{ textTransform: "none" }}
          onClick={handleEditClick}
        >
          Edit
        </Button>
      </Box>

      {/* Edit Product Popup */}
      <Modal
        open={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: "16px",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            width: "300px",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Edit Product
          </Typography>
          <TextField
            fullWidth
            margin="dense"
            name="name"
            label="Product Name"
            value={editableProduct?.name || ""}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            name="image"
            label="Image URL"
            value={editableProduct?.image || ""}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            name="price"
            label="Price"
            type="number"
            value={editableProduct?.price || ""}
            onChange={handleChange}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "16px" }}>
            <Button variant="outlined" onClick={() => setIsPopupOpen(false)}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ProductCard;
