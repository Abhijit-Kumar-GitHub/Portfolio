export default function Footer() {
  return (
    <footer className="py-8 px-6" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} Abhijit Kumar
        </p>
      </div>
    </footer>
  );
}
