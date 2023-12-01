export const response = {
  "no-data-found": {
    title: (section: string) => `Oops! ${section} Tidak Ditemukan`,
    description: `
    <p style="line-height: 2;"><b>Jangan khawatir</b>, Sobat Innov dapat mencoba pencarian lain dengan mengikuti beberapa tips dan rekomendasi berikut ini:</p>
    <ul style="list-style-type: disc; padding-left: 20px;">
    <li style="padding: 4px 0;">Periksa kembali kesalahan penulisan kata kunci.</li>
    <li style="padding: 4px 0;">Coba kata kunci yang lebih umum atau spesifik.</li>
    <li style="padding: 4px 0;">Periksa kembali filter pencarian Sobat Innov.</li>
    </ul>
    `,
    cta: {
      helper: "Sobat Innov juga dapat menghubungi tim dukungan kami untuk bantuan lebih lanjut.",
      label: "Contact Us",
      url: "/contact",
    },
  },
};
