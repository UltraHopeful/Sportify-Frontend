#  Assignment - 1
* *Date Created*: 04 JUN 2022
* *Last Modification Date*: 04 JUN 2022
* *Lab URL*: <https://csci-5709-assignment-1.herokuapp.com/>
* *Git URL*: <https://git.cs.dal.ca/ajayanthi/csci-5709-aravind-jayanthi/-/tree/assignment-1>

## Authors

* [Aravind Jayanthi](ar687531@dal.ca)

## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [React](https://reactjs.org/) - The web framework used to build UI.
* [Material UI](https://mui.com/) - This library is used for styling components.
* [React Router](https://reactrouter.com/) - This library is used for routing in the frontend application.

## Sources Used

* [App bar](https://mui.com/material-ui/react-app-bar/#main-content) is referred to build the navigation bar of the application.
* [Card](https://mui.com/material-ui/react-card/#main-content) is referred to build mutiple components like list items.
* [Grid](https://mui.com/material-ui/react-grid/) is referred to structure the pages.
* [Stack](https://mui.com/material-ui/react-stack/) is referred to align text fields in the pages.
* Following images are using in the application as placeholder for the actula data:
    * [Stationary Bicycle](https://nymag.com/strategist/article/best-exercise-bikes.html)
    * [Rowing Machine](https://www.prevention.com/fitness/workout-clothes-gear/g27547247/best-rowing-machines/)
    * [Pool](https://www.halifax.ca/parks-recreation/programs-activities/swimming)
    * [Peck Deck](https://fitnessexperience.ca/collections/specialty-benches-single-stations/products/body-solid-gpm65-pec-dec-machine)
    * [Treadmill](https://m.media-amazon.com/images/I/719uh1Um6aL._AC_SL1500_.jpg)
    * [Treadmill](https://www.zalora.com.ph/kemilng-m12-treadmill-multifunction-manual-incline-black-2344322.html)

### Navbar.tsx

*Lines 25 - 62*

```
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

```

The code above was created by adapting the code in [App Bar](https://mui.com/material-ui/react-app-bar/) as shown below: 

```
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

```

- The code in [App Bar](https://mui.com/material-ui/react-app-bar/) was implemented by material UI team.
- [App Bar](https://mui.com/material-ui/react-app-bar/)'s Code was used to keep the consistency in the material UI theme.

### Navbar.tsx

*Lines 60 - 82*

```
const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
```
The code above was created by adapting the code in [App Bar](https://mui.com/material-ui/react-app-bar/) as shown below: 

```
const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
```
- The code in [App Bar](https://mui.com/material-ui/react-app-bar/) was implemented by material UI team.
- [App Bar](https://mui.com/material-ui/react-app-bar/)'s Code was used to keep maintain the dropdown button's state in the app bar.