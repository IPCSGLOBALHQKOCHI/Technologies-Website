import besides from "../../src/assets/images/besides-logo.png";
import bmg from "../../src/assets/images/best-money logo.jpg";
import sisiulogo from "../../src/assets/images/sisiulogo.png";

const ClientReviews = () => {
  return (
    <div id="testimonials" className="py-8 md:py-20 px-7 lg:px-20">
      {/* Heading Section */}
      <div className=" mb-10 flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div className="leading-none hidden md:block">
          <h2 className="text-[80px] sm:text-[100px] md:text-[130px] font-200 text-[#FFFFFFCC]">
            Trusted
          </h2>
          <h2 className="ml-10 sm:ml-16 md:ml-20 text-[80px] sm:text-[100px] md:text-[130px] font-300 text-[#FFFFFF]">
            Voices
          </h2>
        </div>
        <div className="leading-none block md:hidden">
          <h2 className="text-[44px] font-300 text-[#FFFFFF]">
            Trusted Voices
          </h2>
        </div>
        <p className="mt-6 lg:mt-0 lg:ml-20 font-200 text-lg sm:text-xl max-w-xl text-[#FFFFFFCC] leading-relaxed tracking-[0.85px]">
          Hear from those who’ve experienced the Transformation. See how our
          Unique Approach has empowered Brands to overcome Challenges and
          achieve remarkable Success.
        </p>
      </div>
      {/* Reviews Section */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-10 md:mt-20 px-3">
        <div className="w-full sm:w-80 md:w-72 h-auto rounded-xl bg-[#FFFFFF33] p-4 flex flex-col">
          <img
            src={besides}
            alt="logo"
            className="w-16 h-16 p-2   object-cover rounded-full mb-3 bg-[#0B1215]"
          />
          <h3 className="text-left font-400 text-2xl sm:text-4xl text-[#FFFFFF] mb-1">
            Bsides
          </h3>
          <p className="mt-2 text-base font-300 text-[#E1E1E1]">
            We helped the BSides team create event branding collaterals,
            including a curtain raiser, branding board, brochures, and standees.
            The design captures the essence of the cybersecurity hackathon
            community conference.
          </p>
        </div>
        <div className="w-full sm:w-80 md:w-72 h-auto rounded-xl bg-[#FFFFFF33] p-4 flex flex-col">
          <img
            src={bmg}
            alt="logo"
            className="w-16 h-16 p-2 object-cover rounded-full mb-3 bg-[#0B1215]"
          />
          <h3 className="text-left font-400 text-2xl sm:text-4xl text-[#FFFFFF]">
            Best Money Gold
          </h3>
          <p className="mt-2 text-base font-300 text-[#E1E1E1]">
            Best Money is a gold seller in the finance industry. We managed
            their Google campaigns for nearly a year, driving significant sales
            growth and multiplying their revenue compared to the previous
            financial year.
          </p>
        </div>
        <div className="w-full sm:w-80 md:w-72 h-auto rounded-xl bg-[#FFFFFF33] p-4 flex flex-col">
          <img
            src={sisiulogo}
            alt="global"
            className="w-16 h-16 p-1 object-cover rounded-full mb-3 bg-[#0B1215]"
          />
          <h3 className="text-left font-400 text-2xl sm:text-4xl text-[#FFFFFF] mb-1">
            Sisu Eclipse
          </h3>
          <p className="mt-2 text-base font-300 text-[#E1E1E1]">
            Sisu Eclipse is an art dealer from Ireland. We designed their logo
            and developed the user experience for their eCommerce platform. The
            logo reflects the themes of an eclipse and paintings.
          </p>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="w-full border-b-[2px] border-[#3A3A3A] mt-20"></div>
    </div>
  );
};

export default ClientReviews;
