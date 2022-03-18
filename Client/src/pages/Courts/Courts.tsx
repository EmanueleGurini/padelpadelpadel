import React from 'react'
import { ICourt } from './model'
import {useParams} from "react-router-dom";

const Courts : React.FC<{}> = () => {

    const [courts, setCourts] = React.useState<Array<ICourt>>([]);

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(res => setCourts(res.filter((court : ICourt) => court.id < 10)))
    }, [])

    const params = useParams()
    console.log(params.city);


   return (
      <>
         <h1>{params.city}</h1>
          {
              courts.map(function(court) {
                 return (
                     <img width={150} src={court.url} alt={court.title} key={'COURT-' + court.id}/>
                 );
              })
          }
      </>
   );
}

export default Courts