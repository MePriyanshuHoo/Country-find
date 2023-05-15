import React, { useState } from 'react'
import CountryCard from './CountryCard';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import { FavoriteBorder } from '@mui/icons-material';

const Left = (params) => {
    const { setContinent, setCountryData, favList } = params;
    const [countryList, setCountryList] = useState([]);
    const ContinentList = {
        Africa: 'region/africa',
        Asia: 'region/asia',
        Europe: 'region/europe',
        NAmerica: 'subregion/north%20america',
        SAmerica: 'subregion/south%20america',
        Australia: 'region/oceania'
    }

    const altName = {
        NAmerica: 'North America',
        SAmerica: 'South America'
    }

    const handleSetContinent = (e) => {
        console.log('Fetching ', `https://restcountries.eu/v3.1/${ContinentList[e.target.value]}`);

        fetch(`https://restcountries.com/v3.1/${ContinentList[e.target.value]}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log("country list fetched:", data)
                setCountryList(data)
            })
            .catch((err) => console.log(err));

    }


    if (countryList.length > 0) {
        return (
            <Stack gap={4}>
                <Button variant='outlined' onClick={() => {
                    setContinent("");
                    setCountryList([]);
                    setCountryData(undefined)
                }}>Change Continent</Button>
                <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                    {countryList.map((country, index) => {
                        return <Grid
                            key={index}
                            item xs={12} sm={6} md={4}
                        >
                            <CountryCard country={country} setCountryData={setCountryData} />
                        </Grid>
                    })}
                </Grid>
            </Stack>
        )
    }
    return (
        <Container>
            <Typography variant='h4' align='center'>Country Search</Typography>
            <br />
            <Box className='continentList' sx={{
                height: '80%',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                gap: '1rem'
            }}>
                <Button variant='contained' startIcon={<FavoriteBorder />} onClick={() => {
                    if (favList.length > 0) {
                        let favCountries = "";
                        favList.map((country) => {favCountries = country + ','+ favCountries })
                        console.log('detching:', `https://restcountries.com/v3.1/alpha?codes=${favCountries}`)
                        fetch(`https://restcountries.com/v3.1/alpha?codes=${favCountries}`)
                            .then((res) => res.json())
                            .then((data) => {
                                setCountryList(data)
                            })
                            .catch((err) => console.log(err))
                    }
                    else {
                        alert('No favorites yet!')
                    }
                }}
                onMouseOver={()=>setContinent('')}>
                    Favorites
                </Button>
                {
                    Object.keys(ContinentList).map((continent) => {
                        return (
                            <Button
                                variant='contained'
                                key={continent}
                                onClick={handleSetContinent}
                                value={continent}
                                onMouseOver={(e) => setContinent(e.target.value)}>
                                {altName[continent] || continent}
                            </Button>
                        )
                    }
                    )
                }
            </Box>
        </Container>
    )
}

export default Left