import {
  TextField,
  InputAdornment,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BlogSearch() {
  const [data, setData] = useState([]);
  const [searched, setSearched] = useState([]);

  useEffect(() => {
    getFacilities();
  }, []);

  async function getFacilities() {
    const res = await axios.get(
      "https://sportify-backend-prd.herokuapp.com/search/blogs/"
    );
    setData(res.data.data);
    setSearched(res.data.data);
  }

  const filter = (e) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      const results = data.filter((facility) => {
        return facility.title.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setSearched(results);
    } else {
      setSearched(data);
    }
  };

  return (
    <Container maxWidth="xl">
      <TextField
        placeholder="Search"
        type="search"
        variant="filled"
        color="success"
        fullWidth
        size="normal"
        onChange={filter}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      {searched.length > 0 && searched ? (
        <Container sx={{ py: 8 }}>
          <Grid container component="main" alignItems="stretch" spacing={3}>
            {searched.map((facility) => {
              return (
                <Grid item xs={12} md={4} lg={4}>
                  <Card
                    key={`${facility.id}`}
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="img"
                      className={facility.blogImage}
                      image={`${facility.blogImage}`}
                      alt="new"
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
                        {`${facility.blogTitle}`}
                      </Typography>
                      <Typography>
                        Short Content: {`${facility.shortContent}`}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        size="medium"
                        href={"../api/blogs/blog" + facility.id}
                      >
                        Click Here to View
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      ) : (
        <h1> No results</h1>
      )}
    </Container>
  );
}
