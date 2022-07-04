import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button,
    Stack,
    Rating,
    Divider,
} from "@mui/material";
import {
    ArrowBackIos,
    Add,
    Remove,
    AddShoppingCart,
} from "@mui/icons-material";

// Component
import Loading from "../components/Loading";

import { fetchProductDetail } from "../redux/slices/productDetailSlice";

const Detail = () => {
    const { id } = useParams();

    const dispatch = useDispatch();
    const { productDetail, loading, error } = useSelector(
        (state) => state.productDetail
    );

    useEffect(() => {
        dispatch(fetchProductDetail(id));
    }, [dispatch, id]);

    const [quantity, setQuantity] = useState(1);

    const handleDecrease = () => {
        quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
    };
    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    let navigate = useNavigate();
    const handleAddToCart = () => {
        navigate(`/cart/${id}?quantity=${quantity}`);
    };

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
            {productDetail && !loading && !error && (
                <Card
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        flexDirection: "row",
                        margin: "0 auto",
                        maxWidth: 1266,
                        position: "relative",
                    }}
                >
                    <Link to='/'>
                        <Button
                            variant='text'
                            startIcon={<ArrowBackIos />}
                            size='large'
                            sx={{
                                color: "#000",
                                textTransform: "capitalize",
                                position: "absolute",
                            }}
                        >
                            Go back
                        </Button>
                    </Link>
                    <CardMedia
                        component='img'
                        image={productDetail.image}
                        alt={productDetail.title}
                        sx={{ width: "35%", padding: 8 }}
                    />
                    <CardContent sx={{ padding: 8 }}>
                        <Typography variant='h5' sx={{ fontWeight: "700" }}>
                            {productDetail.title}
                        </Typography>
                        <Stack
                            direction='row'
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Rating
                                name='read-only'
                                value={productDetail.rating.rate}
                                readOnly
                            />
                            <Divider
                                sx={{ height: 28, m: 2 }}
                                orientation='vertical'
                            />
                            <Typography variant='h6'>
                                {productDetail.rating.count} sold
                            </Typography>
                        </Stack>
                        <Typography
                            variant='h5'
                            sx={{ fontWeight: "700", margin: "8px 0 16px" }}
                        >
                            Price: ${productDetail.price}
                        </Typography>

                        <Typography>
                            Description: {productDetail.description}
                        </Typography>

                        <Stack direction='row' sx={{ marginTop: 2 }}>
                            <Typography variant='h6' sx={{ marginRight: 3 }}>
                                Quantity:
                            </Typography>
                            <Stack
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "row",
                                    border: "1px solid #ccc",
                                    borderRadius: 1,
                                    boxShadow: "none",
                                }}
                            >
                                <Button
                                    sx={{ color: "#000" }}
                                    size='small'
                                    onClick={handleDecrease}
                                >
                                    <Remove />
                                </Button>
                                <Divider
                                    sx={{ height: 28 }}
                                    orientation='vertical'
                                />
                                <Typography
                                    sx={{
                                        padding: "0 24px",
                                    }}
                                >
                                    {quantity}
                                </Typography>
                                <Divider
                                    sx={{ height: 28 }}
                                    orientation='vertical'
                                />
                                <Button
                                    sx={{ color: "#000" }}
                                    size='small'
                                    onClick={handleIncrease}
                                >
                                    <Add />
                                </Button>
                            </Stack>
                        </Stack>
                        <CardActions sx={{ margin: "32px 0 20px", padding: 0 }}>
                            <Button
                                onClick={handleAddToCart}
                                startIcon={<AddShoppingCart />}
                                variant='outlined'
                                size='large'
                                sx={{ padding: "12px 24px" }}
                            >
                                Add to cart
                            </Button>
                            <Button
                                variant='contained'
                                size='large'
                                sx={{ padding: "12px 24px" }}
                            >
                                Buy Now
                            </Button>
                        </CardActions>
                    </CardContent>
                </Card>
            )}
        </>
    );
};

export default Detail;
