export default function SyllabusPage() {
  return (
    <div className="min-h-screen bg-black text-white font-poppins">
      {/* Top Banner Section */}
      <div className="bg-black border-b border-gray-800 p-6 md:p-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-orange-400">
              Navigating <span className="text-white">success</span>
            </h1>
            <p className="mt-4 text-sm md:text-base text-gray-300 max-w-md">
              "Your Ultimate Judicial Services Syllabus Guide: A Step-by-Step
              Roadmap for Law Exam Preparation to Build Knowledge, Sharpen
              Strategies, and Achieve Judicial Exam Success with Confidence"
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              {[
                "Uttar pradesh",
                "Delhi",
                "Bihar",
                "Rajasthan",
                "Madhya pradesh",
              ].map((state) => (
                <button
                  key={state}
                  className="bg-transparent text-white hover:text-orange-400 text-sm md:text-base"
                >
                  {state}
                </button>
              ))}

              <span className="text-white text-lg font-semibold">➤</span>
            </div>

            <div className="mt-4">
              <input
                type="text"
                placeholder="search"
                className="w-full md:w-64 p-2 bg-black text-white border border-white rounded"
              />
            </div>
          </div>

          <div className="hidden md:block">
            <img
              src="https://testwebsitethelawclassrooms.my.canva.site/_assets/media/b5b7562a2fe6c7ae737e4cf4f693322f.png"
              alt="Judges Banner"
              className="rounded-md object-cover w-full max-h-72"
            />
          </div>
        </div>
      </div>

      {/* Syllabus Summary Section */}
      <div className="bg-yellow-800 text-white py-8 px-4 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          UP PCS Judiciary Syllabus 2025
        </h2>
        <p className="text-sm md:text-base text-white">
          This syllabus outlines topics of Social relevance including
          sensitivity to persons with disabilities, senior citizens, and
          offences on women and children
        </p>
      </div>

      {/* Tab Section */}
      <div className="max-w-4xl mx-auto mt-10 px-4">
        <div className="flex space-x-4 border-b border-gray-700">
          <button className="px-4 py-2 text-sm md:text-base text-orange-400 border-b-2 border-orange-400 font-semibold">
            - preliminary <br /> General knowledge
          </button>
          <button className="px-4 py-2 text-sm md:text-base text-white hover:text-orange-400">
            Mains <br /> Law
          </button>
          <button className="px-4 py-2 text-sm md:text-base text-white hover:text-orange-400">
            Interview
          </button>
        </div>

        <div className="mt-6 border border-gray-700 rounded-md p-6">
          <p className="text-lg font-semibold mb-4">Duration: 2 hours</p>

          <div className="bg-neutral-900 rounded-md p-4 text-sm">
            <div className="mb-2">
              <span className="bg-yellow-700 px-2 py-1 rounded text-white font-semibold text-xs">
                Maximum marks: 150
              </span>
            </div>

            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>Current events of national and international importance</li>
              <li>Indian history and culture</li>
              <li>Geography of India</li>
              <li>Indian economy</li>
              <li>Indian polity and governance</li>
              <li>Science and technology</li>
              <li>Environmental issues</li>
              <li>Sports and awards</li>
              <li>Books and authors</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
