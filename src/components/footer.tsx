import { Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "2.5rem",
      }}
    >
      <Grid container mt={4} pb={2}>
        <Grid item xs={12}>
          <Typography
            variant="caption"
            textAlign="center"
            width="100%"
            display="block"
          >
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
