
import Rating from '@mui/material/Rating';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [sideBarOpen, setSideBarOpen] = useState(true)
  const [rating, setRating] = useState(0)

  return (
    <main className='bg-[#f1f2f2]' >
      <div className=" mx-auto px-4 py-10 lg:pt-16 lg:pb-0 xl:pt-24 lg:h-screen relative">
        <div className="flex flex-col lg:flex-row gap-5 text-gray-800 lg:h-full lg:overflow-hidden ">

          {/* document */}

          <div className=" w-full mx-auto  max-w-6xl flex-grow lg:order-2 lg:overflow-y-scroll rounded-md ">
            <div className='bg-gray-200/60 min-h-[700px] p-3 px-2 flex flex-col rounded-md xl:px-5 lg:px-4 '>
              <h2 className='mb-3 lg:text-lg font-medium'>Notes Name</h2>
              <div className=' w-full bg-white grid place-items-center rounded-md overflow-y-scroll '>
                <p className='h-[1000px]'>Pdf Area</p>
              </div>
            </div>
          </div>

           <button className={`hidden lg:inline-block  h-min  top-20 text-white bg-[#ec6b25] p-2 rounded-r-full  left-0 xl:top-32  absolute  transition-transform ${sideBarOpen ? '-translate-x-full ' :'translate-x-0 delay-500'}`} onClick = {() => setSideBarOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
          </button>

          {/* side panel */}
          <div className={`lg:overflow-y-scroll lg:order-1 w-full lg:rounded-md  transition-all duration-300 ease-out z-10  flex-shrink-0  ${sideBarOpen ? 'lg:w-[400px]': 'lg:w-0'}`}>
            <div className="space-y-3  pb-10 lg:w-[380px]">
              {/* About Document */}
              <div className='bg-white p-3 rounded-md'>
                <div className='mb-3  hidden lg:block bg-white  z-10 sticky top-0 left-0 w-full py-3 border-b'>
                  <button className=' ml-auto block w-fit ' onClick={() => setSideBarOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                    </svg>
                  </button>
                </div>
                <h1 className='mb-3 font-medium'>UPSC IFS PREVIOUS PAPERS PDF | INDIAN FOREST SERVICE (MAIN) EXAMINATION, 2021 | AGRICULTURAL ENGINEERING PAPER-II</h1>
                <div className='mb-4 space-x-2 text-white text-xs'>
                  <span className='py-1 px-3 rounded-full bg-[#ec6b25] '>IAS</span>
                  <span className='py-1 px-3 rounded-full bg-[#ec6b25] '>IFS</span>
                  <span className='py-1 px-3 rounded-full bg-[#ec6b25] '>India</span>
                </div>
                <div className='flex space-x-5'>
                  <p>15 pages</p>
                  <div>
                    <span className='w-2 h-2 bg-[#ec6b25] rounded-full inline-block mr-2'></span>
                    <p className='inline-block'>12/4/2023</p>
                  </div>
                </div>
                <hr className='my-6 xl:my-8' />
                <h2 className='font-medium'>Reviews & Comments</h2>
                <div className='flex items-center justify-center p-5 xl:py-8'>
                  <Rating
                    name="rating"
                    value={rating}
                    onChange={(event, newValue) => {
                      setRating(newValue);
                    }}

                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-7 h-7 text-[#ec6b25]' >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    }
                    emptyIcon={<svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-7 h-7 text-gray-300' >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    }
                  />
                </div>
                <textarea name="review" id="review" cols="30" rows="10" className='border rounded-lg resize-none w-full h-24 p-3 focus:outline-[#ec6b25]' placeholder='Write a review '></textarea>
                <button className='bg-[#ec6b25] px-4 py-1 text-white rounded-lg disabled:opacity-50' disabled>Post</button>

                <div className='bg-gray-100 rounded-lg mt-7'>
                  <button className='flex items-center justify-between w-full py-4 px-3'>
                    <p className='font-medium'>Reviews</p>
                    <div className='text-white bg-[#ec6b25] p-2 rounded-full'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              {/* About publisher */}
              <div className='bg-white p-3 rounded-md'>
                <h2 className='mb-6 lg:text-lg font-medium'>Published by</h2>
                <div className='py-2 px-3 bg-gray-100 rounded-lg flex items-center mb-5 xl:mb-8'>
                  <div className='flex space-x-3 items-center '>
                    <div className='w-14 h-14 overflow-hidden relative rounded-full'>
                      <Image className='object-cover object-top' fill={true} src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
                    </div>
                    <div>
                      <p className='font-medium '>
                        <span>Rahul</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mb-1 ml-2 text-blue-500 inline-block">
                          <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                        </svg>
                      </p>
                      <p className='text-gray-500 text-sm'>hello world</p>
                    </div>
                  </div>
                  <button className=' ml-auto bg-[#ec6b25] text-white px-8 py-3 rounded-lg text-xs'>Follow</button>
                </div>
                <h2 className='mb-4 lg:text-lg font-medium'>More notes Published by Rahul</h2>
                <div className='space-y-2'>
                  <div className='flex bg-gray-100 p-2 rounded-md items-stretch'>
                    <div className='w-24 flex-shrink-0 relative mr-2'>
                      <Image src='https://placehold.co/600x400/FFFFFF/808080/png?text=pdf' alt='pdf' fill={true} className='object-cover object-center ' />
                    </div>
                    <div className=''>
                      <p className='font-medium text-xs mb-2 line-clamp-3'>UPSC IFS PREVIOUS PAPERS PDF | INDIAN FOREST SERVICE (MAIN) EXAMINATION, 2021 | AGRICULTURAL ENGINEERING PAPER-II</p>
                      <div className='mb-2 space-x-2 text-white text-xs uppercase'>
                        <span className='py-0.5 px-2 rounded-full bg-[#ec6b25] '>IAS</span>
                        <span className='py-0.5 px-2 rounded-full bg-[#ec6b25] '>IFS</span>
                        <span className='py-0.5 px-2 rounded-full bg-[#ec6b25] '>India</span>
                      </div>
                      <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 fill-[#ec6b25]/70 ">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        <span className='text-xs'>145</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              {/* similar notes */}
              <div className='bg-white p-3 rounded-md'>
                <h2 className='mb-4 lg:text-lg font-medium'>Similar notes</h2>
                <div className='space-y-2'>
                  <div className='flex bg-gray-100 p-2 rounded-md items-stretch'>
                    <div className='w-24  flex-shrink-0 relative mr-2'>
                      <Image src='https://placehold.co/600x400/FFFFFF/808080/png?text=pdf' alt='pdf' fill={true} className='object-cover object-center ' />
                    </div>
                    <div className=''>
                      <p className='font-medium text-xs  line-clamp-3'>UPSC IFS PREVIOUS PAPERS PDF | INDIAN FOREST SERVICE (MAIN) EXAMINATION, 2021 | AGRICULTURAL ENGINEERING PAPER-II</p>
                      <Link href='#' className='text-[#ec6b25] underline text-xs block mb-2' >by Rahul</Link>
                      <div className='mb-2 space-x-2 text-white text-xs uppercase'>
                        <span className='py-0.5 px-2 rounded-full bg-[#ec6b25] '>IAS</span>
                        <span className='py-0.5 px-2 rounded-full bg-[#ec6b25] '>IFS</span>
                        <span className='py-0.5 px-2 rounded-full bg-[#ec6b25] '>India</span>
                      </div>
                      <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 fill-[#ec6b25]/70 ">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        <span className='text-xs'>145</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
