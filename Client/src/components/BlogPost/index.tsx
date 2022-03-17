import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import imgPlaceHolder from '../../assets/images/imgplaceholder.jpg'
import Icon from "../Icons";
import Link from '@mui/material/Link';

const BlogPost = () => {
    return (
        <Card sx={{ maxWidth: 345, boxShadow: 'none' }}>
            <CardMedia
                component="img"
                alt="green iguana"
                width="270"
                height="270"
                image={imgPlaceHolder}
            />
            <CardContent sx={{padding: '8px 0 0 0'}}>
                <Link sx={{textDecoration : 'none'}} href={'https://www.emanuelegurini.com'}>
                    <Typography sx={{fontWeight: 700, textTransform: 'capitalize'}} variant="body1" component="div">
                        campo a
                    </Typography>
                </Link>
                <Typography sx={{fontStyle: 'italic'}} variant="body1" component="div">
                    Coperto
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Padel Club Porto Recanati
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    V.le Europa, 157
                </Typography>
                <Icon glyph={'ball'} size={'md'} />
            </CardContent>
        </Card>
    );
}

export default BlogPost