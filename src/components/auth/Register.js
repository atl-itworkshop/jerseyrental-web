import React, { useState, useContext, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";
import { InputGroup, FormControl, Row, Col } from "react-bootstrap";

const Register = props => {
   const alertContext = useContext(AlertContext);
   const authContext = useContext(AuthContext);

   const { setAlert } = alertContext;
   const { register, error, clearErrors, isAuthenticated } = authContext;

   useEffect(() => {
      if (isAuthenticated) {
         props.history.push("/");
      }

      if (error === "User already exists...") {
         setAlert(error, "danger");
         clearErrors();
      }

      // eslint-disable-next-line
   }, [error, isAuthenticated, props.history]);

   const [user, setUser] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      password2: ""
   });

   const { firstName, lastName, email, password, password2 } = user;

   const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

   const onSubmit = e => {
      e.preventDefault();

      if (
         firstName === "" ||
         lastName === "" ||
         email === "" ||
         password === ""
      ) {
         setAlert("Please enter all fields", "danger");
      } else if (password !== password2) {
         setAlert("Passwords do not match", "danger");
      } else {
         register({
            firstName,
            lastName,
            email,
            password
         });
      }
   };

   const useStyles = makeStyles(theme => ({
      "@global": {
         body: {
            backgroundColor: theme.palette.common.white
         }
      },
      paper: {
         marginTop: theme.spacing(8),
         display: "flex",
         flexDirection: "column",
         alignItems: "center"
      },
      avatar: {
         margin: theme.spacing(1),
         backgroundColor: theme.palette.secondary.main
      },
      form: {
         width: "100%", // Fix IE 11 issue.
         marginTop: theme.spacing(3)
      },
      submit: {
         margin: theme.spacing(3, 0, 2)
      }
   }));

   const classes = useStyles();

   return (
      <Container component="main" maxWidth="xs">
         <CssBaseline />
         <div className={classes.paper}>
            <Avatar className={classes.avatar}>
               <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
               Sign up
            </Typography>
            <form className={classes.form} noValidate onSubmit={onSubmit}>
               <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                     <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        onChange={onChange}
                     />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lname"
                        onChange={onChange}
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={onChange}
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={onChange}
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password2"
                        label="Confirm Password"
                        type="password"
                        id="password2"
                        autoComplete="current-password"
                        onChange={onChange}
                     />
                  </Grid>
               </Grid>
               <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
               >
                  Register
               </Button>
               <Grid container justify="flex-end">
                  <Grid item>
                     <Link href="#" variant="body2">
                        Already have an account? Sign in
                     </Link>
                  </Grid>
               </Grid>
            </form>
         </div>
      </Container>
   );
};

export default Register;
