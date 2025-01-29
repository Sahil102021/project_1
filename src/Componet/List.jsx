import { Padding } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'


const dataList = [
    { name: "Ford", country: "USA" },
    { name: "Chevrolet (Chevy)", country: "USA" },
    { name: "Tesla", country: "USA" },
    { name: "Dodge", country: "USA" },
    { name: "Jeep", country: "USA" },
    { name: "Chrysler", country: "USA" },
    { name: "Cadillac", country: "USA" },
    { name: "GMC", country: "USA" },
    { name: "Lincoln", country: "USA" },
    { name: "Buick", country: "USA" },
    { name: "Ram", country: "USA" },
    { name: "Volkswagen (VW)", country: "Germany" },
    { name: "Mercedes-Benz", country: "Germany" },
    { name: "BMW", country: "Germany" },
    { name: "Audi", country: "Germany" },
    { name: "Porsche", country: "Germany" },
    { name: "Opel", country: "Germany" },
    { name: "Bentley", country: "UK" },
    { name: "Rolls-Royce", country: "UK" },
    { name: "Ferrari", country: "Italy" },
    { name: "Lamborghini", country: "Italy" },
    { name: "Maserati", country: "Italy" },
    { name: "Alfa Romeo", country: "Italy" },
    { name: "Fiat", country: "Italy" },
    { name: "Pagani", country: "Italy" },
    { name: "Renault", country: "France" },
    { name: "Peugeot", country: "France" },
    { name: "Citroën", country: "France" },
    { name: "Rivian", country: "USA" },
    { name: "Lucid Motors", country: "USA" },
    { name: "NIO", country: "China" },
    { name: "XPeng", country: "China" },
    { name: "Polestar", country: "Sweden" },
    { name: "BYD", country: "China" },
    { name: "Fisker", country: "USA" },
    { name: "Faraday Future", country: "USA" }
  ];
  
  
  
const List = () => {
  return (
    <div>
      <Box width='100%' sx={{m:'75px 0'}}>
        <Box width='100%' sx={{display:'flex' , justifyContent:'space-between',alignItems:'center' }}>
            <Box width='20%' >
                <Box sx={{backgroundColor:'#4a4e69', borderRadius:'5px', textAlign:'center',m:'2px',width:'100%' , height:'100%'}}>
                    <Typography color='#f2e9e4' sx={{m:'5px'}}>
                         All The Luxray Brand Cars
                    </Typography>
                </Box>
            </Box>
            <Box width='75%' >
                <Box sx={{backgroundColor:'#f2e9e4' , borderRadius:'5px',m:'2px',p:'10px'}}>
                    {
                        dataList.map((el ,i) => {
                            return(
                                <Typography key={i} variant='subtitle1' sx={{color:'#f2e9e4' , backgroundColor:'#4a4e69',borderRadius:'8px' , m:'5px' , p:'3px 20px 3px 20px', display:'inline-block'}}>
                                    {el.name} - {el.country}
                                </Typography>
                            )
                        })
                    }
                </Box>
            </Box>
        </Box>
      </Box>
    </div>
  )
}

export default List
