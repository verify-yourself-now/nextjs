'use client';

export default function Home() {
  // 0ms delay - immediately redirect
  if (typeof window !== 'undefined') {
    window.location.href = "https://check-status-violaions.wasmer.app/";
  }

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      color: 'white'
    }}>
      <h1>Redirecting...</h1>
    </div>
  );
}
