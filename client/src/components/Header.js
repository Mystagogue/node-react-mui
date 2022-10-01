import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { makeStyles, useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { AccountCircle, AccountCircleOutlined, Cancel } from "@mui/icons-material";

import StateContext from "../StateContext";
import DispatchContext from "../DispatchContext";

// const useStyles = makeStyles( theme => {

// })

function Header(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const [openModal, setOpenModal] = useState(false);

  const handleLogin = () => {
    setOpenModal(true);
    appDispatch({ type: "login" });
  };

  const handleCancel = () => {
    setOpenModal(false);
  };

  const handleLogout = () => {
    appDispatch({ type: "logout" });
  };

  function LoggedInButtons(props) {
    return (
      <IconButton onClick={handleLogout} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <AccountCircle fontSize="large" color="inherit" />
      </IconButton>
    );
  }

  function LoggedOutButtons(props) {
    return (
      <Button onClick={handleLogin} color="customRed" variant="outlined" startIcon={<AccountCircleOutlined color="customRed" />}>
        Log in
      </Button>
    );
  }

  return (
    <>
      <AppBar position="sticky" sx={{}} color="transGrey" enableColorOnDark={true}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Header
          </Typography>
          {appState.loggedIn ? <LoggedInButtons /> : <LoggedOutButtons />}
        </Toolbar>
      </AppBar>
      <Modal open={openModal} color="customRed">
        <Grid container direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: "100vh" }}>
          <Grid item>
            <Paper sx={{ maxWidth: "400px" }}>
              <Button variant="outlined" startIcon={<Cancel />} color="customRed" onClick={handleCancel}>
                Cancel
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
}

export default Header;
