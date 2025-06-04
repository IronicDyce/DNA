
import "./globals.css";

export const metadata = {
  title: "Degens Need Ass",
  description: "it's in our DNA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
