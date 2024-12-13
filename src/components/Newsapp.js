import React from 'react'
import Card from './Card'
import { useState } from 'react';
import { useEffect } from 'react';

const Newsapp = () => {
    const API_KEY="a5d4fca339d84622ab30e8be665cc330";
    const [search,setsearch]=useState("india");
    const [newsData,setNewsData]= useState(null)

   const getData = async()=>{
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
    const jsonData=await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles);
   }
   useEffect(()=>{
    getData()
   },[])

   const handleInput=(e)=>{
        console.log(e.target.value);
        setsearch(e.target.value);
      

   }

   const userInput=async(event)=>{
            setsearch(event.target.value);
      }
      

  return (
    <div>
      <nav>

        <div>
            <h1>Trendy News</h1>
        </div>

        <ul>
            <a className='allnews'>All News</a>
            <a className='trending'> Trending</a>
        </ul>

        <div className='searchBar'>
        <input type='text' placeholder='search News' value={search} onChange={handleInput}></input>
        <button onClick={getData}>Search</button>
        </div>

      </nav>

      <div>
        <p className='head'>Stay Update With TrendyNews</p>
      </div>

      <div className='categoryBtn'>
         <button onClick={userInput} value="Sports">Sports</button>
         <button onClick={userInput} value="Politics">Politics</button>
         <button onClick={ userInput} value="Entertainment">Entertainment</button>
         <button onClick={userInput} value="Health">Health</button>
         <button onClick={userInput} value="Fitness">Fitness</button>
         </div>
         <div>
           {newsData? <Card data={newsData}/>:null}
         </div>
    </div>
  )
}

export default Newsapp
