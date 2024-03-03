"use client";

import React from 'react'
import { SparklesCore } from '@/components/ui/sparkles';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { Button } from '@mui/material';

function Home() {
  return (
    <main>
      <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
        <h1 className="md:text-7xl lg:text-8xl xl:text-8xl text-8xl font-bold text-center text-white relative z-20">
          <TypewriterEffect words={[{ text: "Aceternity" }]} />
        </h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
        <Button href='https://ui.aceternity.com' target='_blank' variant='outlined' size="medium" sx={{ my: 2, zIndex: 50 }}>Go to Official Website</Button>
      </div>

      <BackgroundBeams />
    </main>
  )
}

export default Home