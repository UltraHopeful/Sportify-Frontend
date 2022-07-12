import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
    return (
        <Box sx={{display: 'flex', justifyContent: 'center', mt:'20px'}}>
            <CircularProgress/>
        </Box>
    );
}

export default Loader;