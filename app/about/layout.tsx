import Header from "../../components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header text="About" overrideLinks={{ secondLinkHref: "results" }} />
      <main>{children}</main>
    </>
  );
}
