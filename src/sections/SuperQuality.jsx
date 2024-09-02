import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SpecialQuality = () => {
  return (
    <section
      id="about us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <p className="text-4xl font-montserrat text-coral-red">
          Our summer Collection
        </p>
        <h3 className="mt-10 font-palanquin text-3xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            the new arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3 ">nike</span>shoes
        </h3>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm ">
          discoer
        </p>
        <div className="w-fit">
          <Button label="view details" />
        </div>
      </div>
      <div className="flex justify-center items-center flex-1">
        <img src={shoe8} width={517} height={522} className="object-contain" alt="" />

      </div>
    </section>
  );
};

export default SpecialQuality;
