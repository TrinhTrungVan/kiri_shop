import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
    Box,
    FormControl,
    FormGroup,
    TextField,
    Typography,
    Button,
    Stack,
} from "@mui/material";

const Information = () => {
    const formik = useFormik({
        initialValues: {
            newPassword: "",
            confirmPassword: "",
            verificationCode: "",
        },
        validationSchema: Yup.object({
            newPassword: Yup.string()
                .min(5, "Password must be 5-15 characters.")
                .max(15, "Password must be 5-15 characters.")
                .nullable(),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("newPassword"), null], "Password incorrect.")
                .required("Confirm Password is required field."),
            verificationCode: Yup.number(
                "Verification code incorrect."
            ).required("Verification code is required field."),
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
                <Typography variant='h6'>Change Password</Typography>
                <Typography>
                    For your account's security, do not share password with
                    anyone else.
                </Typography>
            </Box>
            <form onSubmit={formik.handleSubmit}>
                <FormControl fullWidth sx={{ maxWidth: "40%" }}>
                    <FormGroup>
                        <TextField
                            id='newPassword'
                            label='New password'
                            variant='outlined'
                            margin='dense'
                            color={
                                formik.errors.newPassword
                                    ? "otherColor"
                                    : "primary"
                            }
                            type='password'
                            value={formik.values.newPassword}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.newPassword && (
                            <Typography sx={{ color: "#FF0063" }}>
                                {formik.errors.newPassword}
                            </Typography>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <TextField
                            id='confirmPassword'
                            label='Confirm password'
                            variant='outlined'
                            margin='dense'
                            color={
                                formik.errors.confirmPassword
                                    ? "otherColor"
                                    : "primary"
                            }
                            type='password'
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.confirmPassword && (
                            <Typography sx={{ color: "#FF0063" }}>
                                {formik.errors.confirmPassword}
                            </Typography>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <Stack direction='row'>
                            <TextField
                                id='verificationCode'
                                label='Verification Code'
                                margin='dense'
                                color={
                                    formik.errors.verificationCode
                                        ? "otherColor"
                                        : "primary"
                                }
                                variant='outlined'
                                value={formik.values.verificationCode}
                                onChange={formik.handleChange}
                            />
                            <Button
                                variant='outlined'
                                size='small'
                                sx={{
                                    height: "56px",
                                    marginTop: "8px",
                                    backgroundColor: "#EEEEEE",
                                    textTransform: "capitalize",
                                }}
                            >
                                Send Verification Code
                            </Button>
                        </Stack>
                        {formik.errors.verificationCode && (
                            <Typography sx={{ color: "#F94C66" }}>
                                {formik.errors.verificationCode}
                            </Typography>
                        )}
                    </FormGroup>
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
                        Confirm
                    </Button>
                </FormControl>
            </form>
        </Box>
    );
};

export default Information;
