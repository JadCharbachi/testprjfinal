'use client'

import { useUser } from "@clerk/clerk-react";

export default function Home() {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    <h2>Loading</h2>
    return null;
  }

  if (isSignedIn) {
    return <div>Hello {user.fullName}!</div>;
  }

  return <div>Not signed in</div>;
}