import { Paper, Stack, Typography } from '@mui/material';
import React from 'react'

function CountryCard(params) {
    const { country, setCountryData } = params;
    return (
        <Paper onClick={()=>setCountryData(country)} elevation={3} sx={{p:2 , bgcolor:"#eeeefe", "&:hover":{
            bgcolor:'#e0e0e0',
            cursor:'pointer'
        }}}>
            <Stack direction='row' justifyContent='space-between' gap={2}>
                <Stack>
            <Typography variant='h6'>{country.name.common}</Typography>
            <Typography variant='subtitle2'>{country.name.official}</Typography>
             {
                country.currencies ? <Typography variant='subtitle2'> <strong>Currency:</strong> {Object.values(country.currencies).map((currency, index) => {
                    return <span key={index}>{currency.name} ({currency.symbol}){(index<Object.values(country.currencies).length - 1)? ', ':null}</span>
                }
                ) }</Typography>: null
            }
            </Stack>
            <img src={country.flags.png} alt={country.name.common} width='75rem' height='50rem' />
            </Stack>

        </Paper>
    )
}

export default CountryCard