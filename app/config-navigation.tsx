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
      path: paths.event.root,
      children: [
        {
          title: "Innovation Day",
          path: paths.innovationDay,
        },
        {
          title: "InTalks",
          path: paths.inTalks,
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
