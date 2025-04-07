import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>CallShifter UI</h1>
      <ul>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/shifts">Směny</Link></li>
        <li><Link href="/hours">Provozní doba</Link></li>
      </ul>
    </main>
  );
}