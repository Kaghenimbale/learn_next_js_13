import Image from 'next/image';
import Link from 'next/link';
import ProductCard from './components/ProductCard';

export default function Home() {
  return (
    <main className="grid gap-3">
      <nav className="flex justify-between bg-slate-100 shadow-xl p-4">
        <h1 className="flex font-bold">Next Js 13</h1>
        <div className="flex gap-3">
          <Link href="/users" className="text-blue-600">
            Users
          </Link>
          <br />
          <Link href="/users/new" className="text-blue-600">
            New user Page
          </Link>
        </div>
      </nav>
      <ProductCard />
    </main>
  );
}
