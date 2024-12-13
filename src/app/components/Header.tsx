import Link from "next/link";

export default function Header(){
     return(
        <header>
          <div className="flex items-center justify-between mx-auto">
            <Link href={'/'} className="font-bold text-xl">JOBNEST</Link>
            <nav className="flex gap-3 *:py-2 *:px-4 *:rounded-md">
              <Link href={'/login'} className="bg-gray-200">Login</Link>
              <Link href={'/new-listing'} className="bg-blue-600 text-white">Post a Job</Link>
            </nav>
          </div>
        </header>
     );
}