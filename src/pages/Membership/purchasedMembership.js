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
  const domain = 'https://sportify-backend-prd.herokuapp.com';
  const backendReqBody = JSON.parse(localStorage.getItem("backendReqBody"));
  const queryParams = new URLSearchParams(window.location.search);
  const [payment, setPayment] = React.useState(queryParams.get('payment'));
  let initialTitle = payment === "success" ? "Payment Completed" : "Membership Cancelled";
  let initialDesc = payment === "success" ? "Hurray! So excited to have you onboard with us. We have updated your membership status in Sportify." : "We are processing your cancellation request. You will receive refund in your bank account within next 5 business days.";
  let initialSetOpen = payment === "success" ? true : false
  const [open, setOpen] = React.useState(initialSetOpen);
  const [dTitle, setDTitle] = React.useState(initialTitle);
  const [dDesc, setDDesc] = React.useState(initialDesc);

  localStorage.setItem("user", '{"_id":"62d125c24709b75db510f79c","firstName":"Soham","lastName":"Patel","email":"sohupatel8828@gmail.com","contactNo":"+1 902-354-4536","address":"","profile":"user"}')
  const rawUser = localStorage.getItem("user")
  const user = JSON.parse(rawUser)
  const userId = user._id;

  const handleClose = () => {
    setOpen(false);
    
    if (payment !== "success") {
      navigate('/membership');
    }
    else {
      axios.post(domain + '/api/membership/create-purchase', {
        backendReqBody,
        userId
      })
      setPayment("");
    }

  };
  const location = useLocation();
  const navigate = useNavigate();
  const [rows, setRows] = React.useState([]);
  const cancelMembership = () => {
    axios({
      method: 'put',
      url: domain + "/api/membership/cancel-purchase"
    }).then(res => {
      setDTitle("Membership Cancelled");
      setDDesc("We are processing your cancellation request. You will receive refund in your bank account within next 5 business days.")
      setOpen(true);

    }).catch(err => {
      console.log(err);
    })
  }


  React.useEffect(() => {
    if (location.state != null) {
      setRows(location.state.memberships);
    }
    else {
      axios
        .get(domain + '/api/membership/purchase/user/'+userId)
        .then((res) => {
          setRows(res.data.data);
        })
    }

  }, [location.state, userId])


  return (
    <div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {dTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dDesc}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>

        </DialogActions>
      </Dialog>

      <div>
        <br />
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

        <br />
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
                <StyledTableCell align="center">{Date(row.start_date)}</StyledTableCell>
                <StyledTableCell align="center">{Date(row.end_date)}</StyledTableCell>
                <StyledTableCell align="center">{row.status}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>


  );
}
