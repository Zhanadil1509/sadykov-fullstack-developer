import clsx from "clsx";
import React from "react";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { arrNavBar } from "@/shared/constants";

export default function Footer() {
  return (
    <Bounded as="footer" className="text-slate-600">
      <div className="mx-auto flex flex-col items-center justify-between gap-6 py-8 sm:flex-row ">
        <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-yellow-400"
          >
            Zhanadil
          </Link>
          <span
            className="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline"
            aria-hidden={true}
          >
            /
          </span>
          <p className=" text-sm text-slate-300 ">
            © {new Date().getFullYear()} Zhanadil
          </p>
        </div>
        <nav className="navigation" aria-label="Footer Navigation">
          <ul className="flex items-center gap-1">
            {arrNavBar.map(({ link, label }, index) => (
              <React.Fragment key={label}>
                <li>
                  <Link
                    className={clsx(
                      "group relative block overflow-hidden  rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:hover:text-yellow-400",
                    )}
                    href={link}
                  >
                    {label}
                  </Link>
                </li>
                {index < arrNavBar.length - 1 && (
                  <span
                    className="text-4xl font-thin leading-[0] text-slate-400"
                    aria-hidden="true"
                  >
                    /
                  </span>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
        <div className="socials inline-flex justify-center sm:justify-end">
          <Link
            target="_blank"
            href="https://github.com/Zhanadil1509"
            className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
            aria-label={"Zhanadil on GitHub"}
          >
            <FaGithub />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/%D0%B6%D0%B0%D0%BD%D0%B0%D0%B4%D0%B8%D0%BB-%D1%81%D0%B0%D0%B4%D1%8B%D0%BA%D0%BE%D0%B2-a56b2791/"
            className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
            aria-label={"Zhanadil on LinkedIn"}
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </Bounded>
  );
}
