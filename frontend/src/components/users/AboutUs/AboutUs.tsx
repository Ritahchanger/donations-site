import { HandCoinsIcon } from "lucide-react";
const AboutUs = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/2 lg:w-2/5">
            <img
              src="https://images.pexels.com/photos/9705849/pexels-photo-9705849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-full h-auto rounded-lg shadow-lg"
              alt="Youth Empowerment"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 lg:w-3/5 space-y-8">
            {/* About Us Section */}
            <div>
              <div className="flex items-center gap-[1rem]">
                <span className="block mb-4">
                  <HandCoinsIcon size={50} />
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  ABOUT US
                </h2>
              </div>
              <p className="text-lg text-gray-600 font-semibold mb-4">
                Helping Our Youths
              </p>
              <p className="text-gray-600 leading-relaxed">
                Simple Boy Foundation is a Kenyan-based NGO committed to
                combating drug and substance abuse among the youth, particularly
                in urban and slum areas. We focus on providing rehabilitation,
                education support, vocational training, and peer mentorship
                programs to empower youth to rebuild their lives and become role
                models within their communities. By addressing addiction
                holistically, we aim to break the cycle of poverty,
                unemployment, and drug dependency, fostering a healthier and
                more productive society.
              </p>
            </div>

            {/* Mission Section */}
            <div className="flex flex-row sm:flex-col gap-6">
              <div className="sm:w-1/3">
                <img
                  src="https://simpleboyfoundation.com/wp-content/uploads/2024/11/who.png"
                  className="h-auto"
                  alt="Our Mission"
                />
              </div>
              <div className="sm:w-2/3">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  To empower vulnerable youth affected by drug and substance
                  abuse by providing access to rehabilitation, education, skills
                  training, and opportunities for reintegration, fostering
                  sustainable personal and community transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
