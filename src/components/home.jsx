import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full h-screen flex justify-center bg-[#d0e3fc] pt-20">
      <div className="">
        <p className="font-bold text-[30px] mb-[15px]">Go to /dashboard v2 on navbar to view the Dashboard</p>

        <div className='flex justify-center mb-[20px]'><p className="font-bold text-[30px]">Or</p></div>

        <div className='flex justify-center'><Link className="text-[25px] text-[#e5e5e5] rounded-[30px] p-2 pl-6 pr-6 shadow-lg bg-[#38bdf8] hover:bg-[#0ea5e9] hover:text-[#e5e5e5] active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" to="/dashboard">Click here - <span className="">To View Dashboard</span></Link></div>

      </div>
    </div>
  );
};

export default Home;
