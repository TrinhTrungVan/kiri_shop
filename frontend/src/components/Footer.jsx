import React from "react";

import {
    styled,
    Box,
    Container,
    Grid,
    Typography,
    Stack,
    Link,
} from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

import { theme } from "../themes/theme";

const CustomLink = styled(Link)({
    textDecoration: "none",
    color: "#fff",
});

const Footer = () => {
    return (
        <footer>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    color: "white",
                    backgroundColor: theme.palette.primary.main,
                }}
            >
                <Grid
                    container
                    sx={{
                        width: "100%",
                        maxWidth: 1266,
                        paddingTop: 5,
                        paddingBottom: 5,
                    }}
                >
                    <Grid
                        container
                        item
                        xs={4}
                        direction='column'
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            variant='h3'
                            sx={{
                                fontWeight: "bold",
                                color: "transparent",
                                background:
                                    "linear-gradient(30deg, #F574B9, #5961DF)",
                                WebkitBackgroundClip: "text",
                            }}
                        >
                            KiriShop
                        </Typography>
                        <Stack
                            direction='row'
                            spacing={1}
                            sx={{ marginTop: 6 }}
                        >
                            <CustomLink href='#'>
                                <Facebook fontSize='large' />
                            </CustomLink>
                            <CustomLink href='#'>
                                <Instagram fontSize='large' />
                            </CustomLink>
                            <CustomLink href='#'>
                                <YouTube fontSize='large' />
                            </CustomLink>
                            <CustomLink href='#'>
                                <Twitter fontSize='large' />
                            </CustomLink>
                        </Stack>
                        <Typography fontSize='small'>
                            Copyright &copy;
                            <CustomLink
                                href='https://fb.com/TrungVan.1904'
                                sx={{
                                    marginLeft: 1,
                                }}
                            >
                                TrungVan
                            </CustomLink>
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={4}
                        sx={{ display: "flex", justifyContent: "center" }}
                    >
                        <Stack spacing={1}>
                            <Typography variant='h5'>About KiriShop</Typography>
                            <CustomLink href='#'>About us</CustomLink>
                            <CustomLink href='#'>Offices</CustomLink>
                            <CustomLink href='#'>Work with us</CustomLink>
                            <CustomLink href='#'>Our policies</CustomLink>
                        </Stack>
                    </Grid>
                    <Grid
                        item
                        xs={4}
                        sx={{ display: "flex", justifyContent: "center" }}
                    >
                        <Stack spacing={1}>
                            <Typography variant='h5'>Shopguide</Typography>
                            <CustomLink href='#'>Payment</CustomLink>
                            <CustomLink href='#'>Returns</CustomLink>
                            <CustomLink href='#'>Gift Card</CustomLink>
                            <CustomLink href='#'>Guest purchase</CustomLink>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </footer>
    );
};

export default Footer;
