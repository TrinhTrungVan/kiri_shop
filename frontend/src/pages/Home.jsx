import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Typography, Grid } from "@mui/material";

import Product from "../components/Product";
import Loading from "../components/Loading";

import { fetchProducts } from "../redux/slices/productSlice";

const Home = () => {
    const dispatch = useDispatch();

    const { products, loading, error } = useSelector(
        (state) => state.productList
    );

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <>
            {loading && <Loading />}
            {error && (
                <Typography
                    align='center'
                    variant='h6'
                    sx={{ margin: "32px 0" }}
                >
                    {error}. Please try again later.
                </Typography>
            )}
            {!loading && !error && (
                <Grid
                    container
                    direction='column'
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        margin: "0 auto",
                        maxWidth: 1266,
                    }}
                >
                    <Typography variant='h5' sx={{ alignSelf: "flex-start" }}>
                        Lasted Products
                    </Typography>
                    <Grid
                        container
                        item
                        spacing={3}
                        sx={{
                            width: "100%",
                            maxWidth: 1266,
                            paddingTop: 2,
                            paddingBottom: 2,
                        }}
                    >
                        {products.map((product) => (
                            <Product key={product.id} product={product} />
                        ))}
                    </Grid>
                </Grid>
            )}
        </>
    );
};

export default Home;
