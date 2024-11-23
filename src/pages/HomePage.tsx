import { Code2, FileCode2, Coffee, Terminal } from 'lucide-react';
import LanguageCard from '../components/LanguageCard';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Codility
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your journey to becoming a programming expert starts here
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <LanguageCard
            title="C Programming"
            path="/c"
            icon={<Code2 className="w-12 h-12 text-blue-600" />}
          />
          <LanguageCard
            title="C++"
            path="/cpp"
            icon={<FileCode2 className="w-12 h-12 text-purple-600" />}
            isComingSoon
          />
          <LanguageCard
            title="Java"
            path="/java"
            icon={<Coffee className="w-12 h-12 text-red-600" />}
            isComingSoon
          />
          <LanguageCard
            title="Python"
            path="/python"
            icon={<Terminal className="w-12 h-12 text-green-600" />}
            isComingSoon
          />
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Learning Path</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              Start with C, master the basics, move to C++ for object-oriented programming,
              dive into Java for versatility, and finally, embrace Python for simplicity and power.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}