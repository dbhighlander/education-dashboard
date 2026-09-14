"use client";

import Image from "next/image";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 60,
    absent: 40,
  },
  {
    name: "Tue",
    present: 70,
    absent: 60,
  },
  {
    name: "Wed",
    present: 90,
    absent: 75,
  },
  {
    name: "Thu",
    present: 90,
    absent: 75,
  },
  {
    name: "Fri",
    present: 45,
    absent: 80,
  },
];

export default function AttendanceChart() {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="text-lg font-semibold">
        <h1>Attendances</h1>
        <Image src="/moreDark.png" width={20} height={20} alt="" />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data} width={500} height={300} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "d1d5db" }}
            tickLine={false}
          />
          <YAxis tick={{ fill: "d1d5db" }} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: 10, borderColor: "lightgray" }}
          />
          <Legend
            verticalAlign="top"
            align="left"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "30px" }}
          />
          <Bar
            dataKey="present"
            fill="#FAE27C"
            radius={[10, 10, 0, 0]}
            legendType="circle"
          />
          <Bar
            dataKey="absent"
            fill="#C3EBFA"
            radius={[10, 10, 0, 0]}
            legendType="circle"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
