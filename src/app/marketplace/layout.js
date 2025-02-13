import React from "react"; // Import React


export const metadata = {
  title: "Exclusive - E-commerce",
  description: "Your one-stop shop for all things exclusive",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

