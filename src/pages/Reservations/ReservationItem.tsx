import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const primaryThemeColor: string = '#326DD9';

const ReservationItem = (props: any) => {
    let navigate = useNavigate();
    return (
        <Card sx={{
            display: 'flex',
            width: '100%',
            height: '80px',
            mt: '30px'
        }}>
            <CardMedia
                component="img"
                sx={{ 
                    width: '20%',
                    py: '4px', 
                    height: 'auto', 
                    objectFit: 'contain',
                    display: {xs: "block", md: 'flex'} 
                }}
                image={props.reservationDetails.equipmentImg}
                alt="Equipment image"
            />
            <Box sx={{
                display: {xs: 'flex', md: 'flex'},
                flexGrow: 0.5,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <CardContent sx={{
                    flex: '1 0 auto',
                    textAlign: 'center'
                }}>
                    <Typography component='span'>
                        <Typography sx={{
                            mr: '2%',
                            fontSize: 15,
                            fontWeight: 'bold',
                            display: {
                                md: 'inline',
                                sm: 'none',
                                xs: 'none'
                            }
                        }}>
                            Reference ID:
                        </Typography>
                        <Typography sx={{
                            mr: '2%',
                            fontSize: 15,
                            fontWeight: 'bold',
                            display: {
                                md: 'none',
                                sm: 'inline',
                                xs: 'none'
                            }
                        }}>
                            Ref ID:
                        </Typography>
                        <Typography sx={{
                            mr: '2%',
                            fontSize: 15,
                            fontWeight: 'bold',
                            display: {
                                md: 'none',
                                sm: 'none',
                                xs: 'inline'
                            }
                        }}>
                            Ref:
                        </Typography>
                        <Typography sx={{
                            display: 'inline',
                            fontSize: 13
                        }}>
                            {props.reservationDetails.id}
                        </Typography>
                    </Typography>
                </CardContent>
            </Box>
            <Box sx={{
                display: {xs: "none", md: "flex", sm: "flex"},
                flexGrow: 0.5,
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <CardContent sx={{
                    flex: '1 0 auto',
                    textAlign: 'left',
                }}>
                    <Typography sx = {{
                        display: 'flex'
                    }} component='div'>
                        <Typography sx={{
                            mr: '10px',
                            fontSize: 15,
                            fontWeight: 'bold',
                            width: '15%',
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }} component='span'>
                            From:
                        </Typography>
                        <Typography sx={{
                            mt: '2px',
                            fontSize: 13
                        }} component='span'>
                            {props.reservationDetails.reservationFrom}
                        </Typography>
                    </Typography>
                    <Typography sx = {{
                        display: 'flex'
                    }} component='div'>
                        <Typography sx={{
                            mr: '10px',
                            fontSize: 15,
                            fontWeight: 'bold',
                            width: '15%',
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }} component='span'>
                            To:
                        </Typography>
                        <Typography sx={{
                            fontSize: 13, 
                            mt: '2px'
                        }} component='span'>
                            {props.reservationDetails.reservationTo}
                        </Typography>
                    </Typography>
                </CardContent>
            </Box>
            <Box sx={{
                display: {xs: "flex", md: "none", sm: 'none'},
                flexGrow: 0.5,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <CardContent sx={{
                    flex: '1 0 auto',
                    textAlign: 'left',
                }}>
                    <Typography sx = {{
                        display: 'flex'
                    }} component='div'>
                        <Typography sx={{
                            mr: '10px',
                            fontSize: 15,
                            fontWeight: 'bold',
                            width: '15%',
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }} component='span'>
                            Date:
                        </Typography>
                        <Typography sx={{
                            fontSize: 13,
                            mt: '2px'
                        }} component='span'>
                            {props.reservationDetails.reservedDate}
                        </Typography>
                    </Typography>
                </CardContent>
            </Box>
            <CardActions sx={{
                display: {xs: 'none', md: 'flex'},
                justifyContent: 'center'
            }}>
                <Button sx={{
                    color: primaryThemeColor
                }} onClick={() => navigate("/resources/" + props.reservationDetails.id)}
                > View Details</Button>
            </CardActions>
            <CardActions sx={{
                display: {xs: 'inline', md: 'none'},
                my: 'auto'
            }}>
                <Button sx={{
                    color: primaryThemeColor
                }}
                onClick={() => navigate("/resources/" + props.reservationDetails.id)}>
                    Details
                </Button>
            </CardActions>
        </Card>
    );
}

export default ReservationItem;