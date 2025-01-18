
function NavigationBar() {
  return (
    <nav className='flex justify-between max-w-[1440px] mt-0 mb-0 ml-auto mr-auto h-20 '>
    <div className='mt-4 w-[76px] h-[42px] ml-[85px]'><img src="/images/brand_logo.png" alt="" /></div>
    <div className='uppercase flex gap-6 mt-6 w-[333px] h-[24px]'>
      <a href=''>Menu</a>
      <a href=''>Location</a>
      <a href=''>About</a>
      <a href=''>Contact</a>
    </div>
    <button className=' pr-[16px] pl-[16px]  bg-[#D01C28] w-[75px] h-[31px] mt-[21px] mr-[85px] text-white'>Login</button>
  </nav>
  )
}

export default NavigationBar