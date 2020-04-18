import React, { useState, useEffect } from "react";
import {
  Paper,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Container,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {},
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: theme.spacing(8),
    margin: "20% 0",
  },
}));

export default () => {
  const classes = useStyles();
  const [{ username, password }, setState] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    e.persist();
    setState({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Username is ", username);
    console.log("Password is ", password);
    if (!username || !password) {
      console.log("Make sure that both values are present!!!!");
    }
  };

  useEffect(() => {
    setState({
      username: "",
      password: "",
    });
  }, []);

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Paper className={classes.padding}>
        <div className={classes.margin}>
          <Typography variant="h4">Login</Typography>
          <br />
          <br />
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="username"
                label="Username"
                type="text"
                name="username"
                fullWidth
                autoFocus
                required
                value={username}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="password"
                name="password"
                label="Password"
                type="password"
                fullWidth
                required
                value={password}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Remember me"
              />
            </Grid>
            <Grid item>
              <Button
                disableFocusRipple
                disableRipple
                style={{ textTransform: "none" }}
                variant="text"
                color="primary"
              >
                Forgot password ?
              </Button>
            </Grid>
          </Grid>
          <Grid container justify="center" style={{ marginTop: "20px" }}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ textTransform: "none" }}
              onClick={handleSubmit}
            >
              Login
            </Button>
          </Grid>
        </div>
      </Paper>
    </Container>
  );
};
