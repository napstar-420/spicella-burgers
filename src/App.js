import React, {useState} from 'react'
import burger_img1 from './Images/img_1.png'
import burger_img2 from './Images/img_2.png'
import burger_img3 from './Images/img_3.png'
import burger_img4 from './Images/img_4.png'
import burger_img5 from './Images/img_5.png'
import burger_img6 from './Images/img_6.png'
import desert_img1 from './Images/deserts_images/img_1.png'
import desert_img2 from './Images/deserts_images/img_2.png'
import desert_img3 from './Images/deserts_images/img_3.png'
import desert_img4 from './Images/deserts_images/img_4.png'
import desert_img5 from './Images/deserts_images/img_5.png'
import desert_img6 from './Images/deserts_images/img_6.png'
import {BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from 'react-icons/bs'

function App() {
  
  const burgerImgs = [
    {name: "Cozy Burger" , url: burger_img1},
    {name: "Patty Planet" , url: burger_img2},
    {name: "Burger Dungeon", url: burger_img3},
    {name: "Super Nova", url: burger_img4},
    {name: "Jazz Burger", url: burger_img5},
    {name: "Virgo Burge", url: burger_img6},
    {name: "Cozy Burger" , url: burger_img1},
    {name: "Patty Planet" , url: burger_img2},
    {name: "Burger Dungeon", url: burger_img3},
    {name: "Super Nova", url: burger_img4},
    {name: "Jazz Burger", url: burger_img5},
    {name: "Virgo Burge", url: burger_img6},
    {name: "Cozy Burger" , url: burger_img1},
    {name: "Patty Planet" , url: burger_img2},
    {name: "Burger Dungeon", url: burger_img3},
    {name: "Super Nova", url: burger_img4},
    {name: "Jazz Burger", url: burger_img5},
    {name: "Virgo Burge", url: burger_img6},
  ]
  const desertImgs = [
    {name: "Chocolate Shake" , url: desert_img1 },
    {name: "Chocolate Smoothie" , url: desert_img2 },
    {name: "Oreo Ice-cream", url: desert_img3 },
    {name: "Sundae Special", url: desert_img4 },
    {name: "Strawberry Smoothie", url: desert_img5 },
    {name: "Sweet Cone", url: desert_img6 },
    {name: "Chocolate Shake" , url: desert_img1 },
    {name: "Chocolate Smoothie" , url: desert_img2 },
    {name: "Oreo Ice-cream", url: desert_img3 },
    {name: "Sundae Special", url: desert_img4 },
    {name: "Strawberry Smoothie", url: desert_img5 },
    {name: "Sweet Cone", url: desert_img6 },
    {name: "Chocolate Shake" , url: desert_img1 },
    {name: "Chocolate Smoothie" , url: desert_img2 },
    {name: "Oreo Ice-cream", url: desert_img3 },
    {name: "Sundae Special", url: desert_img4 },
    {name: "Strawberry Smoothie", url: desert_img5 },
    {name: "Sweet Cone", url: desert_img6 },
  ]

  return (
    <div className="App">
      <header className="bg-[#202020] py-4 px-2 sm:p-4 flex items-center justify-center fixed top-0 z-[9999] w-screen">
        <div className="w-10 md:w-20 h-[4px] bg-white"/>
        <h2 className="text-white font-DMserif mx-2 text-lg md:text-2xl tracking-widest">Spicella Burgers</h2>
        <div className="w-10 md:w-20 h-[4px] bg-white"/>
      </header>
      <nav className="bg-black bg-opacity-30 md:bg-opacity-70 flex justify-center items-center h-screen w-14 md:w-20 fixed left-0 z-[999]">
        <ul className="flex -rotate-90 ">
          <button className="border-2 border-yellow-500 text-yellow-500 px-4 py-1 rounded-full font-medium mx-2 hover:bg-yellow-500 hover:text-[#fff] transition-all cursor-pointer text-xs sm:text-base 2xl:text-2xl">Reservation</button>
          <button className="border-2 border-yellow-500 text-yellow-500 px-4 py-1 rounded-full font-medium mx-2 hover:bg-yellow-500 hover:text-[#fff] transition-all cursor-pointer text-xs sm:text-base 2xl:text-2xl">Menu</button>
          <button className="border-2 border-yellow-500 text-yellow-500 px-4 py-1 rounded-full font-medium mx-2 hover:bg-yellow-500 hover:text-[#fff] transition-all cursor-pointer text-xs sm:text-base 2xl:text-2xl">Home</button>
        </ul>
      </nav>
      <section className="h-screen w-screen">
        <Home />
        <Menu burgerImgs={burgerImgs} desertImgs={desertImgs}/>
      </section>
    </div>
  );
}

export default App;

const Home = () => {
  return (
    <div className="w-screen h-screen bg-[url('https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers/l-intro-1650118593.jpg')] bg-cover relative after:w-screen after:h-screen after:bg-black after:z-[0] after:opacity-40 after:md:opacity-70 after:absolute after:top-0">
      {/* <div className=""/> */}
      <div className="text-white absolute left-14 md:left-20 top-14 z-[10] pt-10 md:pt-16 pl-2 sm:pl-8 h-[90%] xl:flex xl:flex-col xl:justify-center">
        <h1 className="text-3xl md:text-5xl 2xl:text-8xl font-bold font-poppins">Welcome to <br className="sm:hidden"/> Spicella <span className="text-yellow-600">Burger</span>,</h1>
        <h1 className="text-lg md:text-3xl 2xl:text-6xl font-bold font-poppins">Home of the Good Burger.</h1>
        <h1 className="text-lg md:text-3xl 2xl:text-6xl font-bold font-poppins">Can I take your order?</h1>
        <p className="mt-4 text-xs md:text-base 2xl:text-2xl md:w-[40em]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus corrupti delectus voluptates odit? Culpa accusamus maiores aspernatur obcaecati reprehenderit distinctio atque facere, officiis porro perspiciatis.</p>
        <div className="flex mt-4 w-[100%] pr-10">
          <button className="text-white bg-[#D90000] text-sm sm:text-base px-4 sm:px-8 sm:py-2 py-1 mr-2 font-semibold md:font-normal font-poppins tracking-widest hover:scale-110 transition-all 2xl:text-4xl 2xl:px-14 2xl:py-4">Menu</button>
          <button className="text-[#fff] bg-transparent px-8 py-1 text-sm sm:text-base border-2 md:border-[3px] border-[#D90000] font-semibold md:font-normal font-poppins relative book_a_date 2xl:text-4xl ">Book a Date</button>
        </div>
        <article className="flex flex-wrap mt-20">
          <div className="sm:text-center mx-4 mb-2">
            <p className="text-sm sm:text-base 2xl:text-xl">Located in</p>
            <h2 className="text-2xl font-poppins font-bold text-yellow-500 2xl:text-4xl">300</h2>
            <p className="text-sm sm:text-base 2xl:text-xl">Plus Cities</p>
          </div>
          <div className="sm:text-center mx-4">
            <p className="text-sm sm:text-base 2xl:text-xl">Awarded</p>
            <h2 className="text-2xl font-poppins font-bold text-yellow-500 2xl:text-4xl">Quality A+</h2>
            <p className="text-sm sm:text-base 2xl:text-xl">By FMA</p>
          </div>
          <div className="sm:text-center mx-4 mb-2">
            <p className="text-sm sm:text-base 2xl:text-xl">More than</p>
            <h2 className="text-2xl font-poppins font-bold text-yellow-500 2xl:text-4xl">50</h2>
            <p className="text-sm sm:text-base 2xl:text-xl">Burgers</p>
          </div>
          <div className="sm:text-center mx-4">
            <p className="text-sm sm:text-base 2xl:text-xl">Exceptional</p>
            <h2 className="text-2xl font-poppins font-bold text-yellow-500 2xl:text-4xl">20 Years</h2>
            <p className="text-sm sm:text-base 2xl:text-xl">of experience</p>
          </div>
        </article>
      </div>
    </div>
  )
}

const Menu = (props) => {

  const [burgerSlidevalue, setBurgerSlideValue] = useState(0);
  const [desertSlidevalue, setDesertSlideValue] = useState(0);

  function slideLeft(value, setValue) {
    if (value < 0) {
      setValue(value + 10)
    }
  }
  function slideRight(value, setValue) {
    if (value > -90) {
      setValue(value - 10)
    }
  }

  return (
    <section className="w-screen overflow-hidden h-screen bg-yellow-400 absolute left-0 top-0 z-[20] flex items-center">
      <div className="text-white pl-16 md:pl-24 menu 2xl:mx-auto">
        <h1 className="text-[#303030] text-4xl font-poppins font-bold md:text-center 2xl:w-[1536px] 2xl:text-5xl">Menu</h1>
        <div className='flex justify-between items-center mt-2 md:mt-0 md:mx-4 w-[80vw] lg:w-[90vw] 2xl:w-[1536px]'>
          <h3 className="text-2xl 2xl:text-3xl font-bold font-poppins text-[#fff] md:mt-0">Our Special</h3>
          <div className=''>
            <button className='text-2xl mx-1 text-[#303030] hover:text-[#4e4e4e] active:translate-y-1 transition-all' onClick={()=>slideLeft(burgerSlidevalue, setBurgerSlideValue)}>
              <BsFillArrowLeftSquareFill />
            </button>
            <button className='text-2xl mx-1 text-[#303030] hover:text-[#4e4e4e] active:translate-y-1 transition-all' onClick={()=>slideRight(burgerSlidevalue, setBurgerSlideValue)}>
              <BsFillArrowRightSquareFill />
            </button>
          </div>
        </div>
        <div className='w-[90vw] 2xl:w-[1536px] overflow-hidden relative mb-4 md:mb-2'>
          <section className="flex items-end md:mx-4 w-[90vw] 2xl:w-[1536px] transition-all" style={{transform: `translateX(${burgerSlidevalue + 'rem'})`}}>
            {
              props.burgerImgs.map((img, index) => {
                return (
                  <article className="flex flex-col items-center mx-1 md:mx-2 flex-none w-20 md:w-32" key={index}>
                    <img src={img.url} alt="burger_image" className='h-[100px]'/>
                    <h2 className="text-sm md:text-xl text-center text-[#303030] font-bold font-lato">{img.name}</h2>
                    <button className="text-xs md:text-base bg-[#D90000] px-4 py-1 mt-2 hover:scale-110 transition-all">Buy Now</button>
                  </article>
                )
              })
            }
          </section>
        </div>
        <div className='flex justify-between items-center  mt-2 md:mx-4 w-[80vw] lg:w-[90vw] 2xl:w-[1536px]'>
          <h3 className="text-2xl 2xl:text-3xl font-bold font-poppins text-[#fff] mt-2 md:mt-4">Deserts</h3>
          <div>
            <button className='text-2xl mx-1 text-[#303030] hover:text-[#4e4e4e] active:translate-y-1 transition-all' onClick={()=>slideLeft(desertSlidevalue, setDesertSlideValue)}>
              <BsFillArrowLeftSquareFill />
            </button>
            <button className='text-2xl mx-1 text-[#303030] hover:text-[#4e4e4e] active:translate-y-1 transition-all' onClick={()=>slideRight(desertSlidevalue, setDesertSlideValue)}>
              <BsFillArrowRightSquareFill />
            </button>
          </div>
        </div>
        <div className='w-[90vw] overflow-hidden relative  2xl:w-[1536px]'>
          <section className="flex items-end md:mx-4 w-[90vw] transition-all" style={{transform: `translateX(${desertSlidevalue+ 'rem'})`}}>
            {
              props.desertImgs.map((desert, index) => {
                return (
                  <article className="flex flex-col items-center mx-1  md:mx-2 flex-none w-20 md:w-32" key={index}>
                    <img src={desert.url} alt="burger_image" className='h-[100px]'/>
                    <h2 className="text-sm md:text-xl text-center text-[#303030] font-bold font-lato">{desert.name}</h2>
                    <button className="text-xs md:text-base bg-[#D90000] px-4 py-1 mt-2 hover:scale-110 transition-all">Buy Now</button>
                  </article>
                )
              })
            }
          </section>
        </div>
      </div>
    </section>
  )
}