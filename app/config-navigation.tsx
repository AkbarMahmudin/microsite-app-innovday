import { useMemo } from "react";

import { paths } from "./(routes)/paths";

export const useNavData = () => {
  const navData = useMemo(() => [
    {
      title: "Home",
      path: paths.home,
    },
    {
      title: "Our Events",
      path: paths.events.root,
      children: [
        {
          title: "All Events",
          path: paths.events.root,
          description: "Lihat semua event yang akan datang",
        },
        {
          title: "Innovation Day",
          path: paths.innovationDay,
          description: "Event knowledge sharing dengan para ahli",
        },
        {
          title: "InTalks",
          path: paths.inTalks,
          description: "Podcast yang membahas beragam topik menarik",
        },
      ],
    },
    {
      title: "Be Our Speaker",
      path: paths.speaker,
    },
    {
      title: "FAQ",
      path: paths.faq,
    },
    {
      title: "Contact Us",
      path: paths.contact,
    },
  ], []);

  return navData;
}
