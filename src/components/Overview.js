import React from 'react'
import Card from './Card'

const Overview = ({symbol, price, currency, change, changePercent}) => {
  return (
    <Card>
     <span className='absolute left-1 top-1 text-neutral-400 text-lg xl:text-xl 2xl:text-2xl'>
        {symbol}
    </span> 

    <div className="h-full w-full flex justify-around items-center">
        <span className='text-2xl xl:text-2xl 2xl:text-3xl flex items-center'>
            ${price}
            <span className="text-sm xl:text-md 2xl:text-md text-neutral-400 m-2">
                {currency}
            </span>
        </span>
        <span className={`text-lg xl:text-xl 2xl:text-2xl ${change>0 ? "text-lime-500" : "text-red-500" }`}>
            {change}
            <span className='ml-1'>
                ({changePercent}%)
            </span>
        </span>
    </div>
    </Card>
  );
}

export default Overview
