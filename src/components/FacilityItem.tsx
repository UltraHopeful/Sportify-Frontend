import { Button, Card, CardActions, CardHeader, CardMedia, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FacilitiesInterface } from "../data/FacilitiesInterfac";
import { primaryColor, seondaryColor, whiteThemeColor } from "../Theme/colors";

const FacilityItem = (props: any) => {
    const navigate = useNavigate();
    const facility: FacilitiesInterface = props.facility;

    const redirectToDetailsPage = (resourceId: string) => {
        navigate('/resources/' + resourceId);
    }
    return (
        <Grid key={facility.id} item sx={{ height: '420px' }} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyItems: 'spaceBetween' }} elevation={6}>
                <CardHeader
                    sx={{
                        '.MuiCardHeader-title': {
                            display: 'flex',
                            justifyContent: 'center',
                            color: primaryColor
                        },
                        '.MuiCardHeader-subheader': {
                            display: 'flex',
                            justifyContent: 'center',
                            color: seondaryColor
                        }
                    }}
                    title={facility.name}
                    subheader={facility.category} />
                <CardMedia
                    component="img"
                    sx={{
                        width: '50%',
                        ml: '70px',
                        py: '4px',
                        height: 'auto',
                        objectFit: 'contain',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}
                    image={facility.image}
                    alt="Equipment image"
                />
                <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: primaryColor
                }}>
                    <Button
                        sx={{ color: whiteThemeColor, width: '100%' }}
                        onClick={() => redirectToDetailsPage(facility.id)}>
                        Reserve Property
                    </Button>
                </CardActions>
            </Card>
        </Grid>);
}

export default FacilityItem;