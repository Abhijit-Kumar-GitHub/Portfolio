export default function Footer({ dark }) {
  return (
    <footer className={`py-8 px-6 border-t ${dark ? 'border-dark-border' : 'border-gray-200'}`}>
      <div className="max-w-6xl mx-auto text-center">
        <p className={`text-sm ${dark ? 'text-gray-600' : 'text-gray-400'}`}>
          © {new Date().getFullYear()} Abhijit Kumar. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
}
