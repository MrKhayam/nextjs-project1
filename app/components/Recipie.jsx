import Link from 'next/link';
import React from 'react';

const Recipie = ({recipe}) => {
  return (
    <>
      <div className="md:w-72 w-full text-white p-4 h-auto rounded-md bg-zinc-900">
        <div className="image bg-gray-400 rounded-lg overflow-hidden w-full h-40">
          <img
            className="w-full cursor-pointer transition-all duration-300 hover:scale-105 h-full object-cover"
            src={recipe.image}
            alt={recipe.name}
          />
        </div>
        <div className="flex px-2 mt-2  justify-between">
          <h1 className="text-lg font-semibold">{recipe.name}</h1>
          <h1 className="text-lg text-gray-500">{recipe.rating}</h1>
        </div>
        <h1 className="px-2 text-lg ">Servings: {recipe.servings}</h1>
        <div className="p-2 mt-4 flex justify-end">
          <Link className='bg-black transition-all duration-300 hover:bg-[#080808] px-5 py-3 rounded-lg' href={`/${recipe.id}`}> View More</Link>
        </div>
      </div>
    </>
  );
}

export default Recipie;
