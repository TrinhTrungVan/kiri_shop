import React from "react";
import {
    styled,
    Box,
    Grid,
    CardMedia,
    Typography,
    Button,
    Divider,
    Paper,
    Stack,
} from "@mui/material";

const Purchase = () => {
    return (
        <Box sx={{ padding: "16px 40px 40px" }}>
            <Box
                sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    marginBottom: 2,
                    paddingBottom: 2,
                }}
            >
                <Typography variant='h6'>Purchase History</Typography>
            </Box>
            <Grid container direction='row' sx={{ marginBottom: 2 }}>
                <Grid item xs={5}>
                    <Item>Product</Item>
                </Grid>
                <Grid item xs={1}>
                    <Item>Unit Price</Item>
                </Grid>
                <Grid item xs={1}>
                    <Item>Quantity</Item>
                </Grid>
                <Grid item xs={1}>
                    <Item>Total</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>Actions</Item>
                </Grid>
            </Grid>
            <PurchaseItem />
            <PurchaseItem />
            <PurchaseItem />
        </Box>
    );
};

const Item = styled(Paper)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "none",
    padding: 0,
});

const ITEM = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
        rate: 3.9,
        count: 120,
    },
    quantity: 1,
};

const PurchaseItem = () => {
    const item = ITEM;
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
                    <Typography variant='string'>{item.title}</Typography>
                </Grid>
                <Grid item xs={1} sx={{ margin: "auto" }}>
                    <Typography variant='h6' align='center'>
                        ${item.price.toFixed(2)}
                    </Typography>
                </Grid>
                <Grid
                    container
                    item
                    xs={1}
                    direction='row'
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "auto",
                    }}
                >
                    <Typography
                        align='center'
                        variant='h6'
                        sx={{ width: "32px", lineHeight: "32px" }}
                    >
                        {item.quantity}
                    </Typography>
                </Grid>
                <Grid item xs={1} sx={{ margin: "auto" }}>
                    <Typography align='center' variant='h6'>
                        ${(item.price * item.quantity).toFixed(2)}
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={4}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        margin: "auto",
                    }}
                >
                    <Button variant='contained' size='large'>
                        Buy Again
                    </Button>
                    <Button
                        variant='outlined'
                        size='large'
                        sx={{ marginLeft: 2 }}
                    >
                        Contact Seller
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default Purchase;
