import React, { useEffect } from "react";
import { Container, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Page(props) {
  const theme = useTheme();

  useEffect(() => {
    document.title = `${props.title} | App Name`;
    window.scrollTo(0, 0);
  }, [props.title]);

  function LoadingPage() {
    return (
      <Box display="flex" alignItems="center" justifyContent="center" height="60vh">
        <CircularProgress color="inherit" />
      </Box>
    );
  }
  return (
    <Container maxWidth="xl" sx={{ minHeight: "60vh", marginTop: theme.spacing(8) }}>
      {props.loading ? <LoadingPage /> : props.children}
    </Container>
  );
}

export default Page;
