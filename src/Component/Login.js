import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useNavigate } from 'react-router-dom'
import API_URL from '../Api/Api'
import axios from 'axios'


export default function SignIn() {
  const navigate = useNavigate()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const request = {
    email,
    password
  }

  const handleSubmit = async(event) => {
    event.preventDefault()
    try {
      if (email === '' || password === '') {
        alert('please fill all the fields')
       } else {
         await axios.post(API_URL, request)
         setEmail('')
         setPassword('')
         alert('Login Successfully')
         navigate('/calendar')
       }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address/Name"
              value={email}
              onChange  = {(event) => setEmail(event.target.value)}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={password}
              onChange  = {(event) => setPassword(event.target.value)}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  )
}