import {Grid, Box} from '@material-ui/core'
import ContactForm from '../../components/ContactForm'

const contact = ()=>{
    return (<Grid container xs={12} spacing={2} >
    <Grid item xs={12} >
        <Box style={{display:'flex', padding:'20px'}}>
        <ContactForm />
        </Box>
    </Grid>
 
    
    </Grid>
    )
}

export default contact