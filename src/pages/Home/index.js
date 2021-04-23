import {useEffect, useState} from 'react'
import Header from '../../components/Header'
import {Grid, Box} from '@material-ui/core'
import Cards from '../../components/Cards'
import {useFetch} from '../../components/Fetch'

const Home = ()=>{

    const [data, loading] = useFetch(
        "https://www.googleapis.com/books/v1/volumes?q=arts"
      );


return <Grid container xs={12} spacing={2} >
    <Grid item xs={12} >
        <Box style={{display:'flex', padding:'20px'}}>
    {loading ? (
        "Loading..."
      ) : (
        <Grid container md={12} spacing={3} alignItems="center" justifyContent="space-between">
          {data.items.map(({ id, volumeInfo  }) => (
              <Grid item md={3}>
                <Cards key={`photo-${id}`} img={volumeInfo.imageLinks.thumbnail} title={volumeInfo.title} link={volumeInfo.infoLink} description={volumeInfo.description} />
                </Grid>
          ))}
        </Grid>
      )}
        </Box>
    </Grid>
    <Grid item xs={12} >
       
    </Grid>
    <Grid item xs={12} >
    
    </Grid>
</Grid>
}

export default Home
