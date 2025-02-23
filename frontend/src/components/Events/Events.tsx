import MajorSectionTitle from "../Titles/Section";

const Events = () => {
  return (
    <section className="bg-orange-100 py-16">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center">
          <MajorSectionTitle title="EVENTS" centered />
          <p className="text-lg text-gray-700 font-medium mt-4">
            Changing Lives Together
          </p>
        </div>

        {/* Event Card */}
        <article className="mt-10 grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Event Image */}
          <div className="relative h-64 md:h-auto">
            <img
              src="https://images.pexels.com/photos/8061642/pexels-photo-8061642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Education for All Event"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Event Details */}
          <div className="bg-green-600 p-6 text-gray-100 flex flex-col justify-center">
            <time className="text-sm font-semibold tracking-wide uppercase">
              November 25 @ 8:00 AM
            </time>
            <h2 className="text-2xl font-bold mt-2 mb-4">
              Education for All: Back-to-School Drive
            </h2>
            <p className="text-gray-200 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              vitae porro velit corporis deserunt aspernatur tenetur error
              impedit aperiam nobis nisi delectus id nostrum fugit, dignissimos
              repudiandae!
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Events;
