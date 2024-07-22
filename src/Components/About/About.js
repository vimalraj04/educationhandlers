import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, colors } from '@mui/material';
import img1 from '../Images/p.jpg'
import '../About/About.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Rate from './Rate';
import Navbar from '../NavigationBar/Navbardefault';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
export default function About() {
  return (
    <>
    <Navbar/>
    <div className="about-page">
    <h1>About</h1>
    <fieldset>

    <p>
      Welcome! We are dedicated to providing quality education and fostering
      a learning environment that empowers students to excel in their academic journey.
    </p>
    </fieldset>
    <br></br>
    <fieldset>
    <h2>Our Mission</h2>
    <p>
      Our mission is to inspire and educate students, equipping them with the knowledge and skills
      needed to succeed in their chosen fields and contribute to society.
    </p>
    </fieldset>
    <br></br>
    <fieldset>
    <h2>Core Values</h2>
    <ul>
      <li>Excellence: Striving for academic and personal excellence.</li>
      <li>Integrity: Upholding honesty and integrity in all aspects of education.</li>
      <li>Inclusivity: Creating a diverse and inclusive learning community.</li>
      <li>Innovation: Fostering creativity and innovation in education.</li>
    </ul>
   <br></br>
    </fieldset>


<h1>The Dream Team Of Education Handlers</h1>
<br></br>

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid item xs>
          <Item><Card sx={{ maxWidth: 455 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image= {img1}
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sree Govind 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            CEO of EH
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Item>
        </Grid>

        
        <Grid item xs={4}>
          <Item><Card sx={{ maxWidth: 455 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image= {img1}
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sridharan
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Instructor of EH
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
</Item>
        </Grid>
        <Grid item xs>
          <Item>
            <Card sx={{ maxWidth: 455 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="255"
          image= {img1}
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Vimal Raj
          </Typography>
          <Typography variant="body2" color="text.secondary">
             Branch Manager of EH
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
</Item>
        </Grid>
      </Grid>
    </Box>
<br></br>



<Rate/>

    
    
          </div>
    </>
    
  );
}