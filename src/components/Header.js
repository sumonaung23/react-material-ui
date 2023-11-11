import React from 'react'
import { AppBar, Toolbar, Grid, InputBase, Badge, IconButton } from '@mui/material'
import { makeStyles } from '@mui/styles'

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles ({
    root: {
        backgroundColor: '#fff'
    },
    searchInput: {
        opacity: '0.6',
        padding: '0px 8px',
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: '8px'
        }
    }
})

const Header = () => {
    const classes  = useStyles();

    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <Grid container alignItems='center'>
                    <Grid item>
                        <InputBase placeholder='Search topics'
                        className={classes.searchInput} startAdornment={<SearchIcon fontSize='small' />} />
                    </Grid>

                    <Grid item sm></Grid>

                    <Grid item>
                        <IconButton>
                        <Badge badgeContent={4} color='secondary'>
                            <NotificationsNoneIcon fontSize='small' />
                        </Badge>
                        </IconButton>

                        <IconButton>
                            <Badge badgeContent={3} color='primary'>
                                <ChatBubbleOutlineIcon fontSize='small' />
                            </Badge>
                        </IconButton>

                        <IconButton>
                            <Badge>
                                <PowerSettingsNewIcon fontSize='small' />
                            </Badge>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header