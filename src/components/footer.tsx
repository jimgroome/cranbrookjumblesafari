import { Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        textAlign: "center",
        paddingBottom: "0.5rem",
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="caption">
            Proceeds from sales of pitches/maps go to Woodpeckers Preschool.
            Registered Charity No: 1182859. Site by{" "}
            <a href="https://jimgroo.me" target="_blank">
              Jim Groome
            </a>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
export { Footer };
