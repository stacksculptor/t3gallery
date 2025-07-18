import "~/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <main className="flex flex-col text-white">{children}</main>;
}
