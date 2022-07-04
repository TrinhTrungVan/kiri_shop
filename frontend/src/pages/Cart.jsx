import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";

import {
    styled,
    Grid,
    Typography,
    Box,
    Container,
    Button,
} from "@mui/material";

import CartItem from "../components/CartItem";

import { addItem } from "../redux/slices/cartSlice";

import empty_cart from "../assets/images/empty-cart.png";

const Item = styled(Typography)({
    textAlign: "center",
    padding: "16px 0",
});

const Cart = () => {
    const { id } = useParams();
    const location = useLocation();
    const quantity = location ? +location.search.split("=")[1] : 1;

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const reversedCartItems = [...cartItems].reverse();

    useEffect(() => {
        if (id) {
            dispatch(addItem({ id, quantity }));
        }
    }, [dispatch, id, quantity]);

    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate("/");
    };

    return cartItems.length === 0 ? (
        <Container
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <Box component='img' alt='empty-cart' src={empty_cart} />
            <Button
                variant='contained'
                sx={{ marginBottom: 4 }}
                size='large'
                onClick={handleOnClick}
            >
                Shop now
            </Button>
        </Container>
    ) : (
        <>
            <Grid container direction='row'>
                <Grid item xs={5}>
                    <Item>Product</Item>
                </Grid>
                <Grid item xs={1}>
                    <Item>Unit Price</Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>Quantity</Item>
                </Grid>
                <Grid item xs={1}>
                    <Item>Total Price</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>Actions</Item>
                </Grid>
            </Grid>
            {reversedCartItems.map((product, index) => (
                <CartItem key={index} product={product} />
            ))}
        </>
    );
};

export default Cart;
