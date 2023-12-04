import EVENTS from '@/_mock/_events';
import React from 'react'
import { useNavData } from './useNavData';

const useCommand = () => {
  const navData = useNavData();

  const [open, setOpen] = React.useState(false);
  const [events, setEvents] = React.useState<any[]>([]);

  const handleSearch = (value: string) => {
    if (!value) return setEvents([]);

    const results = EVENTS.filter((event) => {
      return event.title.toLowerCase().includes(value.toLowerCase());
    });

    setEvents(results);
  };

  const handleOpenChange = () => {
    setOpen((prev) => !prev);
    setEvents([]);

    return setOpen
  };

  return {
    open,
    setOpen,
    navData,
    eventData: events,
    handleSearch,
    handleOpenChange,
  }
}

export default useCommand