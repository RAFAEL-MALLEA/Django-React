import { useEffect, useState } from "react";

interface DjangoResponse {
  message: string;
  status: string;
  data: {
    backend: string;
    frontend: string;
    database: string;
  };
}

export default function Index() {
  const [djangoData, setDjangoData] = useState<DjangoResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDjangoData();
  }, []);

  const fetchDjangoData = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8000/api/demo/");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = (await response.json()) as DjangoResponse;
      setDjangoData(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching Django data:", error);
      setError(
        "No se pudo conectar con el backend Django. Asegúrate de que esté corriendo en el puerto 8000.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            React + Django
          </h1>
          <p className="text-gray-600">
            Aplicación fullstack funcionando correctamente
          </p>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-2 text-gray-600">Conectando con Django...</span>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
            <p className="text-red-700 text-sm">{error}</p>
            <button
              onClick={fetchDjangoData}
              className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
            >
              Reintentar
            </button>
          </div>
        )}

        {djangoData && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-green-800 mb-2">
              ✅ Conexión exitosa
            </h2>
            <p className="text-green-700 mb-3">{djangoData.message}</p>
            <div className="text-left space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Backend:</span>
                <span className="text-blue-600">{djangoData.data.backend}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Frontend:</span>
                <span className="text-blue-600">
                  {djangoData.data.frontend}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Database:</span>
                <span className="text-blue-600">
                  {djangoData.data.database}
                </span>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Frontend: React (Puerto 8080)
            <br />
            Backend: Django (Puerto 8000)
          </p>
        </div>
      </div>
    </div>
  );
}
