import React from "react";
import {Button, TextField, styled} from "@mui/material";

const ValidationTextField = styled(TextField)({
    marginBottom: "15px",
    width: "90%"
});

// cite : https://dev.to/finallynero/react-form-using-formik-material-ui-and-yup-2e8h
// I used some of the code from article, but I change as per my preferences

export const LoginForm = props => {

    const {
        values: {email, password},
        errors,
        handleSubmit,
        handleChange,
        isValid
    } = props;

    return (
        <form onSubmit={handleSubmit}>
            <ValidationTextField
                name="email"
                helperText={errors.email ? errors.email : " "}
                error={Boolean(errors.email)}
                label="Email*"
                type="email"
                value={email}
                variant="outlined"
                onChange={handleChange}
            />

            <ValidationTextField
                name="password"
                helperText={errors.password ? errors.password : " "}
                error={Boolean(errors.password)}
                label="Password*"
                type="password"
                value={password}
                variant="outlined"
                onChange={handleChange}
            />

            <Button
                type="submit"
                variant="contained"
                color="error"
                size="large"
                disabled={!isValid}
            >
                Submit
            </Button>
        </form>

    );
};
