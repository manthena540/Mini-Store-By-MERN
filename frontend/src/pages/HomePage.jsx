import React, { useEffect } from 'react';
import { Container, Link, Typography, Box } from "@mui/material";
import { useProductStore } from '../store/product';
import ProductCard from '../componets/ProductCard';

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts(); // Fetch products when the component mounts
  }, [fetchProducts]);

  return (
    <Container style={{ textAlign: 'center', marginTop: '40px' }}>
      {/* Display current product heading */}
      <Typography variant="h4" gutterBottom>
        Current Products
      </Typography>

      {/* Display product cards if products exist */}
      {products.length > 0 ? (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '16px',
            marginTop: '20px',
          }}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </Box>
      ) : (
        /* Message when no products are found */
        <Typography variant="body1" style={{ marginTop: '20px', marginBottom: '20px' }}>
          No products found.{" "}
          <Link href="/create" underline="hover" style={{ color: '#3f51b5' }}>
            Create a product
          </Link>
        </Typography>
      )}
    </Container>
  );
};

export default HomePage;
