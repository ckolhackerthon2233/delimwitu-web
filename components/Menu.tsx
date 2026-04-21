"use client";

/**
 * Menu – Displays featured dishes in a responsive grid.
 * Data from data/menu.ts (img, title, price). Hover scales image via group-hover.
 */
import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { menuItems } from "@/data/menu";

export default function Menu() {
  return (
    <section
      className="relative py-12 xl:py-24 bg-menu"
      id="menu"
    >
      <div className="container mx-auto">
        {/* Section title + "View all" link; animates from left */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="max-w-[570px] mx-auto text-center xl:text-right"
        >
          <h2 className="mb-3">Favorite Menu</h2>
          <Link
            href="/"
            className="text-green flex justify-center xl:justify-end items-center mb-16"
          >
            View all
            <IoIosArrowRoundForward className="text-3xl" />
          </Link>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 gap-[30px] md:grid-cols-3 md:gap-[15px] xl:grid-cols-4"
        >
          {menuItems.map((item) => (
            <div
              key={item.title}
              className="max-w-[270px] bg-white shadow-primary mx-auto xl:mx-0 group"
            >
              <div className="overflow-hidden">
                <Image
                  src={item.img}
                  width={270}
                  height={270}
                  alt={item.title}
                  className="group-hover:scale-110 transition-all duration-300"
                />
              </div>
              <div className="pt-[20px] pb-[28px] px-[30px]">
                <Link href="/">
                  <h3 className="font-poppins text-black mb-[14px]">
                    {item.title}
                  </h3>
                </Link>
                <div className="text-xl font-poppins font-semibold text-orange">
                  {item.price}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
