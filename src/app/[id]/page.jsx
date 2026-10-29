import Image from "next/image";
import React, { Suspense } from "react";
import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import { IoSaveOutline } from "react-icons/io5";

const DetailsContent = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`,
    {
      cache: "force-cache",
    },
  );
  const data = await response.json();
  console.log(data);

  return (
    <>
      <div className="flex gap-20 mx-auto max-w-[1440px]">
        <Image className="rounded-2xl  " src={data.image} alt={data.name} width={500} height={400} />
        <div className="border-collapse">
          <h1 className="text-2xl">{data.name}</h1>
          <p className="text-wrap">{data.description}</p>
          <div className="mt-2">
            {data.muscleGroups.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-lime-400 font-semibold text-gray-800 text-xs px-2 py-1 rounded-full mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="w-2/3 overflow-hidden rounded-2xl border border-green-600 bg-mist-900 shadow-sm">
            <table className="w-full border-collapse text-left text-sm text-gray-400">
              <tbody>
                <tr className="border-b border-gray-600">
                  <td className="w-1/3 bg-mist-900 px-4 py-3 font-semibold tracking-wide text-gray-500">
                    EQUIPMENT
                  </td>
                  <td className="px-4 py-3 text-right">{data.equipment}</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="bg-mist-900 px-4 py-3 font-semibold tracking-wide text-gray-500 ">
                    DIFFICULTY
                  </td>
                  <td className="px-4 py-3 text-right">{data.difficulty}</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="bg-mist-900 px-4 py-3 font-semibold tracking-wide text-gray-500">
                    SETS
                  </td>
                  <td className="px-4 py-3 text-right ">{data.sets}</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="bg-mist-900 px-4 py-3 font-semibold tracking-wide text-gray-500">
                    REPS
                  </td>
                  <td className="px-4 py-3 text-right">{data.reps}</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="bg-mist-900 px-4 py-3 font-semibold tracking-wide text-gray-500">
                    DURATION
                  </td>
                  <td className="px-4 py-3 text-right">{data.duration}</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="bg-mist-900 px-4 py-3 font-semibold tracking-wide text-gray-500">
                    CALORIES
                  </td>
                  <td className="px-4 py-3 text-right">{data.caloriesBurned}</td>
                </tr>
                <tr>
                  <td className="bg-mist-900 px-4 py-3 font-semibold tracking-wide text-gray-500">
                    RATING
                  </td>
                  <td className="px-4 py-3 font-medium text-right text-gray-500">
                     {data.rating}
                  </td>
                </tr>
              </tbody>
            </table>
            
          </div>
          <h2 className="text-2xl font-bold mt-4">INSTRUCTIONS</h2>
          {data.instructions.map((step, index) => (
              <div key={step} className="mt-2 text-gray-400">
                <p>{index + 1}. {step}</p>
              </div>    
            ))}
            <div className='flex gap-6'>
              <button className="bg-lime-400 font-bold flex gap-2 align-baseline text-black  rounded-lg px-4 py-2 mt-4"> <FaCartArrowDown /> Add to Today's Plan</button>
            <button className="  font-bold flex gap-2 align-baseline text-white border border-gray-400  rounded-lg px-4 py-2 mt-4"> <IoSaveOutline /> Save for later</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default function DetailsPage({ params }) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <DetailsContent params={params} />
    </Suspense>
  );
}
