import "../../globals.css";
import Navbar from "../../components/Navbar";
import Form from "@/app/components/Form";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar/>
        <Form/>
        {children}
      </body>
    </html>
  );
}
