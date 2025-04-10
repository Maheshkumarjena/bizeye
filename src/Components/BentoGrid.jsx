"use client";
import { cn } from "@/lib/utils";
import { useState,useEffect } from "react";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/Components/ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import Image from "next/image";
import { Typography, Box } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PieChartCard from "./ui/pieChart";
import LineChartCard from "./ui/LineChart";

// import Box from "@mui/material";
import LightbulbIcon from '@mui/icons-material/Lightbulb';


export default function BentoGridThirdDemo() {




  return (
    <BentoGrid className="max-w-full gap-[2vw] p-4 mx-auto mx-auto grid-cols-1  md:grid-cols-3 gap-4 md:auto-rows-[23rem] h-[100px] min-h-fit  sm:grid-cols-2 ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon} />
      ))}
    </BentoGrid>
  );
}

const percentage = 78;
  const labels = ['Tax', 'Operations', 'Marketing', 'Cash Flow'];
  const data = [20, 30, 15, 35];
  const colors = ['black', 'gray', 'lightgray', 'silver'];

  const LineChartlabels = ['1', '2', '3', '4', '5'];
  const data1 = [80, 10, 50, 10, 70];
  const data2 = [75, 20, 65, 40, 90];
  const label1 = '1st W';
  const label2 = '2nd W';

const items = [
  {
    title: "AI Content Generation",
    description: (
      <span className="text-sm">
        Experience the power of AI in generating unique content.
      </span>
    ),
    header: (
      // profit and loss
      <div className="bg-[#282828]  text-white rounded-lg p-4 w-full max-w-[350px] text-left">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-white rounded-lg mr-3 flex justify-center items-center text-black font-bold text-lg">
          M
        </div>
        <div>
          <Typography variant="subtitle1" className="text-sm md:text-base">
            Total Business
          </Typography>
          <Typography variant="caption" className="text-xs">
            Last Months
          </Typography>
        </div>
      </div>
      <Typography variant="h4" className="font-bold mb-4 text-2xl md:text-3xl lg:text-4xl">
        ₹ 9,328.55
      </Typography>
      <div className="flex justify-between">
        <div className="flex items-center">
          <ArrowUpwardIcon className="text-green-500 text-sm md:text-base" />
          <Typography variant="body2" className="ml-1 text-sm md:text-base">
            1,50,265
          </Typography>
        </div>
        <div className="flex items-center">
          <ArrowDownwardIcon className="text-red-500 text-sm md:text-base" />
          <Typography variant="body2" className="ml-1 text-sm md:text-base">
            1,40,936
          </Typography>
        </div>
      </div>
    </div>),
    className: "md:col-span-1 flex flex-col items-center",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },


  {
    title: "Automated Proofreading",
    description: (
      <span className="text-sm">
        Let AI handle the proofreading of your documents.
      </span>
    ),
    header: (
      // recommendation
      <div className="bg-gray-300 rounded-lg p-4 w-full  max-w-[350px] text-center shadow-md">
      <div className="flex items-center w-full justify-center mb-4">
        <div className="w-10 h-10 bg-gray-100 rounded-lg flex justify-center items-center mr-2">
          <LightbulbIcon className="text-black" />
        </div>
      </div>
      <Typography variant="h6" className="font-bold text-lg mb-2">
        Recommendation
      </Typography>
      <Typography variant="h2" className="font-bold text-4xl mb-4">
        5
      </Typography>
      <Typography variant="body2" className="text-blue-600 font-semibold">
        Check Recommendation
      </Typography>
    </div>

    ) ,
    className: "md:col-span-1 flex flex-col items-center",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Contextual Suggestions",
    description: (
      <span className="text-sm">
        Get AI-powered suggestions based on your writing context.
      </span>
    ),
    header: (
    // Bussiness growth 
    <div className="bg-white rounded-lg p-4 w-full max-w-[350px] text-center shadow-md">
    <div className="flex items-center justify-center mb-4">
      <div className="w-10 h-10 bg-gray-100 rounded-lg flex justify-center items-center mr-2">
        <TrendingUpIcon className="text-black transform rotate-45" /> {/* Rotate the icon */}
      </div>
    </div>
    <Typography variant="h6" className="font-bold text-lg mb-2">
      Business Growth
    </Typography>
    <Typography variant="h4" className="font-bold text-3xl mb-4 text-orange-500">
      Good
    </Typography>
    <div className="flex justify-around">
      <div className="flex items-center">
        <TrendingDownIcon className="text-red-500" />
        <Typography variant="body2" className="ml-1 text-sm">
          -12.7%
        </Typography>
      </div>
      <div className="flex items-center">
        <TrendingUpIcon className="text-green-500" />
        <Typography variant="body2" className="ml-1 text-sm">
          25.0%
        </Typography>
      </div>
    </div>
  </div>
    ),
    className: "md:col-span-1 flex flex-col items-center",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  

  {
    title: "Text Summarization",
    description: (
      <span className="text-sm">
        Summarize your lengthy documents with AI technology.
      </span>
    ),
    header:     <PieChartCard percentage={percentage} labels={labels} data={data} colors={colors} />
,
    className: "md:col-span-1 flex flex-col items-center",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  
  {
    title: "Sentiment Analysis",
    description: (
      <span className="text-sm">
        Understand the sentiment of your text with AI analysis.
      </span>
    ),
    header:     <LineChartCard labels={LineChartlabels} data1={data1} data2={data2} label1={label1} label2={label2} />
    ,
    className: "  sm:col-span-2 flex flex-col items-start min-h-fit",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
