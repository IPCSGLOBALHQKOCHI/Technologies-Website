import { useState, useEffect } from "react";

const CookieComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setTimeout(() => {
        setIsVisible(true);
      }, 22000);
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
      <div className="fixed bottom-0 left-0 right-0 bg-white/70  rounded-t-xl text-[#0B0B0BCC] p-4 shadow-lg flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 md:space-x-4 z-50">
        <div className="flex flex-col text-center md:text-left ml-10 mt-4">
          <h2 className="text-2xl font-600 text-black mb-4">
            We Value Your Privacy
          </h2>
          <p className="text-base mr-10">
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
        <div className="flex space-x-8 pr-8">
          <button
            onClick={handleAccept}
            className="bg-[#25789B] text-[#FFFFFF] text-sm px-5 py-2 rounded-md border border-transparent 
            hover:bg-[#FFFFFF] hover:text-black hover:border-[#25789B]"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="bg-red-600 hover:bg-[#FFFFFF] text-white hover:text-black  border border-transparent text-sm px-5 py-2 rounded-md hover:border-red-600"
          >
            Decline
          </button>
        </div>
      </div>
    </>
  );
};

export default CookieComponent;
