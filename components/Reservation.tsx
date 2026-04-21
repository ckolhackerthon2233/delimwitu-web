"use client";

/**
 * Reservation – Book-a-table section: dark card with heading and ReservationForm.
 * Section fades in on scroll; inner card has a slight delay for staggered effect.
 */
import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import ReservationForm from "./ReservationForm";

export default function Reservation() {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="xl:my-32 xl:h-[1020px] xl:bg-reservation xl:bg-no-repeat xl:flex xl:flex-col xl:justify-end xl:items-end"
      id="reservation"
    >
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="bg-black w-full xl:max-w-[868px] min-h-[518px] p-8 md:p-14 xl:p-16"
      >
        <h2 className="text-white mb-9 capitalize">Book a table</h2>
        <ReservationForm />
      </motion.div>
    </motion.section>
  );
}
