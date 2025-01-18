

function Section() {
  return (
    <section className='w-[1000px] h-[613px]   ml-auto mr-auto flex gap-9'>
      <div className='w-[595px] h-[613px]'>
        <h1 className='w-[595px] h-[306px] text-[108px] leading-[102px] font-extrabold flex flex-row mt-16'>YOUR FEET DESERVE THE BEST</h1>
        <p className='w-[404px] h-[91px] text-[16px] font-semibold leading-[24px] mt-5'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="flex gap-10 mt-6">
          <button className="w-[140px] h-[41px] text-white text-[16px] leading-7 font-semibold bg-[#D01C28] pt-[6px]  pb-[6px] gap-3">Shop Now</button>
          <button className="w-[150] h-[41] border-2 border-blue-400 pt-[6px] pr-[16px] pb-[6px] pl-[16px] gap-3">Category</button>
        </div>
        <div className="mt-6">
          <p className="w-[131px] h-[19px] text-[#5A5959] text-[14px] leading-5 font-normal ml-[-470px]">Also Available On</p>
          <div className="flex gap-4 mt-3">
            <img src="/images/flipkart.png" alt="" />
            <img src="/images/amazon.png" alt="" />
          </div>
        </div>
       </div>
       <div className="mt-28"><img src="./images/shoe_image.png" alt="" /></div>
    </section>
  )
}

export default Section