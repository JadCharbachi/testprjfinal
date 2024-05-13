'use client'

import { useUser } from '@clerk/clerk-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack } from "react-bootstrap";
import { TypeAnimation } from 'react-type-animation';

function UserInterface() {
  const { isSignedIn, user, isLoaded } = useUser();
  if (!isLoaded) {
    console.log(false)
    return (
      <div className='p-3 mt-10' style={{ fontSize: '2em' }}>
        {"\xa0"}
      </div>
    )
  }

  if (isSignedIn) {
    return (
      <div>
        <div className='flex p-3 mt-10' style={{ alignItems: 'baseline' }}>
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              // Same substring at the start will only be typed once, initially
              "Bienvenue",
              500,
              "Bienvenue " + String(user.username),
              10000,
            ]}
            speed={50}
            style={{ fontSize: '2em' }}
          />
        </div>
      </div>
    )
  } else {
    return (
      <div className="p-2" style={{ textAlign: "center" }}>
        <Stack >
          <a style={{ color: "lightblue" }} className="btn btn-outline-primary btn-lg mt-4 mb-2" href="sign-in" role="button"
          >
            <text className="font-bold">
              Se connecter
            </text>
          </a>
          <text>
            ou <a href="sign-up" style={{ color: "lightblue" }} className="font-bold link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-75-hover">S&apos;inscrire</a>
          </text>
        </Stack>
      </div>
    )
  }
}

export default function IndexPage() {
  return (
    <main className="flex flex-col items-center justify-center w-100 h-screen overflow-hidden" style={{ background: "content-box radial-gradient(crimson, skyblue)" }}>
      <div>
        {/*Source : https://vercel.com/templates/next.js/nextjs-portfolio-pageview-counter */}
        <h1 className="font-bold z-10 text-4xl text-black duration-1000 cursor-default animate-title sm:text-6xl md:text-9xl bg-clip-text">
          SIMINANCE
        </h1>
      </div>
      {UserInterface()}
    </main>
  );
}
