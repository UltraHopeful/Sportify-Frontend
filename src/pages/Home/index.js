import React from "react";
import {Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography} from "@mui/material";
import {ToastContainer} from "react-toastify";

function ExpandMoreIcon() {
    return null;
}

const main = () => {
    return (
        <>
            <Box className="homeback">
                <Typography variant="h2" gutterBottom color="white" component="div" style={{paddingTop: '30vh'}}>
                    Keep in good shape <br/> Be Fitness Person
                </Typography>
                <Typography variant="h4" gutterBottom color="white" component="div">
                    Lorem Ipsum is simply dummy text <br/>of the printing and typesetting industry.
                </Typography>

            </Box>
            <Grid container justifyContent="center">
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12} className="bg-dark sideBox" alignItems="center">
                    <Typography variant="h4" color="white" align="center">
                        Our Mission
                    </Typography>
                    <hr className="hr-fancy1"/>
                    <Typography variant="h6" gutterBottom color="white" align="center">
                        Lorem Ipsum is simply dummy text <br/>of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text <br/>of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text <br/>of the printing and typesetting industry.
                    </Typography>
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12} className="bg-lighter img-box">
                    <Box sx={{objectFit: 'cover'}}>
                        <img src="./mission.svg" className="img-responsive"/>
                    </Box>
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12} className="bg-lighter img-box">
                    <Box sx={{objectFit: 'contain'}}>
                        <img src="./vision.svg" className="img-responsive"/>
                    </Box>
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12} className="bg-dark sideBox" alignItems="center">
                    <Typography variant="h4" color="white" align="center">
                        Our Vision
                    </Typography>
                    <hr className="hr-fancy1"/>
                    <Typography variant="h6" gutterBottom color="white" align="center">
                        BE HAPPY. BE FIT.<br/> 
                        Our vision is to provide affordable <br/>healthy lifestyle because <br/>fitness is a way of life.
                        One stop for <br/>everyone's mental and physical well-being. <br/> Picture yourself here. <br/>There is a lot waiting for you.
                    </Typography>
                </Grid>

                <Grid container justifyContent="center" mt={4} mb={4}>
                    <Grid item xl={6}>
                        <Typography variant="h4" color="black" align="center">
                            FAQs
                        </Typography>
                        <hr className="hr-fancy1"/>
                        <div>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>What kind of workout formats are available at sportify?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Sportify provides a plethora of workout formats - Yoga, Step dance, Swimming, Boxing, Kick Boxing, HIIT and many more.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography>How many free gym trials do I get?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                     Sportify offers 2 free gym trial sessions before you decide to buy a membership to access the facilities.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon color='black'/>}
                                    aria-controls="panel3a-content"
                                    id="panel3a-header"
                                >
                                    <Typography>How do I take a free trial session at a gym?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                    You are required to visit the gym and get yourself registered for the trials. It is as simple as that.
                                    </Typography>
                                </AccordionDetails>
                                
                            </Accordion>
                        </div>
                    </Grid>
                </Grid>

                <Grid container justifyContent="center">
                    <Grid item xl={4}>

                    </Grid>
                    <Grid item xl={4}>

                    </Grid>
                    <Grid item xl={4}>

                    </Grid>
                </Grid>


                <ToastContainer/>
            </Grid>
        </>
    );
};
export default main;