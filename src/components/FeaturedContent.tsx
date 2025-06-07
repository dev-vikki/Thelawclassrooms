import React from 'react';
import CourseCard from './CourseCard';
import SectionTitle from './ui/SectionTitle';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Book {
  id: number;
  title: string;
  category: string;
  pages: number;
  imageUrl: string;
}

const FeaturedContent: React.FC = () => {
  const featuredBooks: Book[] = [
    {
      id: 1,
      title: 'Generative AI 360°',
      category: 'Technology',
      pages: 472,
      imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg'
    },
    {
      id: 2,
      title: '51 Trading Strategies',
      category: 'Finance',
      pages: 436,
      imageUrl: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg'
    },
    {
      id: 3,
      title: 'Startupology',
      category: 'Business',
      pages: 368,
      imageUrl: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg'
    },
    {
      id: 4,
      title: 'Stock Investing Mastermind',
      category: 'Finance',
      pages: 368,
      imageUrl: 'https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg'
    },
    {
      id: 5,
      title: 'Financial Statement Analysis',
      category: 'Finance',
      pages: 417,
      imageUrl: 'https://images.pexels.com/photos/7567558/pexels-photo-7567558.jpeg'
    },
    {
      id: 6,
      title: 'Mathematics Class 7th',
      category: 'Education',
      pages: 600,
      imageUrl: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg'
    }
  ];

  const bestsellerBooks: Book[] = [
    {
      id: 7,
      title: 'Interview Ready',
      category: 'Career',
      pages: 311,
      imageUrl: 'https://images.pexels.com/photos/5989925/pexels-photo-5989925.jpeg'
    },
    {
      id: 8,
      title: 'Trading Mastermind',
      category: 'Finance',
      pages: 335,
      imageUrl: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg'
    },
    {
      id: 9,
      title: 'The 7Ms of Digital Transformation',
      category: 'Technology',
      pages: 428,
      imageUrl: 'https://images.pexels.com/photos/7567558/pexels-photo-7567558.jpeg'
    },
    {
      id: 10,
      title: 'Private Equity 360°',
      category: 'Finance',
      pages: 424,
      imageUrl: 'https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg'
    },
    {
      id: 11,
      title: 'The Power of Emotional Marketing',
      category: 'Marketing',
      pages: 397,
      imageUrl: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg'
    },
    {
      id: 12,
      title: 'The BookPreneur',
      category: 'Business',
      pages: 390,
      imageUrl: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg'
    }
  ];

  return (
    <div className="py-16 bg-transparent">
      {/* Featured Books Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="flex justify-between items-center mb-8">
          <SectionTitle>Featured Books</SectionTitle>
          <div className="flex space-x-4">
            <button className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {featuredBooks.map((book) => (
            <CourseCard key={book.id} course={book} />
          ))}
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <SectionTitle>Read Zebralearn Bestsellers</SectionTitle>
          <div className="flex space-x-4">
            <button className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {bestsellerBooks.map((book) => (
            <CourseCard key={book.id} course={book} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturedContent;