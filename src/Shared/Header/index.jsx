import React from 'react'

import {
  Typography,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import UserAvatar from '../../components/UserAvatar'

import StyledHeader from './styled/StyledHeader'
import StyledLogOut from './styled/StyledLogOut'

const useStyles = makeStyles(() => ({
  white: {
    color: "#fff",
  }
}))

function Header({
  pageTitle = "Dashboard",
}) {
  const classes = useStyles()
  return (
    <StyledHeader>
      <Typography
        variant="h4"
        component="h2"
        className={classes.white}
      >
        {pageTitle}
      </Typography>
      <StyledLogOut>
        <UserAvatar />
        <Typography
          variant="subtitle2"
          component="p"
          className={classes.white}
        >
          LogOut
        </Typography>
      </StyledLogOut>
    </StyledHeader>
  )
}

export default Header
