import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
    styled,
    Box,
    Stack,
    Button,
    FormControl,
    Select,
    InputBase,
    IconButton,
    MenuItem,
    Typography,
} from "@mui/material";
import {
    Email,
    Call,
    Search,
    ShoppingBagOutlined,
    PersonOutline,
} from "@mui/icons-material";

import logo from "../assets/images/logo_kirishop.png";

import { theme } from "../themes/theme";

const WhiteButton = styled(Button)({
    color: "white",
});

const Header = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalItems = cartItems.length;

    return (
        <header>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    backgroundColor: theme.palette.primary.main,
                }}
            >
                <Stack
                    direction='row'
                    justifyContent='space-between'
                    sx={{
                        width: "100%",
                        maxWidth: 1266,
                    }}
                >
                    <Stack direction='row'>
                        <WhiteButton
                            variant='container'
                            size='small'
                            startIcon={<Call />}
                        >
                            0987654321
                        </WhiteButton>
                        <WhiteButton
                            variant='container'
                            sx={{ textTransform: "lowercase" }}
                            startIcon={<Email />}
                            size='small'
                        >
                            vantrinhtrung@gmail.com
                        </WhiteButton>
                    </Stack>
                    <Stack direction='row' spacing={2}>
                        <WhiteButton
                            variant='container'
                            size='small'
                            sx={{ textTransform: "capitalize" }}
                        >
                            Contact
                        </WhiteButton>
                        <WhiteButton
                            variant='container'
                            size='small'
                            sx={{ textTransform: "capitalize" }}
                        >
                            Need help?
                        </WhiteButton>
                        <FormControl>
                            <Select
                                size='small'
                                value='English'
                                sx={{
                                    color: "white",
                                    ".css-1d3z3hw-MuiOutlinedInput-notchedOutline":
                                        { borderWidth: 0 },
                                    ".css-m02asm-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                                        {
                                            borderWidth: 0,
                                        },
                                }}
                            >
                                <MenuItem value='English'>English</MenuItem>
                                <MenuItem value='Vietnamese'>
                                    Vietnamese
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                </Stack>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    height: 120,
                    backgroundColor: "#DAEAF1",
                }}
            >
                <Stack
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                    sx={{
                        width: "100%",
                        maxWidth: 1266,
                    }}
                >
                    <Link to='/'>
                        <Box
                            component='img'
                            alt='KiriShop'
                            src={logo}
                            sx={{
                                height: 100,
                            }}
                        />
                    </Link>
                    <FormControl
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: "#fff",
                            width: 500,
                            paddingLeft: 2,
                            borderRadius: 100,
                            border: "solid 2px #fff",
                        }}
                    >
                        <InputBase placeholder='Searching for...' fullWidth />
                        <IconButton>
                            <Search fontSize='large' />
                        </IconButton>
                    </FormControl>
                    <Stack direction='row'>
                        <Link to='/cart'>
                            <IconButton
                                sx={{
                                    marginRight: 2,
                                    position: "relative",
                                }}
                            >
                                <ShoppingBagOutlined fontSize='large' />
                                <Typography
                                    sx={{
                                        position: "absolute",
                                        top: "-6px",
                                        right: "-6px",
                                        color: "#fff",
                                        backgroundColor: "#FF5D5D",
                                        borderRadius: 10,
                                        padding: "0 7px",
                                    }}
                                >
                                    {totalItems}
                                </Typography>
                            </IconButton>
                        </Link>
                        <Link to='/profile'>
                            <IconButton>
                                <PersonOutline fontSize='large' />
                            </IconButton>
                        </Link>
                    </Stack>
                </Stack>
            </Box>
        </header>
    );
};

export default Header;
