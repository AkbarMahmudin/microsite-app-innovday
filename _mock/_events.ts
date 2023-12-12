const EVENTS = [
  {
    id: 1,
    thumbnailUrl: "/images/valid thumbnail.png",
    title: "Innovation Day #1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content: `
				<p data-pm-slice="1 1 []">Hi, Sobat Innov!</p>
        <br>
        <p>Dalam merencanakan sebuah bisnis, tentunya diperlukan pitchdek dan pitching yang menarik agar bisnis yang kamu tawarkan bisa dilirik oleh banyak orang. Menariknya, kamu bisa belajar membuat pitchdek dan pitching yang impactful melalui design thinking, lho.</p>
        <br>
        <p>Ingin tahu lebih lanjut cara membuat impactful pitchdek dan pitching dengan design thinking?</p>
        <br>
        <p>Ayo saksikan tayangan Innovation Day pada <strong>Kamis, 16 November 2023 pukul 13.30-14.30 WIB</strong> bersama <strong>Tiawan, S. Kom., M. Kom.</strong> selaku <strong>Head of Information System at Horizon University Indonesia</strong> yang akan berbagi <em>insight</em> menarik tentang “<strong>How to Create Impactful Pitchdek and Pitching with DesignThinking</strong>” dengan didampingi <strong>Ridho Al-Harits</strong> selaku moderator.</p>
        <br>
        <p><span style="font-size: 15px; color: var( --e-global-color-text ); font-family: var( --e-global-typography-text-font-family ), Sans-serif;">Menangkan saldo LinkAja bagi yang beruntung!</span></p>
        <br>
        <p><em>Stay healthy, stay productive.</em><br><strong>Innovation Day,</strong><br><strong>Learn. Share. Innovate</strong></p>
      `,
    tags: ["innovation", "day"],
    publishedAt: "2021-01-01",
    speaker: "John Doe",
    moderator: "Jane Doe",
    startDate: "2021-01-01T09:00:00.000Z",
    endDate: "2021-01-01T12:00:00.000Z",
    // slidoId: "et1humAMJM1kAY6y6jxaQz",
    youtubeId: "https://www.youtube.com/embed/DeKtiUu0jZM",
    date: "2021-01-01",
    category: "Innovation Day",
  },
  {
    id: 2,
    thumbnailUrl: "/images/valid thumbnail.png",
    title: "Innovation Day #2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. Sed vitae nisi eget nunc ultricies aliquam.",
    tags: ["innovation", "day"],
    publishedAt: "2021-02-01",
    speaker: "John Doe",
    moderator: "Jane Doe",
    startDate: "2021-01-01T09:00:00.000Z",
    endDate: "2021-01-01T12:00:00.000Z",
    slidoId: "et1humAMJM1kAY6y6jxaQz",
    youtubeId: "v79I6c7fWtA",
    date: "2021-01-01",
    category: "Innovation Day",
  },
  {
    id: 3,
    thumbnailUrl: "/images/valid thumbnail.png",
    title: "Innovation Day #3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. Sed vitae nisi eget nunc ultricies aliquam.",
    tags: ["innovation", "day"],
    publishedAt: "2021-03-01",
    speaker: "John Doe",
    moderator: "Jane Doe",
    startDate: "2021-01-01T09:00:00.000Z",
    endDate: "2021-01-01T12:00:00.000Z",
    slidoId: "et1humAMJM1kAY6y6jxaQz",
    youtubeId: "v79I6c7fWtA",
    date: "2021-01-01",
    category: "Innovation Day",
  },
  {
    id: 4,
    thumbnailUrl: "/images/valid thumbnail.png",
    title: "Innovation Day #4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. Sed vitae nisi eget nunc ultricies aliquam.",
    tags: ["innovation", "day"],
    publishedAt: "2022-01-01",
    speaker: "John Doe",
    moderator: "Jane Doe",
    startDate: "2021-01-01T09:00:00.000Z",
    endDate: "2021-01-01T12:00:00.000Z",
    slidoId: "et1humAMJM1kAY6y6jxaQz",
    youtubeId: "v79I6c7fWtA",
    date: "2021-01-01",
    category: "Innovation Day",
  },
  {
    id: 5,
    thumbnailUrl: "/images/valid thumbnail.png",
    title: "Innovation Day #5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. Sed vitae nisi eget nunc ultricies aliquam.",
    tags: ["innovation", "day"],
    publishedAt: "2022-02-22",
    speaker: "John Doe",
    moderator: "Jane Doe",
    startDate: "2021-01-01T09:00:00.000Z",
    endDate: "2021-01-01T12:00:00.000Z",
    slidoId: "et1humAMJM1kAY6y6jxaQz",
    youtubeId: "v79I6c7fWtA",
    date: "2021-01-01",
    category: "Innovation Day",
  },
  {
    id: 6,
    thumbnailUrl: "/images/valid thumbnail.png",
    title: "Innovation Day #6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. Sed vitae nisi eget nunc ultricies aliquam.",
    tags: ["innovation", "day"],
    publishedAt: "2023-01-01",
    speaker: "John Doe",
    moderator: "Jane Doe",
    startDate: "2021-01-01T09:00:00.000Z",
    endDate: "2021-01-01T12:00:00.000Z",
    slidoId: "et1humAMJM1kAY6y6jxaQz",
    youtubeId: "v79I6c7fWtA",
    date: "2021-01-01",
    category: "In Talks",
  },
  {
    id: 7,
    thumbnailUrl: "/images/valid thumbnail.png",
    title: "Innovation Day #7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. Sed vitae nisi eget nunc ultricies aliquam.",
    tags: ["innovation", "day"],
    publishedAt: "2023-05-01",
    speaker: "John Doe",
    moderator: "Jane Doe",
    startDate: "2021-01-01T09:00:00.000Z",
    endDate: "2021-01-01T12:00:00.000Z",
    slidoId: "et1humAMJM1kAY6y6jxaQz",
    youtubeId: "v79I6c7fWtA",
    date: "2021-01-01",
    category: "In Talks",
  },
  {
    id: 8,
    thumbnailUrl: "/images/valid thumbnail.png",
    title: "Innovation Day #1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content: `
				<p data-pm-slice="1 1 []">Hi, Sobat Innov!</p>
        <br>
        <p>Dalam merencanakan sebuah bisnis, tentunya diperlukan pitchdek dan pitching yang menarik agar bisnis yang kamu tawarkan bisa dilirik oleh banyak orang. Menariknya, kamu bisa belajar membuat pitchdek dan pitching yang impactful melalui design thinking, lho.</p>
        <br>
        <p>Ingin tahu lebih lanjut cara membuat impactful pitchdek dan pitching dengan design thinking?</p>
        <br>
        <p>Ayo saksikan tayangan Innovation Day pada <strong>Kamis, 16 November 2023 pukul 13.30-14.30 WIB</strong> bersama <strong>Tiawan, S. Kom., M. Kom.</strong> selaku <strong>Head of Information System at Horizon University Indonesia</strong> yang akan berbagi <em>insight</em> menarik tentang “<strong>How to Create Impactful Pitchdek and Pitching with DesignThinking</strong>” dengan didampingi <strong>Ridho Al-Harits</strong> selaku moderator.</p>
        <br>
        <p><span style="font-size: 15px; color: var( --e-global-color-text ); font-family: var( --e-global-typography-text-font-family ), Sans-serif;">Menangkan saldo LinkAja bagi yang beruntung!</span></p>
        <br>
        <p><em>Stay healthy, stay productive.</em><br><strong>Innovation Day,</strong><br><strong>Learn. Share. Innovate</strong></p>
      `,
    tags: ["innovation", "day"],
    publishedAt: "2023-07-21",
    speaker: "John Doe",
    moderator: "Jane Doe",
    startDate: "2021-01-01T09:00:00.000Z",
    endDate: "2021-01-01T12:00:00.000Z",
    // slidoId: "et1humAMJM1kAY6y6jxaQz",
    youtubeId: "https://www.youtube.com/embed/DeKtiUu0jZM",
    date: "2021-01-01",
    category: "In Talks",
  },
  {
    id: 9,
    thumbnailUrl: "/images/valid thumbnail.png",
    title: "Innovation Day #2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. Sed vitae nisi eget nunc ultricies aliquam.",
    tags: ["innovation", "day"],
    publishedAt: "2023-10-23",
    speaker: "John Doe",
    moderator: "Jane Doe",
    startDate: "2021-01-01T09:00:00.000Z",
    endDate: "2021-01-01T12:00:00.000Z",
    slidoId: "et1humAMJM1kAY6y6jxaQz",
    youtubeId: "v79I6c7fWtA",
    date: "2021-01-01",
    category: "In News"
  },
  {
    id: 10,
    thumbnailUrl: "/images/valid thumbnail.png",
    title: "Innovation Day #3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. Sed vitae nisi eget nunc ultricies aliquam.",
    tags: ["innovation", "day"],
    publishedAt: "2023-10-01",
    speaker: "John Doe",
    moderator: "Jane Doe",
    startDate: "2021-01-01T09:00:00.000Z",
    endDate: "2021-01-01T12:00:00.000Z",
    slidoId: "et1humAMJM1kAY6y6jxaQz",
    youtubeId: "v79I6c7fWtA",
    date: "2021-01-01",
    category: "Telkom"
  },
  {
    id: 11,
    thumbnailUrl: "/images/valid thumbnail.png",
    title: "Innovation Day #4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. Sed vitae nisi eget nunc ultricies aliquam.",
    tags: ["innovation", "day"],
    publishedAt: "2023-11-01",
    speaker: "John Doe",
    moderator: "Jane Doe",
    startDate: "2021-01-01T09:00:00.000Z",
    endDate: "2021-01-01T12:00:00.000Z",
    slidoId: "et1humAMJM1kAY6y6jxaQz",
    youtubeId: "v79I6c7fWtA",
    date: "2021-01-01",
    category: "Telkom"
  },
  {
    id: 12,
    thumbnailUrl: "/images/valid thumbnail.png",
    title: "Innovation Day #5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. Sed vitae nisi eget nunc ultricies aliquam.",
    tags: ["innovation", "day"],
    publishedAt: "2023-12-01",
    speaker: "John Doe",
    moderator: "Jane Doe",
    startDate: "2021-01-01T09:00:00.000Z",
    endDate: "2021-01-01T12:00:00.000Z",
    slidoId: "et1humAMJM1kAY6y6jxaQz",
    youtubeId: "v79I6c7fWtA",
    date: "2021-01-01",
    category: "Telkom"
  },
  {
    id: 13,
    thumbnailUrl: "/images/valid thumbnail.png",
    title: "Innovation Day #6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. Sed vitae nisi eget nunc ultricies aliquam.",
    tags: ["innovation", "day"],
    publishedAt: "2023-12-12",
    speaker: "John Doe",
    moderator: "Jane Doe",
    startDate: "2021-01-01T09:00:00.000Z",
    endDate: "2021-01-01T12:00:00.000Z",
    slidoId: "et1humAMJM1kAY6y6jxaQz",
    youtubeId: "v79I6c7fWtA",
    date: "2021-01-01",
    category: "Founder Backroom"
  },
  {
    id: 14,
    thumbnailUrl: "/images/valid thumbnail.png",
    title: "Innovation Day #7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. Sed vitae nisi eget nunc ultricies aliquam.",
    tags: ["innovation", "day"],
    publishedAt: "2023-12-25",
    speaker: "John Doe",
    moderator: "Jane Doe",
    startDate: "2021-01-01T09:00:00.000Z",
    endDate: "2021-01-01T12:00:00.000Z",
    slidoId: "et1humAMJM1kAY6y6jxaQz",
    youtubeId: "v79I6c7fWtA",
    date: "2021-01-01",
    category: "Founder Backroom"
  },
];

export default EVENTS;
