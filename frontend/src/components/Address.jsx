import React from "react";

import { Box, Typography, Button, Stack, Grid } from "@mui/material";
import { Add, Edit, DeleteOutline } from "@mui/icons-material";

const Address = () => {
    return (
        <Box sx={{ padding: "16px 40px 40px" }}>
            <Stack
                direction='row'
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: 1,
                    borderColor: "divider",
                    marginBottom: 2,
                    paddingBottom: 2,
                }}
            >
                <Typography variant='h6'>My Address</Typography>
                <Button startIcon={<Add />} variant='contained' size='large'>
                    Add New Address
                </Button>
            </Stack>
            <AddressItem />
            <AddressItem />
            <AddressItem />
        </Box>
    );
};

const AddressItem = () => {
    return (
        <Grid
            container
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: 1,
                borderColor: "divider",
                marginBottom: 2,
                paddingBottom: 2,
            }}
        >
            <Grid item xs={9}>
                <Stack
                    direction='row'
                    spacing={3}
                    sx={{ display: "flex", alignItems: "center" }}
                >
                    <Typography
                        variant='caption'
                        align='right'
                        sx={{
                            marginRight: 2,
                            width: "150px",
                        }}
                    >
                        Full Name
                    </Typography>
                    <Typography>Trinh Trung Van</Typography>
                </Stack>
                <Stack
                    direction='row'
                    spacing={3}
                    sx={{ display: "flex", alignItems: "center" }}
                >
                    <Typography
                        variant='caption'
                        align='right'
                        sx={{ marginRight: 2, width: "150px" }}
                    >
                        Phone
                    </Typography>
                    <Typography>0987654321</Typography>
                </Stack>
                <Stack
                    direction='row'
                    spacing={3}
                    sx={{ display: "flex", alignItems: "center" }}
                >
                    <Typography
                        variant='caption'
                        align='right'
                        sx={{ marginRight: 2, width: "150px" }}
                    >
                        Address
                    </Typography>
                    <Typography>Ha Dong, Ha Noi</Typography>
                </Stack>
            </Grid>
            <Grid item xs={3}>
                <Button variant='contained' size='large' startIcon={<Edit />}>
                    Edit
                </Button>
                <Button
                    variant='outlined'
                    startIcon={<DeleteOutline />}
                    size='large'
                    sx={{ marginLeft: 2 }}
                >
                    Delete
                </Button>
            </Grid>
        </Grid>
    );
};

export default Address;
