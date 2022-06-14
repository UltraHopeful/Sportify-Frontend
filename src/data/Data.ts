import { ReservationInterface } from "./ReservationInterface";

let userReservations: ReservationInterface[] = [
    {
        'reservationFrom': '2022-06-03 11:30AM',
        'reservationTo': '2022-06-03 01:30PM',
        'reservedDate': '2022-06-03',
        'id': 1,
        'reservationDate': '2022-06-01',
        'reservedBy': 'John Doe',
        'reservedFor': 'Jane Doe',
        'equipmentName': 'Treadmill',
        'equipmentLoc': 'Room-253',
        'equipmentImg': './image2.jpg'
    },
    {
        'reservationFrom': '2022-06-02 10:30AM',
        'reservationTo': '2022-06-02 11:00AM',
        'reservedDate': '2022-06-02',
        'id': 2,
        'reservationDate': '2022-05-31',
        'reservedBy': 'John Doe',
        'reservedFor': 'John Doe',
        'equipmentName': 'Stationary Bicycle',
        'equipmentLoc': 'Room-295',
        'equipmentImg': './statBicycle.webp'
    },
    {
        'reservationFrom': '2022-06-02 11:10AM',
        'reservationTo': '2022-06-02 11:40PM',
        'reservedDate': '2022-06-02',
        'id': 3,
        'reservationDate': '2022-05-31',
        'reservedBy': 'John Doe',
        'reservedFor': 'John Doe',
        'equipmentName': 'Rowing Machine',
        'equipmentLoc': 'Room-295',
        'equipmentImg': './rowing.jpg'
    },
    {
        'reservationFrom': '2022-05-03 11:30AM',
        'reservationTo': '2022-05-03 01:30PM',
        'reservedDate': '2022-05-03',
        'id': 4,
        'reservationDate': '2022-04-30',
        'reservedBy': 'John Doe',
        'reservedFor': 'Jane Doe',
        'equipmentName': 'Treadmill',
        'equipmentLoc': 'Room-253',
        'equipmentImg': './image.jpg'
    },
    {
        'reservationFrom': '2022-05-02 10:30AM',
        'reservationTo': '2022-05-02 11:00AM',
        'reservedDate': '2022-05-02',
        'id': 5,
        'reservationDate': '2022-04-30',
        'reservedBy': 'John Doe',
        'reservedFor': 'John Doe',
        'equipmentName': 'Peck Deck-1',
        'equipmentLoc': 'Room-213',
        'equipmentImg': './peckDeck.webp'
    },
    {
        'reservationFrom': '2022-05-02 11:10AM',
        'reservationTo': '2022-05-02 11:40PM',
        'reservedDate': '2022-05-02',
        'id': 6,
        'reservationDate': '2022-04-30',
        'reservedBy': 'John Doe',
        'reservedFor': 'John Doe',
        'equipmentName': 'Rowing Machine',
        'equipmentLoc': 'Room-295',
        'equipmentImg': './image2.jpg'
    },
    {
        'reservationFrom': '2022-05-05 11:10AM',
        'reservationTo': '2022-05-05 11:40PM',
        'reservedDate': '2022-05-05',
        'id': 7,
        'reservationDate': '2022-04-30',
        'reservedBy': 'John Doe',
        'reservedFor': 'John Doe',
        'equipmentName': 'Pool-1',
        'equipmentLoc': 'Poom-1',
        'equipmentImg': './pool1.jpg'
    },
];

export default userReservations;