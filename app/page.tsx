import {
  BeOurSpeaker,
  Hero,
  LatestEvent,
  OurEvents,
  OurReviews,
  OurSocialMedia,
  OurVision,
  RegistSpeaker,
} from "./sections";

export default function Home() {
  return (
    <>
      <Hero />
      <OurEvents />
      <LatestEvent />
      <OurVision />
      <BeOurSpeaker />
      <OurReviews />
      <RegistSpeaker />
      <OurSocialMedia />
    </>
    // <main className="py-24 flex flex-col gap-12">
    // </main>
  );
}
