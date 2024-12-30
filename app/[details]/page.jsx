"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const page = () => {
  const params = useParams();
  const { details } = params;
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/recipes/${details}`,
    fetcher
  );
  return (
    <>
      <div className="w-full min-h-screen md:p-10 px-2 py-5 bg-black text-white">
        <Link href="/" className="top w-max flex gap-2">
          <FaLongArrowAltLeft size={25} />
          <h1 className="text-xl font-semibold">Recipes</h1>
        </Link>
        <div className="recipeDetail w-full mt-4 flex md:flex-row flex-col gap-4">
          <div className="left w-full md:w-1/2 h-auto">
            <div className="w-full bg-zinc-900 h-[200px] overflow-hidden cursor-pointer md:h-[400px] rounded-md">
              <img
                src={data?.image}
                alt=""
                className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
              />
            </div>
            <div className="flex w-full justify-between p-1 mt-1 items-center md:mt-2 md:p-3">
              <h1 className="md:text-xl font-semibold">{data?.name}</h1>
              <h1 className="md:text-lg font-semibold text-sm text-gray-600">
                Rating: {data?.rating}
              </h1>
            </div>
            <div className="info w-full h-auto px-1 md:px-3 mt-5">
              <h1 className="text-2xl font-semibold">Instructions:</h1>
              <ul className="md:px-3 px-1 py-2 md:py-3 flex flex-col gap-2">
                {data?.instructions.map((ing, index) => (
                  <li
                    className="py-2 md:px-4 px-2 cursor-pointer transition-all duration-300 hover:bg-zinc-800 rounded-md bg-zinc-900"
                    key={index}
                  >
                    {ing}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="info w-full md:w-1/2 h-auto px-3">
            <h1 className="text-3xl font-semibold">Ingredients:</h1>
            <ul className="md:px-3 px-1 py-2 md:py-3 flex flex-col gap-2">
              {data?.ingredients.map((ing, index) => (
                <li
                  className="py-2 md:px-4 px-2 cursor-pointer transition-all duration-300 hover:bg-zinc-800 rounded-md bg-zinc-900"
                  key={index}
                >
                  {ing}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
