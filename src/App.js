import React, { useState } from "react";
import burger_img1 from "./Images/img_1.png";
import burger_img2 from "./Images/img_2.png";
import burger_img3 from "./Images/img_3.png";
import burger_img4 from "./Images/img_4.png";
import burger_img5 from "./Images/img_5.png";
import burger_img6 from "./Images/img_6.png";
import desert_img1 from "./Images/deserts_images/img_1.png";
import desert_img2 from "./Images/deserts_images/img_2.png";
import desert_img3 from "./Images/deserts_images/img_3.png";
import desert_img4 from "./Images/deserts_images/img_4.png";
import desert_img5 from "./Images/deserts_images/img_5.png";
import desert_img6 from "./Images/deserts_images/img_6.png";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
  BsCreditCard2Back,
  BsPaypal,
} from "react-icons/bs";
import { FaCcVisa } from "react-icons/fa";
import { SiMastercard, SiPayoneer } from "react-icons/si";
import { IoMdArrowDropdown } from "react-icons/io";

const tabs = {
  home: "HOME",
  menu: "menu",
  reservation: "reservation",
};

function App() {
  const [tab, setTab] = useState(tabs.home);

  const burgerImgs = [
    { name: "Cozy Burger", url: burger_img1 },
    { name: "Patty Planet", url: burger_img2 },
    { name: "Burger Dungeon", url: burger_img3 },
    { name: "Super Nova", url: burger_img4 },
    { name: "Jazz Burger", url: burger_img5 },
    { name: "Virgo Burge", url: burger_img6 },
    { name: "Cozy Burger", url: burger_img1 },
    { name: "Patty Planet", url: burger_img2 },
    { name: "Burger Dungeon", url: burger_img3 },
    { name: "Super Nova", url: burger_img4 },
    { name: "Jazz Burger", url: burger_img5 },
    { name: "Virgo Burge", url: burger_img6 },
    { name: "Cozy Burger", url: burger_img1 },
    { name: "Patty Planet", url: burger_img2 },
    { name: "Burger Dungeon", url: burger_img3 },
    { name: "Super Nova", url: burger_img4 },
    { name: "Jazz Burger", url: burger_img5 },
    { name: "Virgo Burge", url: burger_img6 },
  ];
  const desertImgs = [
    { name: "Chocolate Shake", url: desert_img1 },
    { name: "Chocolate Smoothie", url: desert_img2 },
    { name: "Oreo Ice-cream", url: desert_img3 },
    { name: "Sundae Special", url: desert_img4 },
    { name: "Strawberry Smoothie", url: desert_img5 },
    { name: "Sweet Cone", url: desert_img6 },
    { name: "Chocolate Shake", url: desert_img1 },
    { name: "Chocolate Smoothie", url: desert_img2 },
    { name: "Oreo Ice-cream", url: desert_img3 },
    { name: "Sundae Special", url: desert_img4 },
    { name: "Strawberry Smoothie", url: desert_img5 },
    { name: "Sweet Cone", url: desert_img6 },
    { name: "Chocolate Shake", url: desert_img1 },
    { name: "Chocolate Smoothie", url: desert_img2 },
    { name: "Oreo Ice-cream", url: desert_img3 },
    { name: "Sundae Special", url: desert_img4 },
    { name: "Strawberry Smoothie", url: desert_img5 },
    { name: "Sweet Cone", url: desert_img6 },
  ];

  return (
    <div className="App">
      <header className="bg-[#202020] py-4 px-2 sm:p-4 flex items-center justify-center fixed top-0 z-[9999] w-screen">
        <div className="w-10 md:w-20 h-[4px] bg-white" />
        <h2 className="text-white font-DMserif mx-2 text-lg md:text-2xl tracking-widest">
          Spicella Burgers
        </h2>
        <div className="w-10 md:w-20 h-[4px] bg-white" />
      </header>
      <nav className="bg-black bg-opacity-30 md:bg-opacity-70 flex justify-center items-center h-screen w-14 md:w-20 fixed left-0 z-[999]">
        <ul className="flex -rotate-90 ">
          <button
            className="border-2 border-yellow-500 text-yellow-500 px-4 py-1 rounded-full font-medium mx-2 hover:bg-yellow-500 hover:text-[#fff] transition-all cursor-pointer text-xs sm:text-base 2xl:text-2xl"
            onClick={() => setTab(tabs.reservation)}
          >
            Reservation
          </button>
          <button
            className="border-2 border-yellow-500 text-yellow-500 px-4 py-1 rounded-full font-medium mx-2 hover:bg-yellow-500 hover:text-[#fff] transition-all cursor-pointer text-xs sm:text-base 2xl:text-2xl"
            onClick={() => setTab(tabs.menu)}
          >
            Menu
          </button>
          <button
            className="border-2 border-yellow-500 text-yellow-500 px-4 py-1 rounded-full font-medium mx-2 hover:bg-yellow-500 hover:text-[#fff] transition-all cursor-pointer text-xs sm:text-base 2xl:text-2xl"
            onClick={() => setTab(tabs.home)}
          >
            Home
          </button>
        </ul>
      </nav>
      <section className="h-screen w-screen flex overflow-hidden">
        <Home setTab={setTab}/>
        <Menu
          burgerImgs={burgerImgs}
          desertImgs={desertImgs}
          tab={tab}
          setTab={setTab}
        />
        <Reservation tab={tab} setTab={setTab} />
      </section>
    </div>
  );
}

export default App;

const Home = (props) => {
  return (
    <div className="w-screen h-screen flex-none bg-[url('https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers/l-intro-1650118593.jpg')] bg-cover relative after:w-screen after:h-screen after:bg-black after:z-[0] after:opacity-40 after:md:opacity-70 after:absolute after:top-0">
      {/* <div className=""/> */}
      <div className="text-white absolute left-14 md:left-20 top-14 z-[10] pt-10 md:pt-16 pl-2 sm:pl-8 h-[90%] xl:flex xl:flex-col xl:justify-center">
        <h1 className="text-3xl md:text-5xl 2xl:text-8xl font-bold font-poppins">
          Welcome to <br className="sm:hidden" /> Spicella{" "}
          <span className="text-yellow-600">Burger</span>,
        </h1>
        <h1 className="text-lg md:text-3xl 2xl:text-6xl font-bold font-poppins">
          Home of the Good Burger.
        </h1>
        <h1 className="text-lg md:text-3xl 2xl:text-6xl font-bold font-poppins">
          Can I take your order?
        </h1>
        <p className="mt-4 text-xs md:text-base 2xl:text-2xl md:w-[40em]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          corrupti delectus voluptates odit? Culpa accusamus maiores aspernatur
          obcaecati reprehenderit distinctio atque facere, officiis porro
          perspiciatis.
        </p>
        <div className="flex mt-4 w-[100%] pr-10">
          <button className="text-white bg-[#D90000] text-sm sm:text-base px-4 sm:px-8 sm:py-2 py-1 mr-2 font-semibold md:font-normal font-poppins tracking-widest hover:scale-110 transition-all 2xl:text-4xl 2xl:px-14 2xl:py-4" onClick={() => props.setTab(tabs.menu)}>
            Menu
          </button>
          <button className="text-[#fff] bg-transparent px-8 py-1 text-sm sm:text-base border-2 md:border-[3px] border-[#D90000] font-semibold md:font-normal font-poppins relative book_a_date 2xl:text-4xl" onClick={() => props.setTab(tabs.reservation)}>
            Book a Date
          </button>
        </div>
        <article className="flex flex-wrap mt-20">
          <div className="sm:text-center mx-4 mb-2">
            <p className="text-sm sm:text-base 2xl:text-xl">Located in</p>
            <h2 className="text-2xl font-poppins font-bold text-yellow-500 2xl:text-4xl">
              300
            </h2>
            <p className="text-sm sm:text-base 2xl:text-xl">Plus Cities</p>
          </div>
          <div className="sm:text-center mx-4">
            <p className="text-sm sm:text-base 2xl:text-xl">Awarded</p>
            <h2 className="text-2xl font-poppins font-bold text-yellow-500 2xl:text-4xl">
              Quality A+
            </h2>
            <p className="text-sm sm:text-base 2xl:text-xl">By FMA</p>
          </div>
          <div className="sm:text-center mx-4 mb-2">
            <p className="text-sm sm:text-base 2xl:text-xl">More than</p>
            <h2 className="text-2xl font-poppins font-bold text-yellow-500 2xl:text-4xl">
              50
            </h2>
            <p className="text-sm sm:text-base 2xl:text-xl">Burgers</p>
          </div>
          <div className="sm:text-center mx-4">
            <p className="text-sm sm:text-base 2xl:text-xl">Exceptional</p>
            <h2 className="text-2xl font-poppins font-bold text-yellow-500 2xl:text-4xl">
              20 Years
            </h2>
            <p className="text-sm sm:text-base 2xl:text-xl">of experience</p>
          </div>
        </article>
      </div>
    </div>
  );
};

const Menu = (props) => {
  const [burgerSlidevalue, setBurgerSlideValue] = useState(0);
  const [desertSlidevalue, setDesertSlideValue] = useState(0);

  function slideLeft(value, setValue) {
    if (value < 0) {
      setValue(value + 10);
    }
  }
  function slideRight(value, setValue) {
    if (value > -90) {
      setValue(value - 10);
    }
  }

  return (
    <section
      className={`w-screen overflow-hidden h-screen bg-yellow-400 ${
        props.tab === tabs.menu ? "translate-x-[-100vw]" : "translate-x-0"
      }  left-0 top-0 z-[20] flex items-center flex-none transition-all`}
    >
      <div className="text-white pl-16 md:pl-24 menu 2xl:mx-auto">
        <h1 className="text-[#303030] text-4xl font-poppins font-bold md:text-center 2xl:w-[1536px] 2xl:text-5xl">
          Menu
        </h1>
        <div className="flex justify-between items-center mt-2 md:mt-0 md:mx-4 w-[80vw] lg:w-[90vw] 2xl:w-[1536px]">
          <h3 className="text-2xl 2xl:text-3xl font-bold font-poppins text-[#fff] md:mt-0">
            Our Special
          </h3>
          <div className="">
            <button
              className="text-2xl mx-1 text-[#303030] hover:text-[#4e4e4e] active:translate-y-1 transition-all"
              onClick={() => slideLeft(burgerSlidevalue, setBurgerSlideValue)}
            >
              <BsFillArrowLeftSquareFill />
            </button>
            <button
              className="text-2xl mx-1 text-[#303030] hover:text-[#4e4e4e] active:translate-y-1 transition-all"
              onClick={() => slideRight(burgerSlidevalue, setBurgerSlideValue)}
            >
              <BsFillArrowRightSquareFill />
            </button>
          </div>
        </div>
        <div className="w-[90vw] 2xl:w-[1536px] overflow-hidden relative mb-4 md:mb-2">
          <section
            className="flex items-end md:mx-4 w-[90vw] 2xl:w-[1536px] transition-all"
            style={{ transform: `translateX(${burgerSlidevalue + "rem"})` }}
          >
            {props.burgerImgs.map((img, index) => {
              return (
                <article
                  className="flex flex-col items-center mx-1 md:mx-2 flex-none w-20 md:w-32"
                  key={index}
                >
                  <img src={img.url} alt="burger_image" className="h-[100px]" />
                  <h2 className="text-sm md:text-xl text-center text-[#303030] font-bold font-lato">
                    {img.name}
                  </h2>
                  <button className="text-xs md:text-base bg-[#D90000] px-4 py-1 mt-2 hover:scale-110 transition-all">
                    Buy Now
                  </button>
                </article>
              );
            })}
          </section>
        </div>
        <div className="flex justify-between items-center  mt-2 md:mx-4 w-[80vw] lg:w-[90vw] 2xl:w-[1536px]">
          <h3 className="text-2xl 2xl:text-3xl font-bold font-poppins text-[#fff] mt-2 md:mt-4">
            Deserts
          </h3>
          <div>
            <button
              className="text-2xl mx-1 text-[#303030] hover:text-[#4e4e4e] active:translate-y-1 transition-all"
              onClick={() => slideLeft(desertSlidevalue, setDesertSlideValue)}
            >
              <BsFillArrowLeftSquareFill />
            </button>
            <button
              className="text-2xl mx-1 text-[#303030] hover:text-[#4e4e4e] active:translate-y-1 transition-all"
              onClick={() => slideRight(desertSlidevalue, setDesertSlideValue)}
            >
              <BsFillArrowRightSquareFill />
            </button>
          </div>
        </div>
        <div className="w-[90vw] overflow-hidden relative  2xl:w-[1536px]">
          <section
            className="flex items-end md:mx-4 w-[90vw] transition-all"
            style={{ transform: `translateX(${desertSlidevalue + "rem"})` }}
          >
            {props.desertImgs.map((desert, index) => {
              return (
                <article
                  className="flex flex-col items-center mx-1  md:mx-2 flex-none w-20 md:w-32"
                  key={index}
                >
                  <img
                    src={desert.url}
                    alt="burger_image"
                    className="h-[100px]"
                  />
                  <h2 className="text-sm md:text-xl text-center text-[#303030] font-bold font-lato">
                    {desert.name}
                  </h2>
                  <button className="text-xs md:text-base bg-[#D90000] px-4 py-1 mt-2 hover:scale-110 transition-all">
                    Buy Now
                  </button>
                </article>
              );
            })}
          </section>
        </div>
      </div>
    </section>
  );
};

const Reservation = (props) => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <section
      className={`w-screen h-screen bg-[#303030] ${
        props.tab === tabs.reservation ? "translate-x-[-200%]" : "translate-x-0"
      } left-0 top-0 z-[30] sm:flex items-center pr-4 flex-none transition-all`}
    >
      <div className="text-white pl-16 md:pl-28 pt-16 pr-2 sm:pt-0 sm:flex-1 lg:flex-none">
        <h1 className="text-2xl md:text-4xl font-bold font-poppins mt-2">
          Reservation
        </h1>
        <h2 className="text-lg md:text-xl font-poppins mt-2">
          Personal Information
        </h2>
        <form className="flex flex-col items-start w-[100%]">
          {/* ============ ARTICLE========== */}
          <article className="flex flex-col sm:flex-row w-[100%]">
            <div className="form_control relative w-[100%] my-[0.35rem] sm:mr-1">
              <input
                type="text"
                className="z-10 outline-none bg-transparent px-2 py-1 border-2 border-[#707070] rounded-md focus:border-[#bebebe] font-semibold md:font-medium tracking-wider font-poppins capitalize w-[100%]"
                placeholder=" "
                required
              />
              <span className="font-poppins -z-10 text-sm">Name</span>
            </div>
            <div className="form_control relative  w-[100%] my-[0.35rem] sm:ml-1">
              <input
                type="email"
                className="z-10 outline-none bg-transparent px-2 py-1 border-2 border-[#707070] rounded-md focus:border-[#bebebe] font-semibold md:font-medium tracking-wider font-poppins w-[100%]"
                placeholder=" "
                required
              />
              <span className="font-poppins -z-10 text-sm">Email</span>
            </div>
          </article>

          {/* ============ ARTICLE ========== */}

          <article className="flex flex-col sm:flex-row sm:items-end w-[100%]">
            <div className="form_control relative w-[100%] my-[0.35rem] sm:mr-1">
              <input
                type="Number"
                className="z-10 outline-none bg-transparent px-2 py-1 border-2 border-[#707070] rounded-md focus:border-[#bebebe] font-semibold md:font-medium tracking-wider font-poppins w-[100%]"
                placeholder=" "
                required
              />
              <span className="font-poppins -z-10 text-sm">Phone</span>
            </div>
            <div className="form_control relative flex flex-col w-[100%] my-[0.35rem] sm:ml-1">
              <label
                htmlFor="quantity"
                id="quantity"
                className="font-poppins text-sm"
              >
                Select Number of People
              </label>
              <select
                name="quantity"
                id="quantity"
                className="bg-[#494949] py-1 px-2 rounded-md w-[100%] text-sm"
              >
                <option>2</option>
                <option>4</option>
                <option>6</option>
                <option>8</option>
                <option>10</option>
                <option>12</option>
              </select>
            </div>
          </article>

          <h2 className="text-lg md:text-xl font-poppins mt-2">Card Details</h2>

          {/* ============ ARTICLE ========== */}

          <article className="flex flex-col sm:flex-row w-[100%]">
            <div
              className={`form_control relative bg-[#494949] hover:bg-[#414141] py-1 px-2  my-[0.35rem] w-[100%] ${
                dropDown ? "rounded-t" : "rounded"
              } sm:mr-1`}
            >
              <h4
                className="flex items-center cursor-pointer w-[100%] text-sm"
                onClick={() => setDropDown(!dropDown)}
              >
                <BsCreditCard2Back className="mr-1" />
                Select Payment Method
                <IoMdArrowDropdown className="justify-self-end ml-2 text-2xl" />
              </h4>
              <ul
                className={`z-[40] absolute top-8 left-0 py-1 px-2 rounded-b bg-[#494949] w-[100%] border-t-2 border-white ${
                  dropDown ? "block" : "hidden"
                }`}
              >
                <li className="flex items-center cursor-pointer hover:bg-[#303030] px-2 py-1 rounded">
                  <FaCcVisa className="mr-1 text-xl text-[#F7B600]" /> Visa
                </li>
                <li className="flex items-center cursor-pointer hover:bg-[#303030] px-2 py-1 rounded">
                  <SiMastercard className="text-[#EB001B] mr-1 text-xl" />{" "}
                  Master
                </li>
                <li className="flex items-center cursor-pointer hover:bg-[#303030] px-2 py-1 rounded">
                  {" "}
                  <BsPaypal className="text-[#169BD7] mr-1 text-xl" /> Paypal
                </li>
                <li className="flex items-center cursor-pointer hover:bg-[#303030] px-2 py-1 rounded">
                  <SiPayoneer className="text-[#9016d7] mr-1 text-xl" />{" "}
                  Payoneer
                </li>
              </ul>
            </div>
            <div className="form_control relative w-[100%] my-[0.35rem] sm:ml-1">
              <input
                type="Number"
                className="z-10 outline-none bg-transparent px-2 py-1 border-2 border-[#707070] rounded-md focus:border-[#bebebe] font-semibold md:font-medium tracking-wider font-poppins w-[100%]"
                placeholder=" "
                required
              />
              <span className="font-poppins -z-10 text-sm">Card Number</span>
            </div>
          </article>

          {/* ============ ARTICLE ========== */}

          <article className="flex flex-col sm:flex-row  w-[100%]">
            <div className="form_control relative w-[100%] my-[0.35rem] sm:mr-1">
              <input
                type="date"
                className="z-10 outline-none bg-transparent px-2 py-1 border-2 border-[#707070] rounded-md focus:border-[#bebebe] font-semibold md:font-medium tracking-wider font-poppins w-[100%]"
                placeholder=" "
                required
              />
              <span className="font-poppins -z-10 text-sm">Date of Expiry</span>
            </div>

            <div className="form_control relative w-[100%] my-[0.35rem] sm:ml-1">
              <input
                type="Number"
                className="z-10 outline-none bg-transparent px-2 py-1 border-2 border-[#707070] rounded-md focus:border-[#bebebe] font-semibold md:font-medium tracking-wider font-poppins w-[100%]"
                placeholder=" "
                required
              />
              <span className="font-poppins -z-10 text-sm">CVV</span>
            </div>
          </article>

          <div className="mt-2  w-[100%]">
            <button className="px-4 py-1 rounded mx-1 bg-green-600 border-2 border-green-600 hover:bg-green-800 font-poppins font-medium">
              Book
            </button>
            <button
              type="reset"
              className="px-4 py-1 rounded mx-1 bg-transparent border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-poppins font-medium"
            >
              Reset All
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
