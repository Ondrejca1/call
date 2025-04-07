export default function Dashboard() {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const open = day >= 1 && day <= 5 && hour >= 8 && hour < 16;

  return (
    <main style={{ padding: 40 }}>
      <h1>Dashboard</h1>
      <p>Stav: <strong>{open ? "Otevřeno" : "Zavřeno"}</strong></p>
      <p>Dnešní směna: 8:00–16:00</p>
    </main>
  );
}