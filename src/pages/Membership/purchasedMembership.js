import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import "./membership.css";
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function PurchasedMemberships() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        navigate('/membership');
    };
    const location = useLocation();
    const navigate = useNavigate();
    // let rows = location.state.memberships;
    let rows = [];
    const cancelMembership = () => {
        axios({
            method: 'put',
            url: "http://localhost:5000/api/membership/cancel-purchase"
          }).then(res => {
            setOpen(true);
            
          }).catch(err => {
              console.log(err);
          })
    }
    
    
    React.useEffect(() => {
      if(location.state != null){
        rows = location.state.memberships;
      }
      else{
        axios
        .get('http://localhost:5000/api/membership/purchase/user/55153a8014829a865bbf700d')
        .then((res) => {
          if(res.data.data.length >0) {
            let current = new Date();
            let endDate = res.data.data.end_date;
            if(endDate>=current){
              navigate('/purchased-membership', {state: {'memberships': res.data.data}});
            }
            else{
              //cancel membership automatically
              cancelMembership();
            }
          }
        })
      }
        
    })
    
  return (
    <div>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Membership Cancelled"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            We are processing your cancellation request. You will receive refund in your bank account within next 5 business days.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          
        </DialogActions>
      </Dialog>

        <div>
            <br/>
            <div className='divDisplay'>
                <Typography sx={{ m: 2 }} variant="h5" component="h2">
                    Active Membership
                </Typography>
            </div>
            <div className='divDisplay rightDisplay'>
                <Button sx={{ m: 2 }} variant="outlined" color="error" onClick={cancelMembership}>
                    Cancel Membership
                </Button>
            </div>
            
            <br/>
        </div>
        

        <TableContainer component={Paper}>
        <Table aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Booking ID</StyledTableCell>
                <StyledTableCell align="center">Membership Plan</StyledTableCell>
                <StyledTableCell align="center">Start Date</StyledTableCell>
                <StyledTableCell align="center">End Date</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                    {row.id}
                </StyledTableCell>
                <StyledTableCell align="center">{row.plan_name}</StyledTableCell>
                <StyledTableCell align="center">{row.start_date}</StyledTableCell>
                <StyledTableCell align="center">{row.end_date}</StyledTableCell>
                <StyledTableCell align="center">{row.status}</StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>

    </div>

    
  );
}
