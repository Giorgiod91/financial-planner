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
import { ShowCaseChart2 } from "./ShowCaseChart2";

type Props = {};

function LandingPage({}: Props) {
  return (
    <div className="mx-auto flex max-w-7xl overflow-hidden text-gray-300 accent-teal-400 selection:bg-teal-400/50">
      <div className="container mx-auto flex h-screen flex-col space-y-10 p-5">
        {/* Text Section */}
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
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
            "Keep track of what to pay"
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
        </motion.div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* First Row: 3 Equal Cells */}
          <div className="flex items-center justify-center">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>
                  Cell 1
                  <ShowCaseChart2 />
                </CardTitle>
              </CardHeader>
              <CardContent>{/* content  */}</CardContent>
            </Card>
          </div>
          <div className="flex items-center justify-center">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Cell 2</CardTitle>
              </CardHeader>
              <CardContent>{/* Your content here */}</CardContent>
            </Card>
          </div>
          <div className="flex items-center justify-center">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Cell 3</CardTitle>
              </CardHeader>
              <CardContent>{/* Your content here */}</CardContent>
            </Card>
          </div>

          {/* Second Row: One Big Cell */}
          <div className="flex items-center justify-center md:col-span-3">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Big Cell</CardTitle>
              </CardHeader>
              <CardContent>
                <ShowCaseChart />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
