import dynamic from 'next/dynamic';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = dynamic(() => import('@clerk/nextjs').then(mod => mod.SignUp), { ssr: false });

export default function Page() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <SignUp path="/sign-up" />
    </div>
  );
}