import { Backdrop, CircularProgress, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import images from 'config/images'
import { ReducerType } from 'store'

import { LoginType, RegisterType } from '../types'

import LandingPage from './LandingPage'
import Login from './Login'
import Register from './Register'
import useStyles from './styles'

const mapStateToProps = (state: ReducerType) => ({
  loginData: state.authentication.loginData,
  isLoading: state.global.isLoading,
  registerData: state.authentication.registerData,
})

interface AuthProps {
  loginData: LoginType
  isLoading: boolean
  registerData: RegisterType
}

const AuthenticationContainer = (props: AuthProps) => {
  const { loginData, isLoading, registerData } = props
  const [isLoginPage, setIsLoginPage] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem('id')))
  const navigate = useNavigate()
  const classes = useStyles()

  const setLogin = () => {
    setIsLoginPage(!isLoginPage)
  }

  useEffect(() => {
    if (loginData.id || registerData.id.length !== 0) {
      setIsLoggedIn(Boolean(setIsLoggedIn))
    } else {
      setIsLoggedIn(Boolean(localStorage.getItem('id')))
    }
  }, [loginData, registerData])

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/home')
    }
  }, [navigate, isLoggedIn])

  return (
    <Grid container classes={{ root: classes.root }}>
      <Grid container item xs={6} classes={{ root: classes.rootApp }}>
        <Grid container classes={{ root: classes.rootAppNameContainer }}>
          <img src={images.AppIcon} alt={images.AppIcon} />
          <Typography classes={{ root: classes.rootAppName }}>GBLT</Typography>
        </Grid>
        <Grid xs={12}>
          <Typography classes={{ root: classes.slogan }}>
            Join the
            <span className={classes.rootFun}> fun.</span>
          </Typography>
        </Grid>
        <img src={images.GameIcon} alt={images.GameIcon} style={{
          objectFit: 'cover',
          opacity: 0.7,
          transform: 'rotate(30deg)',
          margin: '0 0 20% 0'
        }} />
      </Grid>
      <Grid container item xs={6} alignItems="center" justifyContent="center">
        {isLoginPage ? <Login setLogin={setLogin} /> : <Register setLogin={setLogin} />}
      </Grid>
      <LandingPage />
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress style={{ color: '#E9781C' }} />
      </Backdrop>
    </Grid>
  )
}

export default connect(mapStateToProps)(AuthenticationContainer)