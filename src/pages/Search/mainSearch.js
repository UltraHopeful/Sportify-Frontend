import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function MainSearch() {
  return (
    <main>
      <Box
        sx={{
          bgcolor: "black",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h5"
            align="center"
            color="#326DD9"
            fontWeight={"bold"}
            gutterBottom
          >
            SELECT WHAT YOU WANT TO SEARCH!
          </Typography>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={12} lg={6} md={6}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                image="/merchandise.svg"
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  fontWeight={"bold"}
                  color="#326DD9"
                >
                  Store
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  size="medium"
                  href="/merchandiseSearch"
                >
                  Search here
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} lg={6} md={6}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia component="img" image="/facility.svg" alt="random" />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  fontWeight={"bold"}
                  color="#326DD9"
                >
                  Facility
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  size="medium"
                  href="/facilitySearch"
                >
                  Search here
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} lg={6} md={6}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia component="img" image="/event.svg" alt="random" />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  fontWeight={"bold"}
                  color="#326DD9"
                >
                  Event
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" size="medium" href="/eventSearch">
                  Search here
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} lg={6} md={6}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                image="/blogging.svg"
                alt="random"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  fontWeight={"bold"}
                  color="#326DD9"
                >
                  Blogs
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" size="medium" href="/blogSearch">
                  Search here
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
