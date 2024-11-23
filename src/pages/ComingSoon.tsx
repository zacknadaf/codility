import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export default function ComingSoon() {
  const { language } = useParams();
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {language?.toUpperCase()} Coming Soon
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          We're working hard to bring you amazing {language} programming content.
        </p>
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}