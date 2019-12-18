import React from 'react'

import Avatar from '@material-ui/core/Avatar'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  }
}))

export default function UserAvatar() {
  const classes = useStyles()

  return (
    <Avatar className={classes.avatar}>
      <LockOutlinedIcon />
    </Avatar>
  )
}