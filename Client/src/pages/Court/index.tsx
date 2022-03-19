import React from 'react'
import {CssBaseline, Typography} from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import imgCourt from '../../assets/images/imgplaceholder.jpg'
import TableReservation from "../../components/Table/TableReservation";

// How to use background img cover inside div/box:
// https://www.freecodecamp.org/news/react-background-image-tutorial-how-to-set-backgroundimage-with-inline-css-style/

const Court : React.FC<{}> = () => {

    const [data, setData] = React.useState<string>('');

    React.useEffect(() => {
        //console.log('data:', data)
    }, [data])

    const updateData = (event:  React.ChangeEvent<HTMLInputElement>) : void => {
        setData(event.target.value);
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container sx={{pt: 7}} maxWidth="lg">
                    <Box>
                        <Typography variant={'h1'} component={'h1'}>Campo A</Typography>
                        <Typography variant={'body1'} component={'p'}>4.91 - 23 recensioni - Porto Recanati</Typography>
                        <Box style={{
                            background: `url(${imgCourt})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            width: '100%',
                            height: 637,
                        }}/>
                    </Box>
                <Box>
                    <input  onChange={(event) => updateData(event)} type="date" id="reservation" name="reservation" />
                    <TableReservation data={data} />
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Court