import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
    Grid,
    Box,
    FormControl,
    FormGroup,
    TextField,
    Typography,
    Button,
    Input,
    Stack,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormLabel,
    Avatar,
} from "@mui/material";

const INFO = {
    username: "trungvan1904",
    name: "Trinh Trung Van",
    email: "vantrinhtrung@gmail.com",
    phone: "0338886754",
    gender: "male",
    dob: "2001-04-19",
    avatarSrc:
        "https://i.pinimg.com/564x/5c/99/47/5c9947aa9b02fa07cadde7e8a9a2d837.jpg",
};

const Information = () => {
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();

    const handleSelectFile = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    useEffect(() => {
        // Để avt mặc định của user
        if (!selectedFile) {
            setPreview(INFO.avatarSrc);
            return;
        }
        // Tạo path cho cho image và setPreview
        const objectUrl = URL.createObjectURL(selectedFile);
        setPreview(objectUrl);

        return () => {
            URL.revokeObjectURL(objectUrl);
        };
    }, [selectedFile]);

    const handleUploadFile = () => {
        document.getElementById("avatar").click();
    };

    const formik = useFormik({
        initialValues: {
            username: INFO.username,
            name: INFO.name,
            email: INFO.email,
            phone: INFO.phone,
            gender: INFO.gender,
            dob: INFO.dob,
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .min(5, "Password must be 5-15 characters.")
                .max(15, "Password must be 5-15 characters."),
            name: Yup.string()
                .min(5, "Password must be 5-15 characters.")
                .max(15, "Password must be 5-15 characters."),
            email: Yup.string().email("Email incorrect."),
            phone: Yup.string()
                .max(10, "Phone number incorrect.")
                .test("phone-number", "Phone number incorrect.", (value) => {
                    return /^\+?[0-9]{3}-?[0-9]{6,12}$/.test(value);
                }),
            gender: Yup.string().oneOf(["male", "female", "other"]).required(),
            dob: Yup.date().min("1910-01-01", "Date is too early"),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

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
                <Typography variant='h6'>My Profile</Typography>
                <Typography>Manage and protect your account.</Typography>
            </Box>
            <Grid container>
                <Grid
                    item
                    xs={7}
                    sx={{
                        paddingRight: 4,
                        borderRight: 1,
                        borderColor: "divider",
                    }}
                >
                    <form onSubmit={formik.handleSubmit}>
                        <FormControl fullWidth>
                            <FormGroup>
                                <TextField
                                    id='username'
                                    label='Username'
                                    variant='outlined'
                                    margin='dense'
                                    color={
                                        formik.errors.username
                                            ? "otherColor"
                                            : "primary"
                                    }
                                    type='text'
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.username && (
                                    <Typography sx={{ color: "#FF0063" }}>
                                        {formik.errors.username}
                                    </Typography>
                                )}
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    id='name'
                                    label='Name'
                                    variant='outlined'
                                    margin='dense'
                                    color={
                                        formik.errors.name
                                            ? "otherColor"
                                            : "primary"
                                    }
                                    type='text'
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.name && (
                                    <Typography sx={{ color: "#FF0063" }}>
                                        {formik.errors.name}
                                    </Typography>
                                )}
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    id='email'
                                    label='Email'
                                    variant='outlined'
                                    margin='dense'
                                    color={
                                        formik.errors.email
                                            ? "otherColor"
                                            : "primary"
                                    }
                                    type='email'
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.email && (
                                    <Typography sx={{ color: "#FF0063" }}>
                                        {formik.errors.email}
                                    </Typography>
                                )}
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    id='phone'
                                    label='Phone'
                                    variant='outlined'
                                    margin='dense'
                                    color={
                                        formik.errors.phone
                                            ? "otherColor"
                                            : "primary"
                                    }
                                    type='text'
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.phone && (
                                    <Typography sx={{ color: "#FF0063" }}>
                                        {formik.errors.phone}
                                    </Typography>
                                )}
                            </FormGroup>
                            <FormControl sx={{ marginBottom: 1 }}>
                                <FormLabel id='demo-controlled-radio-buttons-group'>
                                    Gender
                                </FormLabel>
                                <RadioGroup
                                    aria-labelledby='gender-label'
                                    id='gender'
                                    name='gender'
                                    row
                                    value={formik.values.gender}
                                    onChange={formik.handleChange}
                                >
                                    <FormControlLabel
                                        value='male'
                                        control={<Radio />}
                                        label='Male'
                                    />
                                    <FormControlLabel
                                        value='female'
                                        control={<Radio />}
                                        label='Female'
                                    />
                                    <FormControlLabel
                                        value='other'
                                        control={<Radio />}
                                        label='Other'
                                    />
                                </RadioGroup>
                            </FormControl>
                            <FormControl>
                                <TextField
                                    id='dob'
                                    name='dob'
                                    label='Birthday'
                                    type='date'
                                    onKeyDown={(e) => e.preventDefault()}
                                    value={formik.values.dob}
                                    onChange={formik.handleChange}
                                />
                            </FormControl>
                            <Button
                                variant='contained'
                                size='large'
                                sx={{ height: "56px", margin: "12px 0" }}
                                type='submit'
                                disabled={
                                    Object.keys(formik.errors).length === 0
                                        ? false
                                        : true
                                }
                            >
                                Save
                            </Button>
                        </FormControl>
                    </form>
                </Grid>
                <Grid
                    item
                    xs={5}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar
                        variant='rounded'
                        alt={INFO.username}
                        src={preview}
                        sx={{
                            width: "200px",
                            height: "200px",
                            borderRadius: "1000px",
                        }}
                    />
                    <Input
                        id='avatar'
                        type='file'
                        accept='.jpg,.jpeg,.png'
                        sx={{ display: "none" }}
                        onChange={handleSelectFile}
                    />
                    <Button
                        variant='contained'
                        size='large'
                        sx={{ margin: "16px 0" }}
                        onClick={handleUploadFile}
                    >
                        Select Image
                    </Button>
                    <Typography>File extension: .JPG, .JPEG, .PNG</Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Information;
