import React, { useState } from "react";
import { Grid, MenuList, Box, Button } from "@mui/material";
import {
    AccountCircleOutlined,
    ArticleOutlined,
    LocationOnOutlined,
    PasswordOutlined,
} from "@mui/icons-material";

import Address from "../components/Address";
import Purchase from "../components/Purchase";
import Information from "../components/Information";
import ChangePassword from "../components/ChangePassword";

const Profile = () => {
    const [index, setIndex] = useState(0);

    const handleChange = (e) => {
        setIndex(e.target.value);
    };
    return (
        <>
            <Grid container direction='row'>
                <Grid
                    item
                    xs={2}
                    sx={{
                        borderRight: 1,
                        borderColor: "divider",
                    }}
                >
                    <MenuList>
                        <MenuItem
                            value='0'
                            index={index}
                            startIcon={<AccountCircleOutlined />}
                            onClick={handleChange}
                        >
                            Information
                        </MenuItem>
                        <MenuItem
                            value='1'
                            index={index}
                            startIcon={<ArticleOutlined />}
                            onClick={handleChange}
                        >
                            Address
                        </MenuItem>
                        <MenuItem
                            value='2'
                            index={index}
                            startIcon={<LocationOnOutlined />}
                            onClick={handleChange}
                        >
                            Purchase
                        </MenuItem>
                        <MenuItem
                            value='3'
                            index={index}
                            startIcon={<PasswordOutlined />}
                            onClick={handleChange}
                        >
                            Change Password
                        </MenuItem>
                        <Button
                            fullWidth
                            variant='contained'
                            size='large'
                            color='otherColor'
                            sx={{
                                margin: "24px 0",
                                height: "56px",
                                color: "#fff",
                            }}
                        >
                            Log out
                        </Button>
                    </MenuList>
                </Grid>
                <Grid item xs={10}>
                    <Tab index={index} value='0'>
                        <Information />
                    </Tab>
                    <Tab index={index} value='1'>
                        <Address />
                    </Tab>
                    <Tab index={index} value='2'>
                        <Purchase />
                    </Tab>
                    <Tab index={index} value='3'>
                        <ChangePassword />
                    </Tab>
                </Grid>
            </Grid>
        </>
    );
};

const MenuItem = (props) => {
    return (
        <Button
            index={props.index}
            value={props.value}
            startIcon={props.startIcon}
            onClick={props.onClick}
            sx={{
                width: "100%",
                justifyContent: "flex-start",
                height: 50,
                fontSize: 16,
                backgroundColor:
                    props.index == props.value ? "#F6E3C5" : "#FFF",
                color: "#000",
                "&:hover": {
                    backgroundColor:
                        props.index == props.value ? "#F6E3C5" : "none",
                },
            }}
        >
            {props.children}
        </Button>
    );
};

const Tab = (props) => {
    return (
        <div id={`tab-${props.index}`} value={props.value}>
            {props.index == props.value && <Box>{props.children}</Box>}
        </div>
    );
};

export default Profile;
