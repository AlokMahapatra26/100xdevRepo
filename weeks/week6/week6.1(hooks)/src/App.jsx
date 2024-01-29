import { useEffect, useState } from 'react';
import React, { memo } from 'react';

function App() {
 
  const [data , setData] = useState([]);

  useEffect(()=>{
    async function dataReciever(){
      try{
        const response = await fetch('https://api.jikan.moe/v4/anime');
        if(!response.ok){
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json();
        setData(data.data);
      }
      catch(error){
        console.error('Error' , error.message)
      }
    }

    dataReciever()
  },[])

  function Card({title , synopsis , score , image}){
    return (
      <div className='p-3 border m-4 rounded shadow inline-block'>
      <h1 className="text-3xl text-red-500 ">{title}</h1>
      <img src={image} />
      <p>{score}</p>
      
      
    </div>
    )
  }


  

  return (
    <>

    <h1 className='text-center mt-4 text-4xl'>Anime</h1>
    {
      console.log(data)
    }
     {data.map((cardData)=>{
      return <Card title={cardData.title}  key={cardData.mal_id} score={cardData.score} image={cardData.images.jpg.image_url}/>
     })}
    </>
  );

  

}



export default App;
