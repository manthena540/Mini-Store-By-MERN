import { Box, Button, Container, Input } from "@mui/material";
import { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const{createProduct}=useProductStore()

  const handleAddProduct = async() => {
    const {success,message} = await createProduct(newProduct)
    if(!success){
        alert("error")
    }
    else{
        alert("success")
    }
    setNewProduct({name:"",price:"",image:""});
   
  };

  return (
    <Container style={{ textAlign: 'center', marginTop: '40px',width:'400px' }}>
      <h1 style={{ color: '#3f51b5', marginBottom: '20px' }}>Create New Product</h1>
      
      <Box
        display="flex"
        flexDirection="column"
        gap="15px"
        alignItems="center"
        style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}
      >
        <Input
          placeholder="Product Name"
          name='name'
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          style={{ width: '100%', padding: '10px' }}
        />
        <Input
          placeholder="Price"
          name='price'
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          style={{ width: '100%', padding: '10px' }}
        />
        <Input
          placeholder="Image Url"
          name='image'
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          style={{ width: '100%', padding: '10px' }}
        />
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleAddProduct} 
          style={{ width: '100%' }}
        >
          Add Product
        </Button>
      </Box>
    </Container>
  );
};

export default CreatePage;