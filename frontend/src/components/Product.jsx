import React from "react";
import { Link } from "react-router-dom";

import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Rating,
    Stack,
} from "@mui/material";

const Product = (props) => {
    const product = props.product;

    return (
        <Grid item xs={3}>
            <Link to={`/products/${product.id}`}>
                <Card
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: 400,
                        borderRadius: 3,
                        padding: 1,
                        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                        "&:hover": {
                            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                        },
                        "&:hover .product__img": {
                            width: "52%",
                            transition: "width 0.1s ease-in",
                        },
                    }}
                >
                    <CardMedia
                        component='img'
                        className='product__img'
                        image={product.image}
                        alt={product.title}
                        sx={{
                            margin: "auto",
                            backgroundSize: "cover",
                            width: "50%",
                            overflow: "hidden",
                        }}
                    />
                    <CardContent>
                        <Typography variant='h6'>{product.title}</Typography>
                        <Typography
                            variant='h5'
                            align='center'
                            sx={{ fontWeight: "700", marginTop: 2 }}
                        >
                            ${product.price}
                        </Typography>
                        <Stack
                            direction='row'
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Rating
                                name='read-only'
                                value={product.rating.rate}
                                readOnly
                            />
                            <Typography variant='h6'>
                                {product.rating.count} sold
                            </Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
    );
};

export default Product;
