import "./globals.css";
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "CodeCamp",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" h-dvh">{children}</body>
    </html>
  );
}
