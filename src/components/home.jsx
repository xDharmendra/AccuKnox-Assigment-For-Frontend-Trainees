const Home = () => {
  return (
    <div className="w-full h-screen flex justify-center bg-[#f3f8c5] pt-20">
      <div className="">
        <p className="font-bold text-[30px] ">Go to /dashboard to view the Dashboard</p>
   
        <p className="font-bold text-[30px] ml-[250px]">Or</p>
      
        <a className="font-bold text-[30px] text-blue-600 ml-[140px]" href="/dashboard">Click it - <span className="uppercase underline">Dashboard</span></a>
      </div>
    </div>
  );
};

export default Home;
