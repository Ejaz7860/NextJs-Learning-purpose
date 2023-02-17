import Header from "../app/navbar/page";
export default function RootLayout({ children }) {
  return (
    <html>
      <head />

      <body>
        {" "}
        <Header />
        {children}
      </body>
    </html>
  );
}
