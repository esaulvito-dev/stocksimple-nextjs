export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-emerald-500 mb-4">404</h1>
        <p className="text-xl text-gray-500 mb-8">Página no encontrada</p>
        <a href="/" className="px-6 py-3 rounded-xl bg-emerald-500 text-white font-semibold hover:scale-105 transition-transform">Volver al inicio</a>
      </div>
    </div>
  );
}
