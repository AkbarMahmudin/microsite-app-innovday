import { BeOurSpeaker, Hero, LatestEvent, OurEvents, OurReviews, OurVision, RegistSpeaker } from "./sections";

export default function Home() {
  return (
    <main className="py-24 flex flex-col gap-12">
      <Hero />
      <OurEvents />
      <LatestEvent />
      <OurVision />
      <BeOurSpeaker />
      <OurReviews />
      <RegistSpeaker />
    </main>
  );
}
