import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login to Blogs",
  description: "Login to get access to amazingly written blogs!"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
