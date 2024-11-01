"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";
import ShowCaseChart from "../_components/ShowCaseChart";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart";

type Props = {};

function LandingPage({}: Props) {
  return (
    <div className="mx-auto flex max-w-7xl overflow-hidden text-gray-300 accent-teal-400 selection:bg-teal-400/50">
      <div className="container mx-auto flex h-screen flex-col space-x-5 p-5 lg:flex-row">
        {/* Left Section */}
        <motion.div
          className="flex w-full flex-col items-center justify-center md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="mb-10 flex w-full flex-col items-center px-4 text-center lg:mb-0 lg:w-full lg:items-start lg:text-left">
            <motion.h1
              className="mb-4 text-6xl font-extrabold tracking-tight text-gray-300 transition-transform duration-500 ease-in-out hover:translate-x-2 sm:text-7xl md:text-8xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              Plan your finance in an Easy Way
            </motion.h1>
            <motion.p
              className="mb-8 text-2xl text-teal-400 transition-transform duration-300 ease-in-out hover:translate-x-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              "keep track of what to pay"
            </motion.p>
            <motion.button
              className="btn btn-wide mb-4 rounded-lg bg-teal-400 px-6 py-2 text-lg font-semibold text-gray-800 shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-teal-300"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(45, 212, 191, 0.8)",
              }}
              transition={{ duration: 0.3 }}
            >
              <a href="#Stats" className="text-gray-800 no-underline">
                Plan Now! ⚡
              </a>
            </motion.button>
            <motion.p
              className="text-sm text-teal-400 transition-transform duration-300 ease-in-out hover:translate-x-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Improve! 🚀
            </motion.p>
          </div>
        </motion.div>

        {/* Right Section that shocase the chart*/}

        <motion.div
          className="relative flex w-full items-center justify-center md:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <ShowCaseChart />
        </motion.div>
      </div>
    </div>
  );
}

export default LandingPage;
