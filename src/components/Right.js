import React from 'react'
import CountryInfo from './CountryInfo';
import { Box } from '@mui/material';

function Right(params) {
    const { continent, countryData , setFavList, favList} = params;

    const continentImages = {
        "" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/India_%28orthographic_projection%29.svg/250px-India_%28orthographic_projection%29.svg.png",
        Asia : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Asia_%28orthographic_projection%29.svg/220px-Asia_%28orthographic_projection%29.svg.png",
        Africa : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Africa_%28orthographic_projection%29.svg/220px-Africa_%28orthographic_projection%29.svg.png",
        Australia : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Australia-New_Guinea_%28orthographic_projection%29.svg/200px-Australia-New_Guinea_%28orthographic_projection%29.svg.png",
        Europe : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg/220px-Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg.png",
        NAmerica : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Location_North_America.svg/220px-Location_North_America.svg.png",
        SAmerica : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/South_America_%28orthographic_projection%29.svg/220px-South_America_%28orthographic_projection%29.svg.png",

    }

    if(countryData !== undefined){
        return (<Box sx={{width: '50%',}}>
        {console.log(countryData)}
    <CountryInfo countryData={countryData} setFavList={setFavList} favList={favList} />    
        </Box>)
    }
    return (
    <Box sx={{m:4}}>
        <img src={continentImages[continent]} width='220px' height='220px'/>
    </Box>
  )
}

export default Right