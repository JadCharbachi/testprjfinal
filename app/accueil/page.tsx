import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack } from "react-bootstrap";

//À faire : affichage différent si connecté

export default async function IndexPage() {
  return (
    <main className="flex flex-col items-center justify-center w-100 h-screen overflow-hidden" style={{ background: "content-box radial-gradient(crimson, skyblue)" }}>
      <div>
        {/*Source : https://vercel.com/templates/next.js/nextjs-portfolio-pageview-counter */}
        <h1 className="font-bold z-10 text-4xl text-black duration-1000 cursor-default animate-title sm:text-6xl md:text-9xl bg-clip-text">
          SIMINANCE
        </h1>
      </div>
      <div className="p-2" style={{ textAlign: "center" }}>
        <Stack >
          <a style={{ color: "lightblue" }} className="btn btn-outline-primary btn-lg mt-4 mb-2" href="login" role="button"
          >
            <text className="font-bold">
              Se connecter
            </text>
          </a>
          <text>
            ou <a href="signup" style={{ color: "lightblue" }} className="font-bold link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-75-hover">S&apos;inscrire</a>
          </text>
        </Stack>
      </div>
    </main>
  );
}
