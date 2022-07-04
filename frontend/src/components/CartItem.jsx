import React from "react";
import { useDispatch } from "react-redux";
import {
    increaseQuantity,
    decreaseQuantity,
    deleteItem,
} from "../redux/slices/cartSlice";

import {
    styled,
    Grid,
    CardMedia,
    Typography,
    Button,
    Divider,
    Paper,
    Stack,
} from "@mui/material";

import { Add, Remove, DeleteOutline } from "@mui/icons-material";

const Item = styled(Paper)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "none",
    padding: 0,
});

const CartItem = (props) => {
    const item = props.product;

    const dispatch = useDispatch();

    const handleIncrease = () => {
        dispatch(increaseQuantity(item.id));
    };

    const handleDecrease = () => {
        dispatch(decreaseQuantity(item.id));
    };

    const handleDelete = () => {
        dispatch(deleteItem(item.id));
    };

    return (
        <>
            <Grid
                container
                direction='row'
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    flexDirection: "row",
                    margin: "0 auto",
                    maxWidth: 1266,
                    height: "160px",
                    marginBottom: 3,
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                }}
            >
                <Grid item xs={2} sx={{ margin: "auto" }}>
                    <Item>
                        <CardMedia
                            component='img'
                            image={item.image}
                            alt={item.title}
                            sx={{ width: "50%" }}
                        />
                    </Item>
                </Grid>
                <Grid item xs={3} sx={{ margin: "auto" }}>
                    <Typography variant='h6'>{item.title}</Typography>
                </Grid>
                <Grid item xs={1} sx={{ margin: "auto" }}>
                    <Typography variant='h6' align='center'>
                        ${item.price.toFixed(2)}
                    </Typography>
                </Grid>
                <Grid
                    container
                    item
                    xs={2}
                    direction='row'
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "auto",
                    }}
                >
                    <Stack
                        direction='row'
                        sx={{
                            border: "1px solid #ccc",
                            borderRadius: 1,
                        }}
                    >
                        <Button
                            onClick={handleDecrease}
                            sx={{ color: "#000" }}
                            size='small'
                        >
                            <Remove />
                        </Button>
                        <Divider sx={{ height: 28 }} orientation='vertical' />
                        <Typography
                            align='center'
                            sx={{ width: "32px", lineHeight: "32px" }}
                        >
                            {item.quantity}
                        </Typography>
                        <Divider sx={{ height: 28 }} orientation='vertical' />
                        <Button
                            onClick={handleIncrease}
                            sx={{ color: "#000" }}
                            size='small'
                        >
                            <Add />
                        </Button>
                    </Stack>
                </Grid>
                <Grid item xs={1} sx={{ margin: "auto" }}>
                    <Typography align='center' variant='h6'>
                        ${(item.price * item.quantity).toFixed(2)}
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={3}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        margin: "auto",
                    }}
                >
                    <Button variant='contained' size='large'>
                        Check out
                    </Button>
                    <Button
                        onClick={handleDelete}
                        variant='outlined'
                        startIcon={<DeleteOutline />}
                        size='large'
                        sx={{ marginLeft: 2 }}
                    >
                        Delete
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default CartItem;
