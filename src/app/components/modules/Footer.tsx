import { usePathname } from "next/navigation";
import Marquee from "./Marquee";

export default function Footer() {
  const path = usePathname();

  return path?.includes("djorra") ? (
    <></>
  ) : (
    <div className="relative bottom-0 left-0 w-full h-fit flex">
      <Marquee />
    </div>
  );
}
