import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import '../globals.css';



const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children } : { children: React.ReactNode }) {
    return (
        <ClerkProvider publishableKey="pk_test_d29ydGh5LXNhaWxmaXNoLTYuY2xlcmsuYWNjb3VudHMuZGV2JA" >
                {children}
        </ClerkProvider>
    )
}