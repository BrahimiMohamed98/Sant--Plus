import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ComentsAxios from '../Components/ComentsAxios';

export default function Comments() {

const [donnees,setDonnee] = useState([]);

useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/comments')
  .then((response)=>{
    setDonnee(response.data)
    console.log(response.data)
  })

  .catch((error)=>{
    console.log(error)
  })

});

  return (
   <>

   <h1>Les autres Commentaitres</h1>
   {donnees ?
   (
    donnees.map((d)=> {
    return <ComentsAxios key={d.id} data={d}></ComentsAxios> ;
    })
  )
   :  (<p> No data</p>
  )}
  
   
   </>
  );
}