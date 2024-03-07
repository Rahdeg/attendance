import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
    return (
        <Link href="/">
            <div className="flex items-center lg:gap-x-4 hover:opacity-75 transition">
                <div className=" bg-white rounded-full p-1 mr-2 lg:mr-0 shrink-0 lg:shrink">
                    <Image src="/spooky.jpg" alt="logo" height={32} width={32} />
                </div>
                <div className={cn("", font.className)}>
                    <p className=" text-lg font-semibold text-black">
                        FRBAS
                    </p>
                    <p className=" text-xs  text-white">
                        Let&apos;s count
                    </p>
                </div>
            </div>
        </Link>
    );
};