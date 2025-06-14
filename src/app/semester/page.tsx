export default function SemesterPage() {
  return (
    <div className="min-h-screen bg-black text-white font-poppins p-4 md:p-8">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              University of Lucknow
            </h1>
            <p className="text-sm md:text-base text-gray-300">
              Ace your LLB exams with ease! Explore our free, online collection
              of Lucknow University previous year question papers. Master key
              concepts, practice confidently, and excel in your semesters!
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="/semester/semester.png"
              alt="Lucknow University Gate"
              className="rounded-md w-full max-w-sm object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {/* Sidebar Menu */}
          <div className="md:col-span-1 space-y-4">
            <select className="w-full p-2 bg-navy-800 text-white rounded-md border border-gray-600">
              <option>Economics</option>
            </select>

            <ul className="list-disc list-inside space-y-1 pl-4 text-sm text-gray-300">
              <li>2016</li>
              <li>2017</li>
              <li>2018</li>
            </ul>
          </div>

          {/* Question Paper Display */}
          <div className="md:col-span-3 bg-[#1a1a1a] rounded-md p-6 space-y-6 border border-gray-600">
            <h2 className="text-2xl font-semibold text-center">2016</h2>

            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-semibold text-lg">Unit-I</h3>
                <p>
                  2. What do you understand by contract of indemnity? What are
                  its essentials? How does it differ from contract of guarantee?
                  Discuss
                </p>
                <p>
                  3. State the circumstances in which surety is discharged from
                  his liability. Discuss.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Unit-II</h3>
                <p>
                  4. "Delivery of possession of goods is essential for the
                  creation of valid bailment." Discuss and state how the
                  bailment can result without the actual delivery of goods.
                </p>
                <p>
                  5. "Goods can be pledged by the owner only except in certain
                  circumstances" - Discuss and state the cases in which the
                  goods can be pledged by non-owners.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-center">2017</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
