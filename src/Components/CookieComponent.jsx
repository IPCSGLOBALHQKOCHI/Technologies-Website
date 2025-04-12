import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
const CookieComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setTimeout(() => {
        setIsVisible(true);
      }, 50000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/10 backdrop-blur-sm z-50"></div>
      <div className="fixed bottom-10 left-0 right-0 bg-[#ffffff]  rounded-lg text-[#0B0B0BCC] p-4 shadow-lg flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 md:space-x-4 z-50">
        <button
          onClick={handleDecline}
          className="absolute top-4 right-4 text-black"
          aria-label="Close"
        >
          <RxCross2 className="w-5 h-5"/>
        </button>
        <div className="flex flex-col text-center md:text-left ml-10 mt-4">
          <h2 className="text-2xl font-600 text-[#121212] mb-4 text-left">
            We Value Your Privacy
          </h2>
          <p className="text-base mr-10 line-clamp-5 mb-4 text-left">
            We use necessary cookies and technologies to operate this website
            and provide personalized services to you, both through this website
            and other media. Additionally, IPCS Technologies uses optional
            cookies to enhance and personalize your experience, conduct
            analytics such as counting visits, and interact with third parties.
            You may withdraw or manage your cookie consent at any time directly
            from the Cookie Preference Center. For more information on how IPCS
            Technologies uses and shares information about your use of our
            website, please refer to our Privacy Policy.{" "}
          </p>
        </div>
        <div className="flex space-x-12 justify-end">
          <button
            onClick={handleAccept}
            className="bg-[#121212] text-[#FFFFFF] text-sm px-5 py-2 rounded-md border  border-black"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="bg-[#ffffff] text-[#121212] border border-black text-sm px-5 py-2 rounded-md"
          >
            Decline
          </button>
        </div>
      </div>
    </>
  );
};

export default CookieComponent;
