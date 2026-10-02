export const metadata = {
  title: "VYRO",
  description: "Watch. Create. Connect.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
