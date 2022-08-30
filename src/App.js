function App() {
  return (
    <div className="App">
      <header className="bg-[#202020] py-4 px-2 sm:p-4 flex items-center justify-center fixed top-0 z-20 w-screen">
        <div className="w-10 md:w-20 h-[4px] bg-white"/>
        <h2 className="text-white font-DMserif mx-2 text-lg md:text-2xl tracking-widest">Spicella Burgers</h2>
        <div className="w-10 md:w-20 h-[4px] bg-white"/>
      </header>
      <nav className="bg-black bg-opacity-30 md:bg-opacity-70 flex justify-center items-center h-screen w-14 md:w-20 fixed left-0 z-10">
        <ul className="flex -rotate-90 ">
          <button className="border-2 border-yellow-500 text-yellow-500 px-4 py-1 rounded-full font-medium mx-2 hover:bg-yellow-500 hover:text-[#fff] transition-all cursor-pointer text-xs sm:text-base 2xl:text-2xl">Reservation</button>
          <button className="border-2 border-yellow-500 text-yellow-500 px-4 py-1 rounded-full font-medium mx-2 hover:bg-yellow-500 hover:text-[#fff] transition-all cursor-pointer text-xs sm:text-base 2xl:text-2xl">Menu</button>
          <button className="border-2 border-yellow-500 text-yellow-500 px-4 py-1 rounded-full font-medium mx-2 hover:bg-yellow-500 hover:text-[#fff] transition-all cursor-pointer text-xs sm:text-base 2xl:text-2xl">Home</button>
        </ul>
      </nav>
      <section className="h-screen w-screen overflow-hidden">
        <Home />
      </section>
    </div>
  );
}

export default App;

const Home = () => {
  return (
    <div className="w-screen min-h-screen bg-[url('https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers/l-intro-1650118593.jpg')] bg-cover relative after:w-[100%] after:h-[100%] after:bg-black after:z-0 after:opacity-40 after:md:opacity-70 after:absolute after:top-0">
      {/* <div className=""/> */}
      <div className="text-white absolute left-14 md:left-20 top-16 z-20 pt-10 md:pt-16 pl-2 sm:pl-8 h-[90%] xl:flex xl:flex-col xl:justify-center">
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

// after:content-[''] after:absolute after:top-0 after:left-0 after:bg-[#D90000] hover:after:w-[100%] after:w-[100%] after:overflow-hidden after:transition-all after:h-[100%]