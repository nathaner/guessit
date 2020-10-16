import React from "react";
import Layout from "./Layout";
import PageHeading from "./common/PageHeading";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function ForgotPassword() {
    return (
        <Layout>
            <Container component="main" maxWidth="xs">
                <div>
                    <PageHeading>Forgot password</PageHeading>
                    <form noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Reset
                        </Button>
                    </form>
                </div>
            </Container>
        </Layout>
    );
}
