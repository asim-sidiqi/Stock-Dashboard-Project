import React, {useContext, useState, useEffect} from 'react'
import Charts from './Charts'
import Header from './Header';
import Details from './Details';
import Overview from './Overview';
import ThemeContext from '../context/ThemeContext';
import StockContext from '../context/StockContext';
import { fetchQuote, fetchStockDetails } from '../api/stock-api';


const Dashboard = () => {

  const {darkMode} = useContext(ThemeContext);
  const {stockSymbol} = useContext(StockContext);

  const [stockDetails, setStockDetails] = useState({});
  const [quote, setQuote] = useState({});

  useEffect(()=>{
    const updateStockDetails = async () =>{
      try{
        const result = await fetchStockDetails(stockSymbol);
        setStockDetails(result);
      }
      catch (error){
        setStockDetails({});
        console.log(error);
      }
    };

    const updateStockOverview = async () =>{
      try{
        const result = await fetchQuote(stockSymbol);
        setQuote(result);
      }
      catch (error){
        setQuote({});
        console.log(error);
      }
    };

    updateStockDetails();
    updateStockOverview();
    
  },[stockSymbol])


  return (
    <div className={`h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand 
      ${darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-300"}`}>
      <div className= "col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
        <Header name={stockDetails.name}/>
      </div>
      
      <div className= "col-span-1 md:col-span-1 xl:col-span-1 row-span-4">
        <Charts></Charts>
      </div>

      <div className= "col-span-2 row-span-1">
        <Overview symbol={stockSymbol} price={quote.pc} currency={stockDetails.currency} change={quote.d} changePercent={quote.dp}/>
      </div>

      <div className= "col-span-2 row-span-2 md:row-span-2 xl:row-span-3">
        <Details details={stockDetails}/>
      </div>
    </div>








  )
}

export default Dashboard;
