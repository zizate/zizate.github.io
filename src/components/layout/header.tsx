import React, { useState } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { AppBar, Toolbar, Typography, Link, Button, Tooltip } from '@material-ui/core';
import { Theme, makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { BsToggleOn, BsToggleOff } from 'react-icons/bs';
// import logo from '../../images/android-chrome-192x192.png';
import { FC } from '../../util';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: '48px',
        boxShadow:'0px 2px 4px -1px rgb(0 0 0 / 12%), 0px 1px 1px 0px rgb(0 0 0 / 4%), 0px 1px 10px 0px rgb(0 0 0 / 8%)'
        
    },
    title: {
        flexGrow: 1
    },
    link: {
        textDecorationLine: 'none',
        "&:hover":{
            textDecorationLine: 'none',
        }
    }
}));

export interface HeaderProps {
    switchTheme: () => void;
    siteTitle?: string;
}

const Header: FC<HeaderProps> = (props) => {
    const [showOn, setShowOn] = useState<boolean>(false);
    const styles = useStyles();

    const onSwitch = (): void => {
        setShowOn((prev) => !prev);
        props.switchTheme();
    };
    console.log('styles : ', styles)

    return (
        <AppBar component="header" position="static" className={styles.root}>
            <Toolbar>
                <Typography variant="h6" className={styles.title}>
                    <Link to="/" component={GatsbyLink} color="inherit" className={styles.link}>
                    {/* <img src={logo} width="40" height="40" /> */}
                        {props.siteTitle || ''}
                    </Link>
                </Typography>
                <Tooltip title="switch theme">
                    <Switch onChange={onSwitch} checked={showOn} color="primary"/>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
