// components/HeroSection.js
import React from "react";
import logo from "../../assets/tth_logo.jpg";

function HeroSection() {
  return (
    <section className="mt-[clamp(12px,4.23vw,65px)] mb-[clamp(42px,4.23vw,65px)] text-center flex flex-col">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        The world's first <br /> watch trading platform
      </h1>
      <p className="font-medium md:max-w-[55ch] leading-[110%] w-full mx-auto mt-4 md:mt-6">
        Experience frictionless on-chain trading, guaranteed watchmaker-verified
        authenticity, and ultra-fast shipping for thousands of watches.
      </p>
      <div className="mt-[clamp(12px,4.23vw,65px)] mb-[clamp(42px,4.23vw,65px)] text-center flex flex-col gap-4 items-center">
        <button className="px-2 select-none flex bg-white text-black items-center min-h-[32px] justify-center rounded scale-1 group/btn transition-all duration-75 border-none outline-none ring-[1px] ring-new-stroke-1 md:enabled:hover:shadow-[0px_0px_30px_rgba(255,255,255,0.24)] md:enabled:hover:text-new-stroke-2 enabled:hover:shadow-[0px_0px_30px_rgba(255,255,255,0.24)] md:enabled:hover:ring-[2px] enabled:hover:ring-[2px] md:enabled:hover:ring-new-stroke-1 enabled:hover:ring-new-stroke-1 md:enabled:active:ring-white enabled:active:ring-white enabled:active:shadow-[0px_0px_24px_rgba(255,255,255,0.10)] md:enabled:active:shadow-[0px_0px_34px_rgba(255,255,255,0.10)] active:scale-[0.98] enabled:active:ring-[0px] md:enabled:active:ring-[0px] disabled:text-new-t-tertiary-disabled disabled:bg-new-card-overlay disabled:cursor-not-allowed disabled:ring-[1px] disabled:ring-new-stroke-1 h-[clamp(32px,2.51vw,38px)] w-full max-w-[386px] mx-2 md:flex gap-1 active:translate-y-0 hover:scale-105 hover:translate-y-[-5%] hover:shadow-[0px_0px_30px_rgba(255,255,255,0.44)]">
          <p className="font-bold uppercase text-[clamp(10px,0.79vw,12px)] font-primary">
            Shop Now
          </p>
        </button>
        <div className="flex flex-col max-w-[320px] w-full items-center relative">
          <div className="[-webkit-mask-image:linear-gradient(90deg, rgba(255,255,255,0)_0%,rgba(0,0,0,1)_14%,rgba(0,0,0,1)_86%,rgba(255,255,255,0)_100%)] [mask-image:linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(0,0,0,1)_14%,rgba(0,0,0,1)_86%,rgba(255,255,255,0)_100%)] w-[60%] inset-0 absolute m-auto h-full border-y border-dashed border-[#303030] pointer-events-none z-[0]"></div>
          <div className="h-[46px] w-full flex items-center justify-center">
            <div className="px-2 h-[37.42px] rounded">
            <span>
              <img
                className="block max-w-full w-10 h-10 bg-none opacity-100 border-0 m-0 p-0"
                src={logo}
                alt=""
              />
            </span>
            </div>
            <p className="text-[clamp(10px,0.92vw,14px)] italic text-white font-medium">
              <b>1,000+</b> watches listed!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
