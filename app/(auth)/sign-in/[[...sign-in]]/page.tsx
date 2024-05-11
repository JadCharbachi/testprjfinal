import dynamic from 'next/dynamic';
import 'bootstrap/dist/css/bootstrap.min.css';


const SignIn = dynamic(() => import('@clerk/nextjs').then(mod => mod.SignIn), { ssr: false });

export default function Page() {
  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
        <SignIn path="/sign-in" />
      </div>
    </>
  );
}