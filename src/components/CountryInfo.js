import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Box, IconButton, Paper, Stack, Typography } from '@mui/material';
import React from 'react'

function CountryInfo(params) {
    const { countryData, setFavList, favList } = params;
    const countryCode = countryData.cca3;
    return (
        <Paper sx={{ m: 4, p: 2}}>
            <Stack gap={2}>
                <Stack direction='row' justifyContent='space-between' gap={2}>
                    <Stack>
                        <Typography variant='h5'>{countryData.name.common}</Typography>
                        <Typography variant='subtitle1'>{countryData.name.official}</Typography>
                    </Stack>
                    <IconButton
                        sx={{ width: 'fit-content' }}
                        onClick={() => {
                            if (favList.includes(countryCode)) {
                                setFavList(favList.filter((code) => code !== countryCode))
                            }
                            else { setFavList([...favList, countryCode]) }
                        }}>
                        {
                            (favList.includes(countryCode)) ? <Favorite /> : <FavoriteBorder />
                        }
                    </IconButton>
                    <img src={countryData.flags.png} alt={countryData.name.common} width='75rem' height='50rem' />
                </Stack>
                <Box>

                    <Typography variant='subtitle2'> <strong>Capital:</strong> {countryData.capital}</Typography>
                    <Typography variant='subtitle2'> <strong>Region:</strong> {countryData.subregion} ({countryData.region})</Typography>
                    <Typography variant='subtitle2'> <strong>Area:</strong> {countryData.area} km<sup>2</sup></Typography>
                    <Typography variant='subtitle2'> <strong>Population: </strong> {countryData.population}</Typography>
                </Box>

                {
                    countryData.currencies ? <Typography variant='subtitle2'>
                        <strong>Currency: </strong>
                        {Object.values(countryData.currencies)
                            .map((currency, index) => {
                                return <span key={index}>{currency.name} ({currency.symbol}){(index < Object.values(countryData.currencies).length - 1) ? ', ' : null}</span>
                            }
                            )}</Typography> : null
                }
                {
                    countryData.languages ? <Typography variant='subtitle2'>
                        <strong>Languages: </strong>
                        {Object.values(countryData.languages)
                            .map((language, index) => {
                                return <span key={index}>{language} {(index < Object.values(countryData.languages).length - 1) ? ', ' : null}</span>
                            }
                            )
                        }</Typography> : null
                }
                <Typography variant='subtitle2'> <strong>Timezone: </strong>
                    {(countryData.timezones.length > 1) ? <ul>
                        {
                            countryData.timezones.map((timezone, index) => {
                                return <li key={index}>{timezone}</li>
                            })
                        }
                    </ul> : <span>{countryData.timezones[0]}</span>
                    }
                </Typography>
                <Typography variant='subtitle2'> <strong>Calling Code: </strong>
                    {
                        (countryData.idd.suffixes.map((code, index) => {
                            return <span key={index}>{countryData.idd.root}{code} {(index < countryData.idd.suffixes.length - 1) ? ', ' : null}</span>
                        }
                        ))
                    }
                </Typography>
            </Stack>
        </Paper>
    )
}

export default CountryInfo