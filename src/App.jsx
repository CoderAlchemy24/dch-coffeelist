import { useState, useEffect } from 'react'
import './App.css'
import CardList from './components/CardList'

function App() {

  const [coffeeList, setCoffeeList] = useState([])
  const [allCoffees, setAllCoffees] = useState([])
  const [selected, setSelected] = useState('All')
  const [available, setAvailable] = useState([1,2,3,4,6])
  const [popular, setPopular] = useState([true, true, false, false, false, false]) 
  const [soldOut, setSoldOut] = useState([false, false, false, false, true, false])

  function getList(){

    fetch('https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json')
     .then((response) => response.json())
     .then((data) => {
         setAllCoffees(data); // all coffees
         const filteredCoffees = data.filter(coffee => available.includes(coffee.id));
         setCoffeeList(filteredCoffees); // available coffees
     })
     .catch((error) => console.log(error));}


  useEffect(() => { getList();},[])    

  return (
    <>
      <header className='
      bg-[url("/resources/bg-cafe-sm.jpg")]
      md:bg-[url("/resources/bg-cafe.jpg")]
      lg:bg-[url("/resources/bg-cafe-lg.jpg")] 
      bg-cover bg-center h-96 flex flex-col justify-center items-center text-white'>
      </header>
      <main className='w-[84%] max-w-6xl mx-auto z-[5] relative -mt-46 mb-48 pb-24 bg-[#111315] rounded-lg p-8 shadow-lg bg-[url("/resources/vector.svg")] bg-no-repeat bg-[length:300px] bg-[position:top_1rem_right_11rem]'>
      
      <h1 className="dm-sans-heading text-[#FFFFFF] text-center pt-12">Our Collection</h1>
      <p className="dm-sans-body text-[#6F757C] text-center px-[22%]">Introducing our Coffee Collection, a selection of unique coffees from different 
        roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
      
    
      <div className='btns text-white text-center dm-sans-body flex flex-row justify-center gap-4 my-6'>
        <button className="all-coffee-btn hover:bg-[#6F757C] hover:cursor-pointer px-4 py-2 rounded-sm" 
          onClick={()=>setSelected('All')}>All Products</button>
        <button className="available-now-btn hover:bg-[#6F757C] hover:cursor-pointer px-4 py-2 rounded-sm" 
          onClick={()=>setSelected('Available')}>Available Now</button>
      </div>
      { selected === 'All' ? 
         <CardList coffeelist={allCoffees} popular={popular} soldOut= {soldOut}/> :     
        
         <CardList coffeelist={coffeeList} popular={popular} soldOut= {soldOut}/>}
      </main> 
    </>
  )
}
   

export default App
