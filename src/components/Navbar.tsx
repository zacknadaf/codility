import { Code2, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOutlineOpen, setIsOutlineOpen] = useState(false);

  const topics = [
    'Introduction to C',
    'Variables & Data Types',
    'Control Flow',
    'Functions',
    'Arrays & Strings',
    'Pointers & Memory',
    'Structures & Unions',
    'File Handling',
    'Dynamic Memory'
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Code2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Codility</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Home
            </Link>
            {/* Courses link removed */}
            {/* <Link to="/c" className="text-gray-700 hover:text-blue-600 px-3 py-2"> */}
            {/*   Courses */}
            {/* </Link> */}
            <div className="relative">
              {/* Course Outline button removed */}
              {/* Course Outline */}
              {/* <button 
                onClick={() => setIsOutlineOpen(!isOutlineOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2"
              >
                Course Outline
                <ChevronDown className="ml-1 h-4 w-4" />
              </button> */}
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block text-gray-700 hover:text-blue-600 px-3 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            {/* Courses link removed */}
            {/* <Link 
              to="/c" 
              className="block text-gray-700 hover:text-blue-600 px-3 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link> */}
            {/* Course Outline button removed */}
            {/* Course Outline */}
            {/* <button 
              onClick={() => setIsOutlineOpen(!isOutlineOpen)}
              className="w-full text-left text-gray-700 hover:text-blue-600 px-3 py-2 flex items-center justify-between"
            >
              Course Outline
              <ChevronDown className="h-4 w-4" />
            </button> */}
            {isOutlineOpen && (
              <div className="pl-6 space-y-1">
                {topics.map((topic, index) => (
                  <Link
                    key={index}
                    to="/c"
                    className="block text-sm text-gray-600 hover:text-blue-600 py-1"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsOutlineOpen(false);
                    }}
                  >
                    {topic}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}