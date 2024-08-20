import "./globals.css";

export const metadata = {
  title: "Photosnap - Project",
  description: "Photosnap was created as part of front end mentor challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='font-dmsans'>{children}</body>
    </html>
  );
}
