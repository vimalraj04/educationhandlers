import React, { useState } from 'react'
import './Allcourses.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import course1 from '../Images/course1.jpg'
import Navbar from '../NavigationBar/Navbardefault';
import eduback from '../Images/edu-back.jpg'
import course2 from '../Images/course2.png'
import course3 from '../Images/course3.png'
import course4 from '../Images/course4.jpg'
import PaymentPage from '../Payment-Page/Payment';
import { useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const AllCourses = () => {

  const navi = useNavigate();
  const navipay = () => {
    navi("/Payment")
  }

  const handlealert = () => {
    alert("Your course has been enrolled!!!");
  }

  return (
    <div className='body'>
        <>
        <Navbar/>
            <div>
              <h1>Explore Courses</h1>
            </div>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <Item>
                    <Card sx={{ maxWidth: 10000 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="200"
                          image={course1}
                          alt="course-1"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Front-End Development: (Google)
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                          This course teaches essential skills in building user interfaces for websites and applications using HTML, CSS, and JavaScript, enabling students to create engaging and interactive web experiences.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button onClick={handlealert} size="small" color="primary">
                          Enroll for Free
                        </Button>
                        <Button size="small" color="primary">
                          Duration - 3 Months
                        </Button>
                      </CardActions>
                    </Card>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <Card sx={{ maxWidth: 10000 }}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="200"
                            image={course2}
                            alt="course-2"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              Machine Learning and Deep Learning with Python: (IBM)
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Python-based course covering machine learning and deep learning concepts, methodologies, and practical implementation for creating advanced AI models and applications.                          </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button onClick={navipay}  size="small" color="primary">
                            Enroll for $14.00
                          </Button>
                          <Button size="small" color="primary">
                            Duaration - 4 Months
                          </Button>
                        </CardActions>
                      </Card>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                      <Card sx={{ maxWidth: 10000 }}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="200"
                            image={course3}
                            alt="course-3"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              Project Management: (Google)
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Meta's Social Media Marketing course teaches strategies and tools for leveraging platforms like Facebook, Instagram, and WhatsApp to enhance brand visibility and engagement, focusing on audience targeting and data-driven analytics.                             </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button onClick={navipay}  size="small" color="primary">
                            Enroll for $30.00
                          </Button>
                          <Button size="small" color="primary">
                            Duration - 5 Months
                          </Button>
                          
                        </CardActions>
                      </Card>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                  <Card sx={{ maxWidth: 10000 }}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="200"
                            image={course4}
                            alt="course-4"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              Social Media Marketing: (Meta)
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Google's Project Management course provides comprehensive training in project planning, execution, and oversight, leveraging Google's expertise and real-world examples for effective project management.                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button onClick={navipay} size="small" color="primary">
                            Enroll for $10.00
                          </Button>
                          <Button size="small" color="primary">
                            Duration - 3 Months
                          </Button>
                        </CardActions>
                      </Card>
                  </Item>
                </Grid>
              </Grid>
            </Box>
        </>
    </div>
  )
}

export default AllCourses;