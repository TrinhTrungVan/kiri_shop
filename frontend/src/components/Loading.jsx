import React from "react";

import { Box } from "@mui/material";

import loadingPath from "../assets/images/loading.png";

const Loading = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box
                component='img'
                sx={{
                    height: 200,
                    animation: "spin 1s linear infinite",
                }}
                src={loadingPath}
            />
        </Box>
    );
};

export default Loading;
