"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative w-full h-full flex flex-col sm:flex-row gap-4 items-start justify-between pt-2 px-2">
      <div className="relative w-full h-full flex items-center justify-center text-center">
        <div className="relative w-fit h-fit flex text-white text-xs">
          But geev it time... it’s coming zoon, ye’ll see!
        </div>
      </div>
    </div>
  );
}
