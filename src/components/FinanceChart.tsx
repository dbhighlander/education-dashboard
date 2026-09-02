"use client";
import Image from "next/image";
import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 590,
    expense: 800,
  },
  {
    name: "Feb",
    income: 590,
    expense: 800,
  },
  {
    name: "Mar",
    income: 868,
    expense: 967,
  },
  {
    name: "Apr",
    income: 1397,
    expense: 1098,
  },
  {
    name: "May",
    income: 1480,
    expense: 1200,
  },
  {
    name: "Jun",
    income: 1520,
    expense: 1108,
  },
  {
    name: "Jul",
    income: 1400,
    expense: 680,
  },
  {
    name: "Aug",
    income: 1400,
    expense: 680,
  },
  {
    name: "Sep",
    income: 1400,
    expense: 680,
  },
  {
    name: "Oct",
    income: 1400,
    expense: 680,
  },
  {
    name: "Nov",
    income: 1400,
    expense: 680,
  },
  {
    name: "Dec",
    income: 1400,
    expense: 680,
  },
];

export default function FinanceChart() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center ">
        {/* TITLE */}
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer height="100%" width="100%">
        <LineChart
          data={data}
          height={300}
          margin={{
            bottom: 5,
            left: 20,
            right: 30,
            top: 5,
          }}
          width={500}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            axisLine={false}
            tick={{ fill: "d1d5db" }}
            tickLine={false}
            dataKey="name"
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "d1d5db" }}
            tickLine={false}
            tickMargin={20}
          />
          <Legend
            verticalAlign="top"
            align="center"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "30px" }}
          />
          <Tooltip />
          <Line
            strokeWidth={5}
            dataKey="income"
            stroke="#C3EBFA"
            type="monotone"
          />
          <Line dataKey="expense" stroke="#CFCEFF" type="monotone" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
