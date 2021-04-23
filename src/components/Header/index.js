import {Fragment} from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import useStyles from './styles'
import {useAuth0} from '@auth0/auth0-react'
import Login from '../LoginButton'
import Logout from '../LogoutButton'

export default function Header({title}) {
  const classes = useStyles();
  const {isAuthenticated} = useAuth0()

  const authenticatedSection = [
    { title: 'Home', url: '/'},
    { title: 'About', url: '/about' },
    { title: 'Contact', url: '/contact' },
    { title: 'Profile', url: '/profile'},
  ];
  const sections = [
    { title: 'Home', url: '/', restricted:false},
    { title: 'Contact', url: '/contact', restricted:false  },
  ];


  return (
    <Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
       
        {isAuthenticated ? <Logout />:<Login />}
   
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {
            (isAuthenticated ? authenticatedSection:sections).map((section) => {
                return (
                <Link
                    color="inherit"
                    noWrap
                    key={section.title}
                    variant="body2"
                    href={section.url}
                    className={classes.toolbarLink}
                >
                    {section.title}
                </Link>
                )
            })
        }
      </Toolbar>
    </Fragment>
  );
}
