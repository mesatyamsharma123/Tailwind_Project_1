import React from "react";
import book from "../../assets/book.avif";
function Sign() {
  return (
    <section>
      <div className="flex h-screen  items-center justify-center w-screen ">
        <div className="bg-slate-700  flex flex-col md:flex-row mx-6 rounded-2xl p-3 ">
          <img
            className="object-fit h-90  transition duration-700 transform hover:scale-105 rounded-xl md:h-70 bg-slate-500 sepia-500 dark:sepia-50 backdrop-grayscale"
            src={book}
          />
          <div className="p-5 md:p-12">
            <h2 className="text-xl md:text-2xl font-medium text-center dark:text-white">
              Knowledge is the Most Power Full Thing{" "}
            </h2>

            <p className="max-w-xs my-4 md:mx-2 leading-5 tracking-wide text-black dark:text-white font-normal text-md text-center md:text-left">
              {" "}
              Education is the key of success
            </p>
            <div className=" flex flex-col md:flex-row mt-5 space-y-4 md:space-x-3 md:space-y-0">
            <input
              className="
              md:w-xs dark:text-white
    md:placeholder:text-left
    p-4 bg-white placeholder:text-slate-900 dark:placeholder:text-white placeholder:text-center dark:bg-slate-800 rounded-xl"
              type="text"
              placeholder="Enter your E-mail@gmail.com"
            ></input>
            <button className=" dark:text-white md:w-30 bg-lime-700 rounded-xl hover:bg-lime-500 p-3">Submit</button>
          </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Sign;
