import React from "react"
import Axios from 'axios'

const authentication = e => {
    e.preventDefault()
    const form = e.target 
    const data = {
      "email": form.email.value,
      "password": form.password.value
    }
  
    Axios.post(`https://api-edteam.alejogs4.now.sh/login`, data)
    .then(r => {
      localStorage.setItem('token', r.data.token)
      window.location = "/"
    })
    .catch(e => {
      alert('error al iniciar sesion')
    } )
  
  }

const Login = () => (

    <div className="container col-md-4 col-sm-12 col-lg-4">
    <form className="form-signin" onSubmit={authentication.bind()}>
      <img className="mb-4" src="https://th.bing.com/th/id/OIP.YvjohT5r7wyBeoiz9eg6zQHaHa?w=180&h=180&c=7&o=5&dpr=1.25&pid=1.7" alt="" width="172" height="172" />
      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="email" className="sr-only">Email address</label>
      <input type="email" id="email" className="form-control" placeholder="osi@gmail.com" required autofocus />
     <h5>osi@gmail.com</h5>
      <label for="password" className="sr-only">Password</label>
      <input type="password" id="password" className="form-control" placeholder="secreta" required />
      <h5>secreta</h5>
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p className="mt-5 mb-3 text-muted">&copy; 2020</p>
    </form> 
    </div>
)
export default (Login)



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

// const authentication = e => {
//     e.preventDefault()
//     const form = e.target 
//     const data = {
//       "email": form.email.value,
//       "password": form.password.value
//     }
  
//     Axios.post(`https://api-edteam.alejogs4.now.sh/login`, data)
//     .then(r => {
//       localStorage.setItem('token', r.data.token)
//       window.location = "/"
//     })
//     .catch(e => {
//       alert('error al iniciar sesion')
//     } )
  
//   }

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         OSIDEL
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
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function Login() {
//   const classes = useStyles();

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign in
//         </Typography>
//         <form className={classes.form} noValidate  onSubmit={authentication.bind()}>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//           />
//           <FormControlLabel
//             control={<Checkbox value="remember" color="primary" />}
//             label="Remember me"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Sign In
//           </Button>
//           <Grid container>
//             <Grid item xs>
//               <Link href="#" variant="body2">
//                 Forgot password?
//               </Link>
//             </Grid>
//             <Grid item>
//               <Link href="#" variant="body2">
//                 {"Don't have an account? Sign Up"}
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//       <Box mt={8}>
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }