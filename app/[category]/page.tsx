import EventView from "./views";

type Props = {
  params: {
    category: string;
  };
};

const Events = ({ params }: Props) => {
  return (
    <>
      <EventView category={params.category} />
    </>
  );
};

export default Events;
