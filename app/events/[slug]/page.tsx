import DetailEventView from "./views";

// Mock
import EVENTS from "@/_mock/_events";

const DetailEvent = ({ params }: any) => {
  const { slug } = params;

  const event = EVENTS.find((event) => event.id == slug) || null;

  return <DetailEventView event={event} />;
};

export default DetailEvent;
