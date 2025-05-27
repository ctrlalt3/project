import "./globals.css";

export const metadata = {
  title: "Fire",
  description: "Music for everyone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
