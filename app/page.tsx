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
  );
}
