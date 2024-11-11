"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";
import ShowCaseChart from "../_components/ShowCaseChart";
import { DollarSign, TrendingDown, CheckCircle } from "lucide-react";
import { PiggyBank, BarChart, Shield } from "lucide-react";
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
          className="mb-8 flex flex-col items-center text-center"
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
            Plan Your Finances with Ease
          </motion.h1>
          <motion.p
            className="mb-6 text-2xl text-teal-400 transition-transform duration-300 ease-in-out hover:translate-x-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            "Keep track of what to pay"
          </motion.p>
          <motion.button
            className="btn btn-wide mb-6 rounded-lg bg-teal-400 px-6 py-2 text-lg font-semibold text-gray-800 shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-teal-300"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(45, 212, 191, 0.8)",
            }}
            transition={{ duration: 0.3 }}
          >
            <a href="#Stats" className="text-gray-800 no-underline">
              Start Planning Now! ⚡
            </a>
          </motion.button>
        </motion.div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Cell 1 */}
          <Card className="w-full rounded-lg shadow-md">
            <CardHeader>
              <CardTitle className="text-center">Spending Breakdown</CardTitle>
              <ShowCaseChart2 />
            </CardHeader>
          </Card>

          {/* Cell 2 */}
          <Card className="w-full rounded-lg shadow-md">
            <CardHeader>
              <CardTitle className="text-center">Monthly Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <DollarSign className="h-6 w-6 text-green-500" />
                  <p>Highest Expense: Car Leasing at $149</p>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingDown className="h-6 w-6 text-red-500" />
                  <p>Lowest Expense: Prime Subscription at $9</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500" />
                  <p>Budget-Friendly Month: Under $500 total</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cell 3 */}
          <Card className="w-full rounded-lg shadow-md">
            <CardHeader>
              <CardTitle className="text-center">Goals & Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <PiggyBank className="h-6 w-6 text-pink-500" />
                  <p>Savings Goal: 70% complete!</p>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-indigo-500" />
                  <p>Emergency Fund: $200 to reach target</p>
                </div>
                <div className="flex items-center gap-3">
                  <BarChart className="h-6 w-6 text-orange-500" />
                  <p>Debt Reduction: 30% complete!</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Big Cell */}
          <div className="flex items-center justify-center md:col-span-3">
            <Card className="w-full rounded-lg shadow-lg">
              <CardHeader>
                <CardTitle className="text-center">
                  Financial Overview
                </CardTitle>
                <CardDescription className="text-center">
                  January - June 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ShowCaseChart />
              </CardContent>
              <CardFooter className="text-center text-sm">
                <p className="text-muted-foreground">
                  Showing total visitors for the last 6 months
                </p>
                <div className="mt-2 flex items-center justify-center gap-2 font-medium leading-none">
                  Trending up by 5.2% this month{" "}
                  <TrendingUp className="h-4 w-4 text-green-500" />
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
