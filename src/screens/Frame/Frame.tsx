import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

// Define data for collection items
const collectionItems = [
  { image: "/1.png" },
  { image: "/2.png" },
  { image: "/4.png" },
  { image: "/5.png" },
  { image: "/6.png" },
  { image: "/3.png" },
];

// Define data for services
const services = [
  { icon: "/icon.svg", title: "Mementos" },
  { icon: "/icon.svg", title: "Wood Works" },
  { icon: "/icon.svg", title: "Gift Items" },
  { icon: "/icon.svg", title: "Posters" },
];

// Define data for working hours
const workingHours = [
  { day: "Monday – Saturday ", hours: "10a.m – 5p.m" },
  { day: "Sunday", hours: "10a.m – 4p.m" },
];

// Define data for footer links
const footerLinks = {
  info: ["CONTACT", "INSTAGRAM", "FACEBOOK", "X"]
};

export const Frame = (): JSX.Element => {
  // State for controlling modal visibility
  const [showModal, setShowModal] = useState(false);

  // Handle opening and closing modal
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // State for the current product index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Set up interval to automatically change the product every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % collectionItems.length); // Loop back to first item after last
    }, 3000); // Change product every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="w-full">
        <div className="flex flex-col w-full items-start relative">
          <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto] bg-[#f7f6ec]">
            <div className="flex flex-col max-w-[1920px] items-start relative w-full">
              {/* Hero Section */}
              <section className="relative w-full min-h-screen bg-[url(/image.png)] bg-cover bg-center">
                <div className="relative w-full min-h-screen">
                  <div className="flex flex-col w-full min-h-screen items-start absolute top-0 left-0">
                    <div className="relative self-stretch w-full min-h-screen bg-[#00000040]" />
                  </div>

                  <div className="flex flex-col w-full items-center absolute top-[50%] left-0 transform -translate-y-1/2">
                    <div className="flex flex-col items-center max-w-[1170px] py-12 px-6">
                    <h1 className="text-[40px] sm:text-[60px] font-playfair font-bold text-[#ebe9cf] text-center leading-[48px] sm:leading-[76px]">
                      ARTFRAMES
                    </h1>
                    </div>
                  </div>
                </div>
              </section>

              {/* Welcome Section */}
              <section className="w-full py-40 [background:url(..//section.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(238,237,224,1)_0%,rgba(238,237,224,1)_100%)]">
                <div className="container max-w-[1170px]">
                  <h2 className="text-[50px] font-bold text-[#13130d] leading-[59.3px] font-['Inter',Helvetica] mb-12">
                    Welcome To Art Frames
                  </h2>

                  <p className="text-[23.8px] text-[#6d6d65] leading-[37.6px] font-['Cardo',Helvetica] max-w-[507px]">
                    Where memories come to life through art. 
                    <br />
                    Whether you’re looking for a personalized
                    <br />
                    memento, a beautiful painting, or the perfect gift
                    <br />
                    we’re here to help you make every moment 
                    <br />
                    unforgettable. Explore our collection of unique art 
                    <br />
                    pieces and thoughtful gifts that celebrate life’s 
                    <br />
                    special occasions
                  </p>
                </div>
              </section>

              {/* Products Section */}
              <section className="container max-w-[1170px] mt-24 mb-12">
                <h2 className="text-[40px] font-bold text-[#13130d] leading-[54.6px] font-['Inter',Helvetica] mb-5">
                  Products
                </h2>
                <Separator className="h-0.5 bg-[#13130d] mb-12" />

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 justify-center">
                  {collectionItems.map((item, index) => (
                    <Card key={index} className="border-none shadow-none">
                      <CardContent className="p-0">
                        <div
                          className="w-full h-[250px] bg-cover bg-center transition-all duration-500 ease-in-out"
                          style={{
                            backgroundImage: `url(${item.image})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                          }}
                        />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>


              {/* Working Hours Section */}
              <section className="w-full flex flex-col lg:flex-row">
                <div className="flex-1 py-12 lg:py-[285.47px] bg-cover bg-center" style={{ backgroundImage: 'url(..//background.png)' }}>
                  <div className="h-60" />
                </div>
                <div className="flex-1 bg-[#12130d] py-12 lg:py-24 px-6 lg:px-24">
                  <h2 className="text-[30px] lg:text-[50px] font-bold text-[#ebe9cf] leading-[40px] lg:leading-[59.3px] font-['Inter',Helvetica] mb-12">
                    Working Hours
                  </h2>

                  <div className="max-w-[653px] mx-auto">
                    <div className="border-b border-[#ebe9cf33] pb-2 mb-6">
                      <h3 className="text-lg lg:text-xl text-[#ebe9cf] leading-[26.2px] font-['Inter',Helvetica]">
                        Opening Hours
                      </h3>
                    </div>

                    {workingHours.map((item, index) => (
                      <div key={index} className="flex items-end mb-4 lg:mb-6">
                        <div className="text-lg lg:text-2xl text-[#949380] leading-[38.4px] font-['Cardo',Helvetica] w-[200px]">
                          {item.day}
                        </div>
                        <div className="flex-1 border-l border-[#ebe9cf33] pl-6">
                          <div className="text-lg lg:text-2xl text-[#949380] leading-[38.4px] font-['Cardo',Helvetica]">
                            {item.hours}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>


              {/* Services Section */}
              <section className="w-full bg-[#efede0] py-24">
                <div className="container max-w-[1170px]">
                  <h2 className="text-[40px] font-bold text-[#13130d] leading-[54.6px] font-['Inter',Helvetica] mb-5">
                    Services
                  </h2>
                  <Separator className="h-0.5 bg-[#13130d] mb-12" />

                  <div className="grid grid-cols-2 gap-8">
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-6 pb-5 border-b border-[#c9c8bf]"
                      >
                        <img
                          className="w-[44.81px] h-[49.26px]"
                          alt={`${service.title} icon`}
                          src={service.icon}
                        />
                        <span className="text-lg text-[#13130d] leading-[23.4px] font-['Inter',Helvetica]">
                          {service.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Footer */}
          <footer className="w-full bg-[#13130d] text-white">
            <div className="container max-w-[1170px] py-12">
              <div className="flex justify-between">
                <div>
                  <div className="mt-16">
                    <div className="w-[162px] h-8 bg-[url(/footer.png)] bg-cover bg-[50%_50%]" />
                  </div>
                </div>

                <div className="flex gap-12">
                  <div>
                    <h3 className="text-2xl text-[#ebe9cf] leading-[30.6px] font-['Inter',Helvetica] mb-9">
                      Info
                    </h3>
                    <ul className="flex flex-col gap-1.5">
                      {footerLinks.info.map((link, index) => (
                        <li key={index}>
                          <a
                            href="#"
                            className="text-[13px] text-[#949380] tracking-[0.80px] leading-[25.7px] font-['Inter',Helvetica]"
                            onClick={toggleModal} // Trigger modal on click
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="bg-[#ebe9cf33]" />

            <div className="container py-5 flex">
              <div className="flex gap-4">
                <a href="#" className="px-1">
                  <img
                    className="w-5 h-[25.69px]"
                    alt="Social Icon"
                    src="/insta.svg"
                  />
                </a>
                <a href="#" className="px-1">
                  <img
                    className="w-[17.14px] h-[25.69px]"
                    alt="Social Icon"
                    src="/fb.svg"
                  />
                </a>
                <a href="#" className="px-1">
                  <img
                    className="w-[11.42px] h-[25.69px]"
                    alt="Social Icon"
                    src="/x.svg"
                  />
                </a>
              </div>
            </div>
          </footer>

          {/* Contact Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-xl font-bold text-[#13130d]">Contact Us</h3>
                <p className="text-lg text-[#13130d]">For inquiries, please call: (+91) 8589-9955-57</p>
                <button
                  onClick={toggleModal}
                  className="mt-4 bg-[#13130d] text-white py-2 px-4 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Header */}
          <header className="w-full absolute top-0 left-0 z-10">
            <nav className="border-t border-b border-[#ebe9cf33] h-[86.5px] flex items-center justify-between">
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <div className="w-[162px] h-8 bg-[url(/logo.png)] bg-cover bg-[50%_50%]" />
              </div>
            </nav>
          </header>
        </div>
      </div>
    </div>
  );
};
