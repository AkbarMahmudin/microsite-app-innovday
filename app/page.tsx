"use client";

import { Hero, LatestEvent, OurEvents } from "./sections";

export default function Home() {
  return (
    <main className="py-24">
      <Hero />
      <OurEvents />
      <LatestEvent />
    </main>
  );
}
