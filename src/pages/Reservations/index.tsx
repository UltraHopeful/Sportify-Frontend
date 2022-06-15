import { Box, FormControl, MenuItem, Pagination, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { ReservationInterface } from "../../data/ReservationInterface";
import ReservationItem from "./ReservationItem";
import '../../App.css';
import './Reservations.css'

const ReservationList = (props: any) => {

    const [page, setPage] = useState(1);

    const [list, setList] = useState(props.reservations.slice(0, 5));

    const itemsPerPage: number = 5;

    // const totalPages: number = Math.ceil(props.reservations.length / 5);

    const maxPagesMd = 5;

    const maxPagesSm = 3;

    const maxPagesXs = -1;

    const [defaultItemsPerPage, setDetaultItemsPerPage] = useState<number>(itemsPerPage);

    const [totalPages, setTotalPages] = useState<number>(Math.ceil(props.reservations.length / defaultItemsPerPage));

    const updateDefaulItemsPerPage = (event: SelectChangeEvent<typeof defaultItemsPerPage>) => {
        const itemsPerPageTemp: number = (+event.target.value);
        const totalPagesTemp: number = Math.ceil(props.reservations.length / itemsPerPageTemp);
        console.log('Update total pages: '+ totalPagesTemp);
        setDetaultItemsPerPage((+event.target.value));
        updatePagination(1, itemsPerPageTemp);
        setTotalPages(totalPagesTemp);
    }

    const updatePageList = (pageNumber: number, itemsPerPage: number) => {
        const start: number = (pageNumber - 1) * itemsPerPage;
        const end: number = (pageNumber) * itemsPerPage;
        setList(props.reservations.slice(start, end));
    }

    const updatePagination = (pageNumber: number, itemsPerPage: number) => {
        updatePageList(pageNumber, itemsPerPage);
        setPage(pageNumber);
    }

    // /**
    //  * This function updates the page number of the pagination,
    //  * if the number of items per page makes the current page number invalid.
    //  * @param pageNumber 
    //  * @param itemsPerPage 
    //  */
    // const updatePageNumberIfInvalid = (pageNumber: number, itemsPerPage: number) => {

    // }

    const onPaginationChange = (event: React.ChangeEvent<unknown>, value: number) => {
        updatePagination(value, defaultItemsPerPage);
        // updatePageList(value, defaultItemsPerPage);
        // setPage(value);
    }

    const reservationList = list.map((reservation: ReservationInterface) => {
        return (<ReservationItem key={reservation.id} reservationDetails={reservation}></ReservationItem>);
    });

    return (
        <div>
            <Box sx={{ margin: '10px 15%', display: { md: 'flex', xs: 'none', sm: 'none' }, flexDirection: 'column' }}>
                {reservationList}
            </Box>
            <Box sx={{ margin: '10px 5%', display: { xs: 'none', sm: 'flex', md: 'none' }, flexDirection: 'column' }}>
                {reservationList}
            </Box>
            <Box sx={{ margin: '10px 0%', display: { xs: 'flex', sm: 'none', md: 'none' }, flexDirection: 'column' }}>
                {reservationList}
            </Box>
            <div className="Footer">
                {totalPages > 1 &&
                    (<div className="Pagination">

                        <Pagination sx={{
                            my: "15px",
                            display: { md: 'flex', sm: 'none', xs: 'none' },
                            justifyContent: 'center',
                        }}
                            count={totalPages}
                            siblingCount={Math.min(totalPages, maxPagesMd)}
                            page={page}
                            onChange={onPaginationChange}
                        />
                        <Pagination sx={{
                            my: "15px",
                            display: { md: 'none', sm: 'flex', xs: 'none' },
                            justifyContent: 'center'
                        }}
                            count={totalPages}
                            siblingCount={Math.min(totalPages, maxPagesSm)}
                            page={page}
                            onChange={onPaginationChange}
                        />
                        <Pagination sx={{
                            my: "15px",
                            display: { md: 'none', xs: 'flex', sm: 'none' },
                            justifyContent: 'center'
                        }}
                            count={totalPages}
                            siblingCount={Math.min(totalPages, maxPagesXs)}
                            boundaryCount={0}
                            page={page}
                            onChange={onPaginationChange}
                            showLastButton={false}
                        />
                    </div>)
                }
                <div className="Select-items">
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        {/* <InputLabel id="demo-controlled-open-select-label"></InputLabel> */}
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            value={defaultItemsPerPage}
                            // label="Age"
                            onChange={updateDefaulItemsPerPage}
                        >
                            <MenuItem value={5}>5 per page</MenuItem>
                            <MenuItem value={10}>10 per page</MenuItem>
                            <MenuItem value={20}>20 per page</MenuItem>
                            <MenuItem value={30}>30 per page</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
        </div>
    );
}

export default ReservationList;