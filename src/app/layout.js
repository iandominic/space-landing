import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Space Landing",
  description: "From: Frontend Mentor",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
