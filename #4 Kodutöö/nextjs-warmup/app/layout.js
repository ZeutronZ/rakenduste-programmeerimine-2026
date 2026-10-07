import "./globals.css";

export const metadata = {
  title: "Next.js Warm-up",
  description: "A small introduction to pages, client components, and route handlers in Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
