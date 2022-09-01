import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";
import { Alert } from "@mui/material";

function Copyright(props) {
  return (
    <Typography variant="body2" color="dark" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Register() {
  const { register, error, setError } = useAuth();

  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");

  function handleSave() {
    if (!username.trim() || !password.trim() || !passwordConfirm.trim()) {
      alert("Заполните поля!");
      return;
    }

    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("password_confirm", passwordConfirm);
    register(formData);
  }

  console.log(username, password, passwordConfirm);
  React.useEffect(() => {
    setError(false);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        {error ? <Alert severity="error">{error}</Alert> : null}
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            SING UP
          </Typography>
          <Box
            component="form"
            // onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              // required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setUserName(e.target.value)}
              value={username}
            />
            <TextField
              margin="normal"
              // required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <TextField
              margin="normal"
              // required
              fullWidth
              name="password"
              label="Confirm Password"
              type="password"
              id="password-confirm"
              autoComplete="current-password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              //   type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSave}
            >
              Register
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                {/* <Link href="#" variant="body2"> */}
                <RouterLink to="/login">
                  <Typography>{"Don't have an account? Sign Up"}</Typography>
                </RouterLink>
                {/* </Link> */}
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
