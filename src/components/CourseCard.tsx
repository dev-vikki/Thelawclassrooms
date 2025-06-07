import React from 'react';
import Image from 'next/image';
import { Book } from 'lucide-react';
import { Link } from './ui/Link';

interface Course {
  id: number;
  title: string;
  category: string;
  pages: number;
  imageUrl: string;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-800">
      <div className="relative h-48">
        <Image
          src={course.imageUrl}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400">{course.category}</span>
          <div className="flex items-center text-gray-400">
            <Book size={14} className="mr-1" />
            <span className="text-sm">{course.pages} Pages</span>
          </div>
        </div>
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{course.title}</h3>
      </div>
    </div>
  );
};

export default CourseCard;