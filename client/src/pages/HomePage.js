import React, { useEffect } from "react";
import Page from "../components/Page";
import { Grid, Paper, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button, ButtonGroup, Badge, Skeleton, CircularProgress, Typography, Card, CardMedia, CardHeader, CardContent, CardActions, Avatar, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { AccountCircle, MoreVert, Person } from "@mui/icons-material";

function HomePage() {
  const CustomButton = styled(Button)({
    padding: 30
  });

  return (
    <Page title="Home" loading={false}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper>
            <Typography>Item 1</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper>
            <Typography>Item 2</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper>
            <Typography>Item 3</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper>
            <Typography>Item 4</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper>
            <Typography>Item 1</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper>
            <Typography>Item 2</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper>
            <Typography>Item 3</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper>
            <Typography>Item 4</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper>
            <Typography>Item 1</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper>
            <Typography>Item 2</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper>
            <Typography>Item 3</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper>
            <Typography>Item 4</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper>
            <Typography>Item 1</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper>
            <Typography>Item 2</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper>
            <Typography>Item 3</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper>
            <Typography>Item 4</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper>
            <Typography>Item 1</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper>
            <Typography>Item 2</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper>
            <Typography>Item 3</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper>
            <Typography>Item 4</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper>
            <Typography>Item 1</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper>
            <Typography>Item 2</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper>
            <Typography>Item 3</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper>
            <Typography>Item 4</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Page>
  );
}

export default HomePage;
