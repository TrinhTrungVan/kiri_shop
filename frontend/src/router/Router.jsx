import React from "react";
import { Routes, Route } from "react-router-dom";

import { styled, Box } from "@mui/material";

import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Profile from "../pages/Profile";
import Cart from "../pages/Cart";

const Container = styled(Box)({
    margin: "0 auto",
    maxWidth: 1266,
});

const Router = () => {
    return (
        <Container>
            <Routes>
                <Route path='/cart/:id' element={<Cart />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/profile' element={<Profile />} exact />
                <Route path='/products/:id' element={<Detail />} />
                <Route path='/' element={<Home />} exact />
            </Routes>
        </Container>
    );
};

export default Router;
