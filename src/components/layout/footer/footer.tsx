import { Box, Container, Grid, styled, Typography } from "@mui/material";

const StyledBox = styled(Box)({
  width: "100%",
  height: "auto",
  backgroundColor: "mediumpurple",
  paddingTop: "1rem",
  paddingBottom: "1rem",
})

export const Footer = () => {
  return (
    <StyledBox>
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              Dummy Footer
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | React Router`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </StyledBox>
  );
};