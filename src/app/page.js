import Navbar from "@/components/Navbar";
import Image from "next/image";
import { FaClock, FaRegStar } from "react-icons/fa";
import { PiFireSimple } from "react-icons/pi";

export default async function Home() {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "force-cache",
  });
  const data = await response.json();
  
  return (
    <>
      <div>
        <h1 className="text-xl font-bold  mt-10">THE LIBRARY</h1>
        <p className="text-gray-500">
          Twelve lifts covering every major muscle group.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4  max-w-[1440px] mx-auto mt-10">
          {data.map((item) => (
            <div
              key={item.id}
              className="border max-w-lg bg-mist-900 border-gray-800 rounded-lg p-4"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={300}
                className="rounded-lg mx-auto"
              />
              <div className="mt-2">
                {item.muscleGroups.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-lime-400 font-semibold text-gray-800 text-xs px-2 py-1 rounded-full mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-lg font-bold mt-2">{item.name}</h2>
              <p className="text-gray-500">{item.equipment}</p>
              <hr className="my-2 border-gray-700" />
              <div className="flex gap-6 items-start  mt-2">
                <p className="text-gray-500 flex gap-1 align-baseline  justify-center items-center">
                  {" "}
                  <FaClock /> {item.duration} min
                </p>
                <p className="text-gray-500 flex gap-1 align-baseline  justify-center items-center">
                  {" "}
                  <PiFireSimple /> {item.caloriesBurned} kcal
                </p>
                <p className="text-gray-500 flex gap-1 align-baseline  justify-center items-center">
                  {" "}
                  <FaRegStar /> {item.rating}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}
