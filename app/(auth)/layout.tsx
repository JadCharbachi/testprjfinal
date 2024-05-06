import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import '../globals.css';


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children } : { children: React.ReactNode }) {
    return (
        <html>
            <body>
        <ClerkProvider>
                {children}
        </ClerkProvider>
        </body>
        </html>
    )
}