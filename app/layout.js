import "./globals.css";
import Navigation from "@/components/nav_component/NavComponent";

export const metadata = {
  title: "Photosnap - Project",
  description: "Photosnap was created as part of front end mentor challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='font-dmsans'>
        <Navigation/>
        {children}
        
        
        </body>
    </html>
  );
}
