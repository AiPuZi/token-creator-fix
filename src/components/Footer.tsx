import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
export const Footer: FC = () => {
  return (
    <div className="relative mt-8">
      <footer className="border-t-2 border-[#141414] bg-black hover:text-white absolute w-full">
        <div className="ml-12 py-12 mr-12">
          <div className="flex justify-center">
              <div className="mb-6 items-center mx-auto max-w-screen-lg">
                <div className="font-normal capitalize tracking-tight mb-2.5 text-center">
                FEE=0.1SOL
                </div>
                <h5 className="font-normal capitalize tracking-tight  mb-2.5">
                  MADE BY 1A1ZCOIN
                </h5>
                
                <div className="flex justify-between mb-0 gap-2">
                  <Link
                    href="https://twitter.com/1A1zcoin"
                    target="_blank"
                    rel="noopener noreferrer"
                    passHref
                    className="text-secondary hover:text-white"
                  >
                    Twitter
                  </Link>
                  <Link
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    passHref
                    className="text-secondary hover:text-white"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>
      </footer>
    </div>
  );
};
