import { getSignInUrl, signOut, withAuth } from "@workos-inc/authkit-nextjs";
import Link from "next/link";

export default async function Header() {
  const { user } = await withAuth();
  const SignInUrl = await getSignInUrl();
  return (
    <header>
      <div className="flex items-center justify-between mx-auto">
        <Link href={'/'} className="font-bold text-xl">JOBNEST</Link>

        <nav className="flex gap-3">
          {!user && (
            <Link href={SignInUrl} className="bg-gray-200 py-2 px-4 rounded-md">Login</Link>
          )}
          {user && (
            <form
              action={async () => {
                'use server';
                await signOut();
              }}>
                <button type="submit" className="bg-gray-200 py-2 px-4 rounded-md">
                  Logout
                </button>
              </form>
            )}
            
              <Link href={'/new-listing'} className="bg-blue-600 text-white py-2 px-4 rounded-md">Post a Job</Link>
            </nav>
          </div>
    </header>
  );
}