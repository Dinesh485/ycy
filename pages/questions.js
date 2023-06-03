

import Accordion from "@/components/accoridon"
import { useState } from "react"

const Questions = () => {
    const [filtersOpen, setFiltersOpen] = useState(false)
    const [activeTab, setActiveTab] = useState('questions')

    return (
        <div className="max-w-screen-xl mx-auto lg:flex  lg:pt-24">

            <div className={`lg:flex-grow lg:order-2  py-4 max-w-4xl mx-auto relative lg:pt-0 `}>

                {/* ask a question */}
                {/* <form className="md:flex md:space-x-3 px-4">
                    <div className="relative w-full ">
                        <textarea name="question" id="" cols="30" rows="10" placeholder="Ask a question" className="w-full m-0 resize-none h-24 p-2 rounded-md border border-gray-200 bg-gray-50" ></textarea>
                        <input id='attach' type="file" className="hidden" />
                        <label htmlFor="attach" className="block w-4 h-4  absolute bottom-4 right-4 cursor-pointer lg:w-5 lg:h-5" title='attach an image'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                            </svg>

                        </label>
                    </div>
                    <div className="space-x-2 md:space-x-0 md:space-y-2 md:w-min">
                        <div tabIndex={0} className="relative group inline-block">
                            <button className="text-[#ec6b25] border-2 border-[#ec6b25]  font-medium rounded-lg text-sm px-4 py-1.5 text-center inline-flex items-center md:py-2.5" type="button">Subject <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></button>
                            <div className="z-10 mt-2 hidden bg-gray-50  divide-y divide-gray-100 absolute rounded-lg shadow-md w-44 max-h-48 overflow-y-auto group-focus-within:block md:right-0">
                                <ul className="py-2 text-sm text-gray-800  " >
                                    <li>
                                        <button className="block px-4 py-2 hover:bg-orange-200 w-full text-left ">Science</button>
                                    </li>
                                    <li>
                                        <button className="block px-4 py-2 hover:bg-orange-200 w-full text-left ">Engineering</button>
                                    </li>
                                    <li>
                                        <button className="block px-4 py-2 hover:bg-orange-200 w-full text-left ">Biology</button>
                                    </li>
                                    <li>
                                        <button className="block px-4 py-2 hover:bg-orange-200 w-full text-left "></button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button className="text-white border-2 border-[#ec6b25] bg-[#ec6b25]  font-medium rounded-lg text-sm px-4 py-1.5 text-center inline-flex items-center md:py-2.5" type="button">Submit</button>
                    </div>


                </form> */}
                <div className="px-4 lg:px-8 ">
                    <div className="p-4 border border-gray-400  rounded-lg shadow lg:p-8">
                        <h1 className="text-xl mb-3 md:text-3xl md:mb-4">Ask a Question And Help Your Friends <br /> Discover Solution</h1>
                        <button className="px-5 py-1.5 rounded-full bg-gray-800 text-white transition-colors duration-100 hover:bg-[#ec6b25]">Ask Question</button>
                    </div>
                </div>

                {/* stikcy bar */}
                <div className=" px-4  my-5 sticky top-0 bg-white border-b z-10 lg:px-8 lg:border-none lg:mb-0 ">

                    <div className="flex items-center justify-between py-2">
                        <div>
                            <button onClick = {() => setActiveTab('questions')} className={`font-medium transition-all duraiont-300 ${activeTab ==='questions' ? 'text-2xl text-gray-700': 'text-base text-gray-500'}`}>Questions</button>
                            <button onClick = {() => setActiveTab('QAforYou')} className={`font-medium transition-all duraiont-300 ml-3  ${activeTab ==='QAforYou' ? 'text-2xl text-gray-700': 'text-base text-gray-500'}`}>Q/A for you</button>
                        </div>
                        {/* filter and sort buttons */}
                        <div className=" py-1   flex items-center ">
                            <div tabIndex={1} className="relative group inline-block">
                                <button type="button" className="inline-flex items-center p-1  ">
                                    <span className="sr-only">Filters</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                                    </svg>

                                </button>
                                <div className="z-10 mt-2 hidden bg-gray-50  divide-y divide-gray-100 absolute rounded-lg shadow-md w-44 max-h-48 overflow-y-auto group-focus-within:block right-0">
                                    <ul className="py-2 text-sm text-gray-800  " >
                                        <li>
                                            <button className="block px-4 py-2 hover:bg-orange-200 w-full text-left ">by date</button>
                                        </li>
                                        <li>
                                            <button className="block px-4 py-2 hover:bg-orange-200 w-full text-left ">by answers</button>
                                        </li>
                                        <li>
                                            <button className="block px-4 py-2 hover:bg-orange-200 w-full text-left ">Recomended</button>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <button onClick={() => setFiltersOpen(true)} type="button" className="inline-flex items-center   ml-3  lg:hidden  ">
                                <span className="sr-only">Filters</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <hr className="hidden lg:block lg:mb-5" />

                </div>

                {/* questions */}
               { activeTab === 'questions' && <div className="p-4 space-y-3 lg:px-8 ">
                    <a href={'/'} className="py-2 px-3 bg-gray-100 rounded-lg block ">
                        <div className="flex space-x-3 items-center mb-2">
                            <div className='w-7 h-7 overflow-hidden relative rounded-full'>
                                <img className='object-cover object-top' src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
                            </div>
                            <div>
                                <p className="font-medium text-xs">
                                    <span>User name</span>
                                </p>
                                <p className="text-gray-500 text-xs space-x-2">
                                    <span>subject</span>
                                    <span>time</span>
                                </p>
                            </div>
                        </div>
                        <p className="text-base line-clamp-3">In what ways has the integration of blockchain technology demonstrated its potential for transformative applications beyond its initial use case in cryptocurrency, and how has it impacted various industries and sectors?</p>
                    </a>
                    <a href={'/'} className="py-2 px-3 bg-gray-100 rounded-lg block ">
                        <div className="flex space-x-3 items-center mb-2">
                            <div className='w-7 h-7 overflow-hidden relative rounded-full'>
                                <img className='object-cover object-top' fill={true} src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
                            </div>
                            <div>
                                <p className="font-medium text-xs">
                                    <span>User name</span>
                                </p>
                                <p className="text-gray-500 text-xs space-x-2">
                                    <span>subject</span>
                                    <span>time</span>
                                </p>
                            </div>
                        </div>
                        <p className="text-base line-clamp-3">In what ways has the integration of blockchain technology demonstrated its potential for transformative applications beyond its initial use case in cryptocurrency, and how has it impacted various industries and sectors?</p>
                    </a>
                    <a href={'/'} className="py-2 px-3 bg-gray-100 rounded-lg block ">
                        <div className="flex space-x-3 items-center mb-2">
                            <div className='w-7 h-7 overflow-hidden relative rounded-full'>
                                <img className='object-cover object-top' fill={true} src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
                            </div>
                            <div>
                                <p className="font-medium text-xs">
                                    <span>User name</span>
                                </p>
                                <p className="text-gray-500 text-xs space-x-2">
                                    <span>subject</span>
                                    <span>time</span>
                                </p>
                            </div>
                        </div>
                        <p className="text-base line-clamp-3">In what ways has the integration of blockchain technology demonstrated its potential for transformative applications beyond its initial use case in cryptocurrency, and how has it impacted various industries and sectors?</p>
                    </a>
                    <a href={'/'} className="py-2 px-3 bg-gray-100 rounded-lg block ">
                        <div className="flex space-x-3 items-center mb-2">
                            <div className='w-7 h-7 overflow-hidden relative rounded-full'>
                                <img className='object-cover object-top' fill={true} src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
                            </div>
                            <div>
                                <p className="font-medium text-xs">
                                    <span>User name</span>
                                </p>
                                <p className="text-gray-500 text-xs space-x-2">
                                    <span>subject</span>
                                    <span>time</span>
                                </p>
                            </div>
                        </div>
                        <p className="text-base line-clamp-3">In what ways has the integration of blockchain technology demonstrated its potential for transformative applications beyond its initial use case in cryptocurrency, and how has it impacted various industries and sectors?</p>
                    </a>
                    <a href={'/'} className="py-2 px-3 bg-gray-100 rounded-lg block ">
                        <div className="flex space-x-3 items-center mb-2">
                            <div className='w-7 h-7 overflow-hidden relative rounded-full'>
                                <img className='object-cover object-top' fill={true} src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
                            </div>
                            <div>
                                <p className="font-medium text-xs">
                                    <span>User name</span>
                                </p>
                                <p className="text-gray-500 text-xs space-x-2">
                                    <span>subject</span>
                                    <span>time</span>
                                </p>
                            </div>
                        </div>
                        <p className="text-base line-clamp-3">In what ways has the integration of blockchain technology demonstrated its potential for transformative applications beyond its initial use case in cryptocurrency, and how has it impacted various industries and sectors?</p>
                    </a>


                </div>}

                {/* Q/A for you */}
                {activeTab === 'QAforYou' && <div className="p-4 space-y-3 lg:px-8 ">

                    <a href={'/'} className="py-2 px-3 bg-gray-100 rounded-lg block ">
                        <div className="flex space-x-3 items-center mb-2">
                            <div className='w-7 h-7 overflow-hidden relative rounded-full'>
                                <img className='object-cover object-top' fill={true} src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
                            </div>
                            <div>
                                <p className="font-medium text-xs">
                                    <span>User name</span>
                                </p>
                                <p className="text-gray-500 text-xs space-x-2">
                                    <span>subject</span>
                                    <span>time</span>
                                </p>
                            </div>
                        </div>
                        <p className="text-base line-clamp-3">In what ways has the integration of blockchain technology demonstrated its potential for transformative applications beyond its initial use case in cryptocurrency, and how has it impacted various industries and sectors?</p>
                    </a>
                    <a href={'/'} className="py-2 px-3 bg-gray-100 rounded-lg block ">
                        <div className="flex space-x-3 items-center mb-2">
                            <div className='w-7 h-7 overflow-hidden relative rounded-full'>
                                <img className='object-cover object-top' fill={true} src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
                            </div>
                            <div>
                                <p className="font-medium text-xs">
                                    <span>User name</span>
                                </p>
                                <p className="text-gray-500 text-xs space-x-2">
                                    <span>subject</span>
                                    <span>time</span>
                                </p>
                            </div>
                        </div>
                        <p className="text-base line-clamp-3">In what ways has the integration of blockchain technology demonstrated its potential for transformative applications beyond its initial use case in cryptocurrency, and how has it impacted various industries and sectors?</p>
                    </a>


                </div>
                }
            </div>

            {/* side bar */}
            <div className={`h-full w-full z-10 fixed top-0 left-0 bg-gray-300/80 transition-opacity duration-200 lg:hidden  ${filtersOpen ? 'pointer-events-all opacity-100' : 'pointer-events-none opacity-0'}`} onClick={() => setFiltersOpen(false)}></div>
            <aside id="default-sidebar" className={`fixed top-0 left-0 z-40 h-screen overflow-y-auto transition-transform w-64 bg-gray-300/90 lg:translate-x-0 duration-300 ease-out flex-shrink-0 ${filtersOpen ? '-translate-x-0' : '-translate-x-full'} lg:transfrom-none  lg:sticky lg:h-[calc(100vh-96px)] lg:top-24`} aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
                    <ul className="space-y-4 ">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-medium">Filters</h2>
                            <button onClick={() => setFiltersOpen(false)} className="lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                                </svg>
                            </button>
                        </div>
                        <li>
                            <Accordion
                                btn={
                                    (isOpen) => {
                                        return (
                                            <button type="button" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 " aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                                <span className="flex-1 ml-3 text-left whitespace-nowrap font-medium">Category</span>
                                                <svg className={`w-6 h-6 ${isOpen && 'rotate-180'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            </button>
                                        )
                                    }
                                }
                                content={
                                    <ul id="dropdown-example" className="  space-y-2 ml-8">

                                        <li>
                                            <input type="radio" id="all_questions" name='category' value="" className="hidden peer" required="" />
                                            <label htmlFor="all_questions" className="flex items-center w-full py-1 px-3 text-gray-800  rounded-md cursor-pointer     peer-checked:text-gray-100 peer-checked:bg-[#ec6b25] hover:bg-gray-100 ">
                                                All Questions
                                            </label>
                                        </li>
                                        <li>
                                            <input type="radio" id="answered" name='category' value="" className="hidden peer" required="" />
                                            <label htmlFor="answered" className="flex items-center w-full py-1 px-3 text-gray-800  rounded-md cursor-pointer     peer-checked:text-gray-100 peer-checked:bg-[#ec6b25] hover:bg-gray-100 ">
                                                Answered
                                            </label>
                                        </li>
                                        <li>
                                            <input type="radio" id="unanswered" name='category' value="" className="hidden peer" required="" />
                                            <label htmlFor="unanswered" className="flex items-center w-full py-1 px-3 text-gray-800  rounded-md cursor-pointer     peer-checked:text-gray-100 peer-checked:bg-[#ec6b25] hover:bg-gray-100 ">
                                                Unanswered
                                            </label>
                                        </li>


                                    </ul>
                                }
                            />
                        </li>
                        <li>
                            <Accordion
                                btn={
                                    (isOpen) => {
                                        return (
                                            <button type="button" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 " aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                                <span className="flex-1 ml-3 text-left whitespace-nowrap font-medium">Subjects</span>
                                                <svg className={`w-6 h-6 ${isOpen && 'rotate-180'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            </button>
                                        )
                                    }
                                }
                                content={
                                    <ul id="dropdown-example" className="  space-y-2 ml-8">

                                        <li>
                                            <input type="checkbox" id="maths" value="" className="hidden peer" required="" />
                                            <label htmlFor="maths" className="flex items-center w-full py-1 px-3 text-gray-800  rounded-md cursor-pointer   peer-checked:text-gray-100 peer-checked:bg-[#ec6b25] hover:bg-gray-100 ">
                                                Maths
                                            </label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="science" value="" className="hidden peer" required="" />
                                            <label htmlFor="science" className="flex items-center w-full py-1 px-3 text-gray-800  rounded-md cursor-pointer   peer-checked:text-gray-100 peer-checked:bg-[#ec6b25] hover:bg-gray-100 ">
                                                Science
                                            </label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="humanity" value="" className="hidden peer" required="" />
                                            <label htmlFor="humanity" className="flex items-center w-full py-1 px-3 text-gray-800  rounded-md cursor-pointer   peer-checked:text-gray-100 peer-checked:bg-[#ec6b25] hover:bg-gray-100 ">
                                                Humanity
                                            </label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="diploma" value="" className="hidden peer" required="" />
                                            <label htmlFor="diploma" className="flex items-center w-full py-1 px-3 text-gray-800  rounded-md cursor-pointer     peer-checked:text-gray-100 peer-checked:bg-[#ec6b25] hover:bg-gray-100 ">
                                                Diploma
                                            </label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="medical" value="" className="hidden peer" required="" />
                                            <label htmlFor="medical" className="flex items-center w-full py-1 px-3 text-gray-800  rounded-md cursor-pointer     peer-checked:text-gray-100 peer-checked:bg-[#ec6b25] hover:bg-gray-100 ">
                                                Medical
                                            </label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="engineering" value="" className="hidden peer" required="" />
                                            <label htmlFor="engineering" className="flex items-center w-full py-1 px-3 text-gray-800  rounded-md cursor-pointer     peer-checked:text-gray-100 peer-checked:bg-[#ec6b25] hover:bg-gray-100 ">
                                                Engineering
                                            </label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="law" value="" className="hidden peer" required="" />
                                            <label htmlFor="law" className="flex items-center w-full py-1 px-3 text-gray-800  rounded-md cursor-pointer    peer-checked:text-gray-100 peer-checked:bg-[#ec6b25] hover:bg-gray-100 ">
                                                Law
                                            </label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="business" value="" className="hidden peer" required="" />
                                            <label htmlFor="business" className="flex items-center w-full py-1 px-3 text-gray-800  rounded-md cursor-pointer    peer-checked:text-gray-100 peer-checked:bg-[#ec6b25] hover:bg-gray-100 ">
                                                Business
                                            </label>
                                        </li>


                                    </ul>
                                }
                            />
                        </li>

                    </ul>
                    <div className="absolute bottom-0 left-0 w-full bg-white border-t grid grid-cols-2 py-3 px-3 gap-2 lg:hidden">
                        <button className="block text-gray-500 border border-gray-200   rounded-lg text-sm px-4 py-1.5 text-center w-full  items-center md:py-2.5" type="button">Clear</button>
                        <button className="block text-white border-2 border-[#ec6b25] bg-[#ec6b25] rounded-lg text-sm px-4 py-1.5 text-center w-full  items-center md:py-2.5" type="button">Apply</button>

                    </div>
                </div>
            </aside>

        </div>
    )
}

export default Questions