// material
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Card, Box, Grid } from '@material-ui/core';
import React, { useState } from 'react'
//
import { motion } from 'framer-motion';
import { varFadeInDown } from '../../animate';
import { 
  Modal,
  Button,
  Backdrop,
  Fade 
} from '@material-ui/core';
const RootStyle = styled('div')(() => ({
  position: 'relative',
  marginBottom: 64,
  paddingTop: 24,
  paddingBottom: 24,
  display: 'flex',
  alignItems: 'center'
}));

const cover = '/static/background/wavy-one.png';
const SERVICE_CORE = [
  {
    id: 0,
    title: 'Deropa Park',
    description:'Quezon City',
    image: '/static/court1.jpg',
    rate: '1000'
  },
  {
    id: 1,
    title: 'Mendoza Village',
    description:'Manila City',
    image: '/static/court2.jpg',
    rate: '2000'
  },
  {
    id: 2,
    title: 'Villilia Park - Basketball',
    description:'Tagaytay City',
    image: '/static/court3.jpg',
    rate: '3000'
  },
  {
    id: 3,
    title: 'Villilia Park - Badminton',
    description:'Caloocan City',
    image: '/static/court5.jpg',
    rate: '4000'
  },
  {
    id: 4,
    title: 'St. Dominic 9 Park',
    description:'Eastwood Libis City',
    image: '/static/court4.jpg',
    rate: '5000'
  },
  {
    id: 5,
    title: 'Asamba Park',
    description:'Cubao City',
    image: '/static/court6.jpg',
    rate: '6000'
  },
  {
    id: 6,
    title: 'Malaria Court',
    description:'Pasay City',
    image: '/static/court8.jpg',
    rate: '7000'
  },
  {
    id: 7,
    title: 'T.E Village Court',
    description:'Payatas Village',
    image: '/static/court9.jpg',
    rate: '8000'
  }

];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ServicesCore() {
  const [openRent, setOpenRent] = useState(false)
  const [court, setCourt] = useState({})
  const handleClickRent = (value) => {
    console.log(value)
    setCourt({courtId: value.id, courtImage: value.image, courtTitle: value.title, courtDesc: value.description, courtRate: value.rate})
    setOpenRent(true)
  }
  const handleCloseRent = () => {
    setOpenRent(false)
  }
  return (
    <RootStyle
      sx={{
        backgroundImage: `url(${cover})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#FFFFFF'
      }}
    >
      <Container maxWidth="lg">
        <Grid container sx={{ width: '100%' }}>
          {SERVICE_CORE &&
            SERVICE_CORE.map((value, index) => (
              <Grid item xs={12} md={6} key={index} sx={{ p: 2}}>
                <motion.div variants={varFadeInDown} key={index}>
                  <Card
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: { xs: "100%", md: "100%" },
                      p: { xs: 4, md: 0 }
                    }}
                  >
                    <Box key={index} sx={{ textAlign: 'center' }}>
                      <Box
                        component="img"
                        src={value.image}
                        sx={{ width: "100%", height: "408px", objectFit: 'contain', margin: '24px auto' }}
                        onClick={() => handleClickRent(value)}
                      />
                      <Typography variant="h4" color="common.black" component="h3" sx={{ my: 2 }}>
                        {value.title}
                      </Typography>
                      <Typography
                        variant="h6"
                        color="common.black"
                        component="p"
                        sx={{ fontWeight: '400', width: { xs: '100%', md: '100%' }, margin: 'auto' }}
                      >
                        {value.description}
                      </Typography>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
        </Grid>
        <Modal
          aria-labelledby="spring-modal-title"
          aria-describedby="spring-modal-description"
          open={openRent}
          onClose={handleCloseRent}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openRent}>
            <Box sx={style}>
              <Card
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: { xs: "100%", md: "100%" }
                }}
              >
                <Box key={court.id} sx={{ textAlign: 'center' }}>
                  <Typography variant="h5" color="common.black" component="h3" sx={{ my: 2 }}>
                    {court.courtTitle} is located at {court.courtDesc}. Starting rate is {court.courtRate} Pesos per hour. Other rates to consider:
                  </Typography>
                  <Typography
                    variant="h6"
                    color="common.black"
                    component="p"
                    sx={{ fontWeight: '400', width: { xs: '100%', md: '100%' }, margin: 'auto' }}
                  >
                    Airconditioned Rates: 6,000 Pesos Per Hour
                    Scoreboard: 112 Pesos Per Game
                    Operating Hours: Daily 8:00pm-10:00pm
                    Covered: Yes
                    Flooring (Wood?): Yes
                    Parking Information: Free (First come first serve)
                  </Typography>
                  <Button variant="contained" color="success" sx={{ mt: 2, px: 17, mb: 2 }}>
                    Rent
                  </Button>
                </Box>
              </Card>

            </Box>
          </Fade>
        </Modal>
      </Container>
    </RootStyle>
  );
}
