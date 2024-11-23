interface CourseCardProps {
  title: string;
  description: string;
  topics: string[];
  level: string;
  href: string;
}

export default function CourseCard({ title, description, topics, level, href }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-3">
          {level}
        </span>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2">
          {topics.map((topic, index) => (
            <div key={index} className="flex items-center text-sm text-gray-500">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
              {topic}
            </div>
          ))}
        </div>
        <a
          href={href}
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          Start Learning
        </a>
      </div>
    </div>
  );
}