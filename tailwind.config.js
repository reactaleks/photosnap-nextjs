/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmsans: 'DM Sans'
      },
      fontSize: {
        heading: '40px',
        headingm: '24px',
        headings: '18px',
        headingxs: '12px',
        main_body: '15px',
      },
      lineHeight: {
        heading: '48px',
        headingm: '25px',
        headings: '25px',
        headingxs: '16px',
        main_body: '16px',
      },
    },
  },
  plugins: [],
};
