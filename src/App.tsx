import { useEffect, useState } from 'react'
import CardSwiper from './components/CardSwiper';
import { IData } from './interface/DataInteface';


import './App.css'


function App() {
  const[dataFromApi, setDataFromApi] = useState<IData[]>();
  const fetchApi:()=>void = async() => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    console.log(data);
    setDataFromApi(data.results);
  }
  
  useEffect(() => {
    fetchApi();
  }, [])
  return (
    <>
      <h1>Rick and Morty Fetch Api</h1>
      <CardSwiper data={dataFromApi} />
    </>
  )
}

export default App
