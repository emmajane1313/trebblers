import { FunctionComponent, JSX } from "react";
import MarqueeText from "react-fast-marquee";

const Marquee: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative bottom-0 left-0 w-full h-fit flex flex-col z-20">
      <div className="relative w-full bg-azul h-3"></div>
      <div className="relative w-full bg-white h-3"></div>
      <div className="relative w-full bg-red h-3"></div>
      <div className="relative w-full h-10 border-y border-white flex flex-row bg-black">
        <MarqueeText gradient={false} speed={70} direction={"right"}>
          {Array.from({ length: 30 }).map((_, index: number) => {
            return (
              <span className="relative text-xs text-white px-5" key={index}>
                Mah neym, vell, it’s Emma-Jane MacKinnon-Lee, nu? Ah’m fae da
                MacKinnon clan, ken? Noo, ah’m tryin tae pick up dis
                Scots-Yiddish business, oy vey iz mir!
              </span>
            );
          })}
        </MarqueeText>
      </div>
      <div className="relative w-full bg-cielo h-3"></div>
      <div className="relative w-full bg-oro h-3"></div>
      <div className="relative w-full bg-rojo h-3"></div>
    </div>
  );
};

export default Marquee;
