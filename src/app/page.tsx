import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from '@clerk/nextjs';

export default function Home() {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <SignedIn>
        <SignOutButton>Sign out</SignOutButton>
      </SignedIn>
      <SignedOut>
        <SignInButton mode='modal'>Sign in</SignInButton>
      </SignedOut>
    </div>
  );
}
