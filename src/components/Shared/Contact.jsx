import Grid from "./Grid";

import { GoArrowRight } from "react-icons/go";
import Horizontal from "./Horizontal";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import ArrowButton from "./ArrowButton";
import { CiLocationOn, CiMail } from "react-icons/ci";

import cornerAorrw from "../../assets/arrow-right-alt.png";

const Contact = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FaFacebookF />,
    },
    {
      id: 2,
      icon: <FaInstagram />,
    },
    {
      id: 3,
      icon: <FaLinkedin />,
    },
    {
      id: 4,
      icon: <FaYoutube />,
    },
  ];

  const contactInfo = [
    {
      id: 1,
      number: "+1 (123) 456-7890",
      icon: <FaPhoneAlt />,
    },
    {
      id: 2,
      mail: "your@example.com",
      icon: <CiMail />,
    },
    {
      id: 3,
      location: "123 Main St, City, Country",
      icon: <CiLocationOn />,
    },
  ];

  return (
    <div className="relative min-h-screen lg:min-h-[550px] overflow-hidden bg-[#030705]">
      <Grid vertical={7} horizontal={3} />
      <Horizontal width={"7/12"} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 justify-between px-6 lg:px-20 py-20 pb-44 absolute z-30">
        {/* Content */}
        <div className="flex flex-col gap-8 lg:gap-16 justify-center text-white">
          <div>
            <h1 className="text-3xl lg:text-6xl flex gap-2 uppercase font-unbounded">
              <img src={cornerAorrw} alt="" className="w-5 object-cover" />
              contact
            </h1>
            <h1 className="text-3xl lg:text-6xl flex gap-2 uppercase font-unbounded">
              us today
            </h1>{" "}
          </div>
          <p className="text-lg ">
            Contact us today to schedule a consultation and discover how we can
            help your business thrive.
          </p>
          <div className="flex gap-4 items-center">
            {socialLinks.map((link) => (
              <button
                className="bg-primary rounded-full p-1 lg:p-2 text-black hover:bg-white transition-all duration-300 text-2xl"
                key={link.id}
              >
                {link.icon}
              </button>
            ))}
          </div>
        </div>
        {/* Form */}
        <div className="text-white flex flex-col gap-12">
          <form action="" className="flex flex-col gap-6">
            <p className="text-lg">Contact Info</p>
            <div className="relative flex flex-col justify-bwtween gap-2">
              <MdOutlineMail className=" absolute top-3.5 left-5 text-[1.5rem] dark:text-slate-400 text-[#777777]" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email to get started"
                className=" border-[#e5eaf2]  lg:w-2/3 placeholder:text-slate-500 dark:border-slate-600 border rounded-full outline-none text-xs pl-12 pr-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
              />
              <div className="lg:w-1/3">
                <ArrowButton
                  btnName={"Get Started"}
                  arrowColor={"white"}
                  bgColor={"primary"}
                />
              </div>
            </div>
          </form>
          {/* Contact Number */}
          <div>
            {contactInfo.map((info) => (
              <div key={info.id}>
                <div className="flex flex-grow items-center gap-3 mt-6">
                  <div className="bg-white rounded-full p-1 lg:p-2 text-black text-2xl">
                    {info.icon}
                  </div>
                  <p className="text-sm lg:text-lg">
                    {info.number || info.mail || info.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
