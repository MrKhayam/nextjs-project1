import React from 'react';
import Recipie from './components/Recipie';

const fetchRecipie = async () => {
  const data = await fetch("https://dummyjson.com/recipes");
  const response = await data.json();

  return response;
}

const page = async () => {
  const res = await fetchRecipie();
  const { recipes } = res;
  return (
    <>
      <div className="w-full min-h-screen bg-black md:p-10 p-4">
        <h1 className='text-4xl font-bold'>Recipies</h1>
        <div className="recipies md:w-[80%] w-[95%] justify-center mx-auto h-auto md:mt-10 mt-5 flex flex-wrap gap-8">
          {
            recipes.map((singleRecipie, index) => <Recipie key={index} recipe={singleRecipie} />)
          }
        </div>
      </div>
    </>
  );
}

export default page;
