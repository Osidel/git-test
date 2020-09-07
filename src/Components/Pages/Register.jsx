import React from "react"
import Axios from 'axios'
import {Link} from 'react-router-dom'


const registration = e => {
    e.preventDefault()
    const form = e.target
  
    const data ={
      "email": form.email.value,
      "name": form.name.value,
      "password": form.password.value
    }
  
    Axios.post(`https://api-edteam.alejogs4.now.sh/signup`, data)
    .then(() => alert("Usuario creado"))
    .catch(() => alert("Error al crear usuario"))
  }

const Register = () => (

    <div className="container col-md-4 col-sm-12 col-lg-4">
    <form className="form-signin" onSubmit={registration.bind()}>
      <img className="mb-4" src="https://th.bing.com/th/id/OIP.YvjohT5r7wyBeoiz9eg6zQHaHa?w=180&h=180&c=7&o=5&dpr=1.25&pid=1.7" alt="" width="172" height="172" />
      <h1 className="h3 mb-3 font-weight-normal">Create an account</h1>
      <label for="fullname" className="sr-only">Full Name</label>
      <input type="text" name="fullname" id="fullname" className="form-control" placeholder="Full Name" required autofocus />
      <label for="email" className="sr-only">Email address</label>
      <input type="email" name="email" id="email" className="form-control" placeholder="Email address" />
      <label for="password" className="sr-only">Password</label>
      <input type="password"  name="password" id="password" className="form-control" placeholder="Password" required />
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
      <p className="mt-5 mb-3 text-muted">&copy; 2020</p>
    </form> 
    <div>
    <p>You already have a user account <Link to="/login">Login</Link></p>
    </div>
    </div>
)
export default (Register)






// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import Axios from 'axios'

// const registration = e => {
//     e.preventDefault()
//     const form = e.target
  
//     const data ={
//       "email": form.email.value,
//       "name": form.name.value,
//       "password": form.password.value
//     }
  
//     Axios.post(`${process.env.REACT_APP_API_USER}/signup`, data)
//     .then(() => alert("Usuario creado"))
//     .catch(() => alert("Error al crear usuario"))
//   }




// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }



// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function Register() {
//   const classes = useStyles();

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign up
//         </Typography>
//         <form className={classes.form} noValidate onSubmit={registration.bind()}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 autoComplete="name"
//                 name="name"
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="name"
//                 label="First Name"
//                 autoFocus
//               />
//             </Grid>            
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <FormControlLabel
//                 control={<Checkbox value="allowExtraEmails" color="primary" />}
//                 label="I want to receive inspiration, marketing promotions and updates via email."
//               />
//             </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Sign Up
//           </Button>
//           <Grid container justify="flex-end">
//             <Grid item>
//               <Link href="#" variant="body2">
//                 Already have an account? Sign in
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//       <Box mt={5}>
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }