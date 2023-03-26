import React, { useState } from 'react'
import Figma from "../images/Figma.png";
import Adobe from "../images/Adobe.png";
import Python from "../images/pythonLogo.png";
import Google from "../images/Google.png";
import WhoAreWe from "../images/whoAreWe.png";
import HeroImg from "../images/heroImg.png";
import ExpertiseImg from "../images/expertiseImg.png";
import GroupOne from "../images/GroupOne.png";
import GroupTwo from "../images/GroupTwo.png";
import GroupThree from "../images/GroupThree.png";
import GroupFour from "../images/GroupFour.png";
import GroupFive from "../images/GroupFive.png";
import GroupSix from "../images/GroupSix.png";
import GroupSeven from "../images/GroupSeven.png";
import GroupEight from "../images/GroupEight.png";
import GroupNine from "../images/GroupNine.png";
import bestForYou from "../images/bestForYou.png";
import iconOne from "../images/iconOne.png";
import iconTwo from "../images/iconTwo.png";
import iconThree from "../images/iconThree.png";
import iconFour from "../images/iconFour.png";
import Logo from "../images/MainLogo.png";

function Home({ setMobileNav }) {
  const [input, setInput] = useState("");
  const [submitAlert, setSubmitAlert] = useState(false);

  const submitEmail = (e) => {
    e.preventDefault();
    setSubmitAlert(true);
    setInput("");
    setTimeout(() => {
      setSubmitAlert(false);
    }, 2000);
  };

  const OpenNav = () => {
    setMobileNav(true);
  }

  return (
    <div>
      <div className="nav fixed bg-black w-full flex items-center justify-between md:hidden">
        <img src={Logo} alt="logo" className="w-24 m-2" loading="eager" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="30"
          fill="currentColor"
          className="bi bi-list text-white"
          viewBox="0 0 16 16"
          onClick={OpenNav}
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </div>
      <div className="hero-section">
        <img src={HeroImg} alt="hero" className="hero-Img relative w-full" />
        <div className="hero-contents left-10 md:left-20">
          <div className="mb-5 md:mb-10">
            <h1 className="font-bold text-3xl md:text-5xl text-white mb-2 md:mb-7">
              TECHONNECT
            </h1>
            <p className="text-white text-xs md:text-2xl">
              Innovations That Stands Out at its Best
            </p>
          </div>
          <button className="bg-red-700 rounded-md text-white p-2 text-xs md:text-sm md:p-4 w-32">
            BOOK NOW
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between p-2 md:p-16">
        <img src={Figma} alt="Figma" className="w-10 md:w-32" />
        <img src={Adobe} alt="Adobe" className="w-10 md:w-32" />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
          className="w-10 md:w-32"
          alt="tailwind"
        />

        <img src={Python} alt="Python" className="w-10 md:w-32" />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-plain-wordmark.svg"
          className="w-10 md:w-32"
          alt="vscode"
        />
        <img src={Google} alt="Google" className="w-10 md:w-32" />
      </div>
      <div className="who-are-we p-6">
        <h2 className="font-bold text-xl md:text-4xl text-center">
          WHO ARE WE
        </h2>
        <div className="about-sec mt-10">
          <div className="w-full mb-10">
            <img
              src={WhoAreWe}
              alt="WhoAreWe"
              className="md:w-2/3 mx-auto md:ml-auto"
            />
          </div>
          <div className="w-full md:px-9">
            <h2 className="about-sub-head font-bold text-xl md:text-4xl mb-7">
              About Techonnect Service
            </h2>
            <div className="about-heads text-left md:pr-8 mb-7">
              <h2 className="font-semibold text-xl md:text-2xl">
                Web <br /> Projects
              </h2>
              <h2 className="font-semibold text-xl md:text-2xl">
                Project <br /> Collaborations
              </h2>
              <h2 className="font-semibold text-xl md:text-2xl">
                Clients <br /> First
              </h2>
            </div>
            <p>
              We are a team of elite technology professionals, dedicated to
              providing exceptional services to individuals, businesses and
              organizations. We are proud to offer a wide range of technical
              expertise, including frontend web development, backend web
              development, UI/UX/Product design, Graphic design, Content
              Creation, web3 auditing and lots more. Our team is made up of
              highly skilled and experienced individuals, each with their own
              unique background and specialties. <br /> With a deep
              understanding of the latest industry trends and technologies, we
              are able to deliver cutting-edge solutions that drive growth and
              innovation for our clients. We take a consultative approach to
              every project, working closely with our clients to understand
              their specific needs and goals, and delivering solutions that
              exceed expectations.
            </p>
          </div>
        </div>
        <div className="md:p-32 mt-10 text-center">
          <h2 className="font-bold text-xl md:text-4xl mb-5">WHO ARE WE</h2>
          <p>
            Our team operates by providing comprehensive technical services
            through research, intense team work, effective communication with
            our clients and efficient man power. Our approach is consultative in
            nature, as we work closely with clients to gain a thorough
            understanding of their specific needs and objectives, before
            delivering customized solutions that exceed expectations. We
            understand the importance of timely delivery and effective
            communication, and we ensure that our clients are kept informed
            throughout every stage of the project. We are committed to
            delivering results in an efficient and timely manner, without
            compromising on the quality of our work.
          </p>
        </div>
      </div>
      <div className="expertise-section p-6">
        <h2 className="font-bold text-xl md:text-4xl text-center">
          WE BRING EXCELLENCE WITH OUR EXPERTISE
        </h2>
        <div className="flex flex-col-reverse md:flex-row items-center w-full mt-10">
          <div className="flex flex-col items-center md:items-start w-full md:w-1/2 p-5 md:p-10">
            <h4 className="text-xl md:text-2xl text-center md:text-left mb-5 md:mb-10">
              With our flexible production capacity and Tech know-how, we
              produce customized solutions for your needs.
            </h4>
            <button className="flex items-center bg-red-600 text-xs md:text-xl p-3 px-4 md:px-9">
              <p className="mr-5">START YOUR PROJECT</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-up-right text-white"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                />
              </svg>
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <img src={ExpertiseImg} alt="expertise" className="mx-auto" />
          </div>
        </div>
      </div>
      <div className="value-section md:px-32 py-10">
        <h2 className="font-bold text-white text-xl md:text-4xl text-center mb-10">
          OUR CORE VALUES
        </h2>
        <hr />
        <div className="grid grid-cols-2 grid-rows-4 md:grid-cols-3 md:grid-rows-3 grid-flow-row gap-2 md:gap-8 px-2 pt-10">
          <div className="value-items text-center md:w-4/5 mx-auto p-2 md:p-3">
            <img
              src={GroupOne}
              alt="value-icon"
              className="mx-auto w-12 md:w-20"
            />
            <h4 className="text-xl pt-7 pb-2">Client Satisfaction</h4>
            <p className="text-sm md:text-lg">
              We ensure efficiency by regularly surveying customers and using
              the feedback to improve service and support.
            </p>
          </div>
          <div className="value-items text-center md:w-4/5 mx-auto p-2 md:p-3">
            <img
              src={GroupTwo}
              alt="value-icon"
              className="mx-auto w-12 md:w-20"
            />
            <h4 className="text-xl pt-7 pb-2">Scalability</h4>
            <p className="text-sm md:text-lg">
              We have taken our time to design systems that can easily scale to
              accommodate growing business needs and goals for maximum client
              satisfaction.
            </p>
          </div>
          <div className="value-items text-center md:w-4/5 mx-auto p-2 md:p-3">
            <img
              src={GroupThree}
              alt="value-icon"
              className="mx-auto w-12 md:w-20"
            />
            <h4 className="text-xl pt-7 pb-2">Innovation</h4>
            <p className="text-sm md:text-lg">
              We have proven our efficiency by regularly researching and
              implementing new technologies and ideas that can improve the
              company's operations.
            </p>
          </div>
          <div className="value-items text-center md:w-4/5 mx-auto p-2 md:p-3">
            <img
              src={GroupFour}
              alt="value-icon"
              className="mx-auto w-12 md:w-20"
            />
            <h4 className="text-xl pt-7 pb-2">Constant Feedback</h4>
            <p className="text-sm md:text-lg">
              We are known for effectively communicating with clients and
              keeping them informed of issues and progresses, responding to
              their inquiries in a timely and professional manner.
            </p>
          </div>
          <div className="value-items text-center md:w-4/5 mx-auto p-2 md:p-3">
            <img
              src={GroupFive}
              alt="value-icon"
              className="mx-auto w-12 md:w-20"
            />
            <h4 className="text-xl pt-7 pb-2">Problem-solving Skills</h4>
            <p className="text-sm md:text-lg">
              We are a tech team that has proven our efficiency by showing our
              ability to quickly and effectively resolve complex technical
              problems in our area of specialty.
            </p>
          </div>
          <div className="value-items text-center md:w-4/5 mx-auto p-2 md:p-3">
            <img
              src={GroupSix}
              alt="value-icon"
              className="mx-auto w-12 md:w-20"
            />
            <h4 className="text-xl pt-7 pb-2">Technical Expertise</h4>
            <p className="text-sm md:text-lg">
              Here at TECHONNECT, We possess a high level of technical expertise
              in our various fields, which allows us to provide efficient and
              effective solutions..
            </p>
          </div>
          <div className="value-items text-center md:w-4/5 mx-auto p-2 md:p-3">
            <img
              src={GroupSeven}
              alt="value-icon"
              className="mx-auto w-12 md:w-20"
            />
            <h4 className="text-xl pt-7 pb-2">Flexibility</h4>
            <p className="text-sm md:text-lg">
              The team has been able to adapt to changing business, individual
              and company needs and requirements based on the requests and
              research.
            </p>
          </div>
          <div className="value-items text-center md:w-4/5 mx-auto p-2 md:p-3">
            <img
              src={GroupEight}
              alt="value-icon"
              className="mx-auto w-12 md:w-20"
            />
            <h4 className="text-xl pt-7 pb-2">Integration</h4>
            <p className="text-sm md:text-lg">
              We pride ourselves with the fact that we are able to seamlessly
              integrate new systems, innovations, ideas and technologies with
              existing infrastructures.
            </p>
          </div>
          <div className="hidden md:block value-items text-center md:w-4/5 mx-auto p-2 md:p-3">
            <img
              src={GroupNine}
              alt="value-icon"
              className="mx-auto w-12 md:w-20"
            />
            <h4 className="font-extrabold text-xl pt-7 pb-2">Cost Cutting</h4>
            <p className="text-sm md:text-lg">
              Thinking about cost? Well, don’t!! We have found ways to reduce
              costs and increase the return on investment for the company's
              technology investments and also produce a perfect outcome for the
              business.
            </p>
          </div>
        </div>
        <div className="md:hidden block value-items text-center w-1/2 mx-auto p-2 my-2">
          <img src={GroupFive} alt="value-icon" className="mx-auto w-12" />
          <h4 className="text-xl pt-7 pb-2">Cost Cutting</h4>
          <p className="text-sm">
            Thinking about cost? Well, don’t!! We have found ways to reduce
            costs and increase the return on investment for the company's
            technology investments and also produce a perfect outcome for the
            business.
          </p>
        </div>
      </div>
      <div className="p-7 md:p-28">
        <h2 className="font-bold text-xl md:text-4xl text-center mb-10">
          WHY WE ARE THE BEST FOR YOU ?
        </h2>
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src={bestForYou}
              alt="best for you"
              className="md:w-2/3 mx-auto"
            />
          </div>
          <div className="flex flex-col justify-between w-full md:w-1/2">
            <div className="flex mb-6 md:mb-0">
              <img src={iconOne} alt="icon" className="mr-5 theBestIcons" />
              <div>
                <h3 className="font-bold text-xl md:text-2xl">
                  Fast Loading Pages
                </h3>
                <p>
                  Your website must load in 1-4 seconds or else you will lose
                  visitors.
                </p>
              </div>
            </div>
            <div className="flex mb-6 md:mb-0">
              <img src={iconTwo} alt="icon" className="mr-5 theBestIcons" />
              <div>
                <h3 className="font-bold text-xl md:text-2xl">Modern Design</h3>
                <p>
                  Modern sites makes it easier and bring more visitors to your
                  sites.
                </p>
              </div>
            </div>
            <div className="flex mb-6 md:mb-0">
              <img src={iconThree} alt="icon" className="mr-5 theBestIcons" />
              <div>
                <h3 className="font-bold text-xl md:text-2xl">Easy to use</h3>
                <p>
                  You can easily manage your site without our help,yes we give
                  100% control.
                </p>
              </div>
            </div>
            <div className="flex mb-6 md:mb-0">
              <img src={iconFour} alt="icon" className="mr-5 theBestIcons" />

              <div>
                <h3 className="font-bold text-xl md:text-2xl">
                  Timely & Consistent Delivery
                </h3>
                <p>
                  We handover all logins to clients with instruction on how to
                  manage your new modern website
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="newsletter flex flex-col md:flex-row justify-evenly md:items-center p-5 md:p-12">
        <h2 className="font-bold text-sm md:text-2xl mb-4 md:mb-0">
          Subscribe to Our Newsletters
        </h2>
        <div className="w-full md:w-1/3">
          <div className="newsletter-input relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="p-4 w-full"
              placeholder="Enter Your Email"
            />
            <button
              onClick={submitEmail}
              className="bg-red-600 p-3 absolute right-3 top-1"
            >
              Subscribe
            </button>
          </div>
          {submitAlert ? (
            <p className="text-red-600 text-sm md:text-xl">
              Thank you for subscribing to our newsletter
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Home
