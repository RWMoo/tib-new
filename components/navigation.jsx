import {Fragment} from "react";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Popover, Transition} from "@headlessui/react";
import {MenuIcon, XIcon} from "@heroicons/react/outline";
import tib_logo from "../public/images/tib-final-small-02-02.svg";
import Image from "next/image";
import {
  faBoxOpen,
  faCommentDots,
  faEnvelopeOpen,
  faImages,
  faInfoCircle,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

const solutions = [
  {
    name: "About Us",
    description: "Connect with third-party tools that you're already using.",
    href: "/about-us",
    icon: faInfoCircle,
  },
  {
    name: "Insurance Products",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "/insurance-products",
    icon: faBoxOpen,
  },
  {
    name: "Testimonials",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/testimonials",
    icon: faCommentDots,
  },
  {
    name: "Gallery",
    description: "Your customers' data will be safe and secure.",
    href: "/gallery",
    icon: faImages,
  },
  {
    name: "FAQ",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "/faq",
    icon: faQuestionCircle,
  },
  {
    name: "Contact Us",
    description: "Your customers' data will be safe and secure.",
    href: "/contact-us",
    icon: faEnvelopeOpen,
  },
];

const resources = [

  {
    name: "Terms & Condition",
    href: "/terms-conditions",
  },
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
];

const Navigation = () => {
  return (
    <Popover className="relative bg-white z-20">
      <div className="mx-auto">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-2 md:justify-start md:space-x-10 px-6">
          <div className="flex justify-start lg:w-0 md:flex-1">
            <Link href="/">
              <a className={"mt-2 -ml-2"}>
                <span className="sr-only">Workflow</span>
                <div className={"relative w-12 h-12 lg:w-14 lg:h-14 mb-2"}>
                  <Image src={tib_logo} layout={"fill"} alt="Territory Insurance Brokers Icon" />
                </div>
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 lg:hidden">
            <Popover.Button className="bg-white rounded-md mt-2 inline-flex items-center justify-center text-gray-600 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 p-1 focus:ring-inset focus:ring-yellow-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-7 w-7" aria-hidden="true" />
            </Popover.Button>
          </div>
          <nav className="hidden lg:flex space-x-10 xl:space-x-16 mt-1 items-center">
            <Link href={"/about-us"}>
              <a className="text-sm lg:text-base xl:text-lg font-semibold text-gray-600 hover:text-gray-800 transition duration-400 border-b-2 border-transparent hover:border-yellow-500">
                About Us
              </a>
            </Link>
            <Link href={"/insurance-products"}>
              <a className="text-sm lg:text-base xl:text-lg  font-semibold text-gray-600 hover:text-gray-800 transition duration-400 border-b-2 border-transparent hover:border-yellow-500">
                Products
              </a>
            </Link>
            <Link href={"/testimonials"}>
              <a className="text-sm lg:text-base xl:text-lg  font-semibold text-gray-600 hover:text-gray-800 transition duration-400 border-b-2 border-transparent hover:border-yellow-500">
                Testimonials
              </a>
            </Link>
            <Link href={"/gallery"}>
              <a className="text-sm lg:text-base xl:text-lg  font-semibold text-gray-600 hover:text-gray-800 transition duration-400 border-b-2 border-transparent hover:border-yellow-500">
                Gallery
              </a>
            </Link>
            <Link href={"/faq"}>
              <a className="text-sm lg:text-base xl:text-lg  font-semibold text-gray-600 hover:text-gray-800 transition duration-400 border-b-2 border-transparent hover:border-yellow-500">
                FAQ
              </a>
            </Link>
            <Link href={"/contact-us"}>
              <a className="text-sm lg:text-base xl:text-lg  font-semibold text-gray-600 hover:text-gray-800 transition duration-400 border-b-2 border-transparent hover:border-yellow-500">
                Contact Us
              </a>
            </Link>
          </nav>
          <div className="hidden lg:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href={"/get-a-quote"}>
              <a
                style={{ paddingBottom: 5, backgroundColor: "#E38D1F" }}
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm lg:text-base xl:text-lg font-semibold  text-white"
              >
                Get A Quote
              </a>
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 transition duration-500 transform origin-top-right lg:hidden"
        >
          {({ close }) => (
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div className={"relative w-10 h-10 mb-2 -ml-2"}>
                    <Image src={tib_logo} layout={"fill"} alt="" />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {solutions.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          onClick={() => {
                            close();
                          }}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          <FontAwesomeIcon
                            className={"text-xl text-yellow-500"}
                            icon={item.icon}
                          />
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </a>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  {resources.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-sm font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div>
                  <Link href={"/get-a-quote"}>
                    <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-600">
                      Get A Quote
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Navigation;
