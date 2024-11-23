import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface LanguageCardProps {
  title: string;
  path: string;
  icon: ReactNode;
  isComingSoon?: boolean;
}

export default function LanguageCard({ title, path, icon, isComingSoon = false }: LanguageCardProps) {
  return (
    <Link 
      to={path}
      className={`block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center ${isComingSoon ? 'cursor-not-allowed' : ''}`}
    >
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      {isComingSoon && (
        <span className="inline-block mt-2 px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
          Coming Soon
        </span>
      )}
    </Link>
  );
}