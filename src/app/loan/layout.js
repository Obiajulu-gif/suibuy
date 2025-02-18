
export const metadata = {
    title: "Suibuy Lending Platform",
    description: "Crypto lending and borrowing platform",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="">
                <main>{children}</main>
            </body>
        </html>
    );
}
