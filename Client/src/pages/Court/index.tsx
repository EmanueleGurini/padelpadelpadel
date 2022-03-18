import React from 'react'
import {useParams} from "react-router-dom";

const Court : React.FC<{}> = () => {
    const {params} = useParams()
    console.log(params);
    return (
        <>
        </>
    );
}

export default Court