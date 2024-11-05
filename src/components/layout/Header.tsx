import Link from "next/link";

export default function Header() {
  return (
    <header id="header" className="flex justify-between items-center h-20 bg-transparent px-[3vw]">
      <h1>
        <Link href="/" className="text-[24px] font-bold spacing tracking-tight text-white">
          Run Sync
        </Link>
      </h1>
      <nav>
        <ul className="inline-flex gap-6 text-white">
          <li>
            <Link href="/calculate/heart-rate">적정 심박수</Link>
          </li>
          <li>
            <Link href="/test">어디뛸래?</Link>
          </li>
          <li>
            <Link href="/notice">Notice</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
