import { Email, GitHub, LinkedIn, TravelExplore } from '@mui/icons-material'
import { AppBar, Avatar, Box, Icon, IconButton, Link, Toolbar, Tooltip, Typography } from '@mui/material'
import React from 'react'

const MyNavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar disableGutters sx={{ mx: 2 }}>
        <Icon sx={{ mx: 2 }}>
          <TravelExplore />
        </Icon>
        <Typography
          variant='h6'
          color='inherit'
          fontFamily='monospace'
          href='/'
          fontWeight='700'>
          INFO
        </Typography>
        <Typography
          variant='h6'
          color='navy'
          fontFamily='monospace'
          href='/'
          fontWeight='700'>
          WORLD
        </Typography>

        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <Tooltip title={
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: "stretch" }}>
              <Typography varient='h3' color='inherit' align='center'>Priyanshu <br />Vishwakarma</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <Link href='https://linkedin.com/in/anotherlazyguy' target='_blank' underline='none' color='inherit'>
                  <Icon>
                    <LinkedIn />
                  </Icon>
                </Link>
                <Link href='https://github.com/MePriyanshuHoo' target='_blank' underline='none' color='inherit'>
                  <Icon>
                    <GitHub />
                  </Icon>
                </Link>
                <Link href='mailto:MePriyanshuHoo@gmail.com' target='_blank' underline='none' color='inherit'>
                  <Icon>
                    <Email />
                  </Icon>
                </Link>
              </Box>
            </Box>
          } placement='bottom'>
            <IconButton sx={{ p: 0 }}>
              <Avatar alt='Priyanshu Vishwakarma' src='https://avatars.githubusercontent.com/u/78170087?v=4' />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default MyNavBar