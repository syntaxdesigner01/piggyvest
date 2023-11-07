import '../app/globals.css'

function Home() {
  return (
    <main className="pt-[20%] px-20">
      <div className="flex  justify-between">

        <div className="w-[40%]">
          <h1 className="font-extrabold text-5xl text-primary font-EinaBold  ">The Better Way to Save & Invest</h1>
          <p>Piggyvest helps over 4 million customers achieve their financial goals by helping them save and invest with ease.</p>
        </div>

        <div className='border-[15px] border-white rounded-2xl bg-[asserts/woman.jpeg] bg-cover bg-center bg-no-repeat h-[520px] w-[500px]' >
          {/* <img src="/asserts/woman.jpeg" alt="" className='w-[500px] h-[520px]' /> */}
          {/* ewdghe */}
        </div>
      </div>
    </main>
  );
}

export default Home;
