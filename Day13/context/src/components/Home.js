import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import ThemeContext from "../context/themeContext";
import "./Home.css";

const Home = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className="home" style={theme.body}>
      <Box padding="20px">
        <Card sx={{ maxWidth: 345 }} style={theme.body}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={theme.text}>
              Cute Puppy
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This puppy is cute. Kawaii dog. <br />
              Tea cup puppyyyyy !!
            </Typography>
          </CardContent>
          <CardActions>
            <Button style={theme.button} variant="contained" size="small">Share</Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
};

export default Home;
