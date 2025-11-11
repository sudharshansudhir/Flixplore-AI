import React from 'react'
// #c10404ff  #222222ff   #f83838ff
const Pricing = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="w-72 bg-[#c10404ff] hover:scale-104 hover:border-2 text-center text-black border  p-6 pb-16 rounded-lg">
                <p className="font-semibold">Basic</p>
                <h1 className="text-3xl font-semibold">₹199<span className="text-black text-sm font-normal">/month</span></h1>
                <ul className="list-none text-black text-sm mt-6 space-y-1">
                    <li className="flex items-center gap-2">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="#000000"/>
                        </svg>
                        <p>720p</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="#000000"/>
                        </svg>
                        <p>HD</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="#000000"/>
                        </svg>
                        <p>Good Sound Quality</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="#000000"/>
                        </svg>
                        <p>TV,computer,mobile,tablet</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="#000000"/>
                        </svg>
                        <p>Download Devices-1</p>
                    </li>
                </ul>
                <button type="button" className="bg-black text-sm w-full py-2 rounded text-[#c10404ff] font-medium mt-7 hover:bg-[#222222ff] transition-all">
                    Subscribe ₹199
                </button>
            </div>
        
            <div className="w-72 bg-black relative text-center text-white border hover:scale-104 hover:border-2 border-[#f83838ff] p-6 pb-14 rounded-lg">
                {/* <p className="absolute px-3 text-sm -top-3.5 left-3.5 py-1 bg-[#c10404ff8789FB] rounded-full">Most Popular</p> */}
                <p className="font-semibold pt-2">Standard</p>
                <h1 className="text-3xl font-semibold">₹499<span className="text-sm font-normal">/month</span></h1>
                <ul className="list-none text-white text-sm mt-6 space-y-1">
                    <li className="flex items-center gap-2">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="currentColor"/>
                        </svg>
                        <p>1080p</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="currentColor"/>
                        </svg>
                        <p>Full HD</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="currentColor"/>
                        </svg>
                        <p>Great Sound Quality</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="currentColor"/>
                        </svg>
                        <p>TV,computer,mobile,tablet</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="currentColor"/>
                        </svg>
                        <p>Download Devices-2</p>
                    </li>
                    
                </ul>
                <button type="button" className="bg-[#c10404ff] text-sm w-full py-2 rounded text-black font-medium mt-7 hover:bg-[#f83838ff] transition-all">
                    Subscribe ₹499
                </button>
            </div>
        
            <div className="w-72 bg-[#c10404ff] hover:scale-104 hover:border-2 text-center text-black border border-black p-6 pb-16 rounded-lg">
                <p className="font-semibold">Premium</p>
                <h1 className="text-3xl font-semibold">₹649<span className="text-black text-sm font-normal">/month</span></h1>
                <ul className="list-none text-black text-sm mt-6 space-y-1">
                    <li className="flex items-center gap-2">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="#000000"/>
                        </svg>
                        <p>4K+HDR</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="#000000"/>
                        </svg>
                        <p>Ultra HD</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="#000000"/>
                        </svg>
                        <p>Best Sound Quality</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="#000000"/>
                        </svg>
                        <p>TV,computer,mobile,tablet</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill="#000000"/>
                        </svg>
                        <p>Download Devices-6</p>
                    </li>
                </ul>
                <button type="button" className="bg-black text-sm w-full py-2 rounded text-[#c10404ff] font-medium mt-7 hover:bg-[#222222ff] transition-all">
                    Subscribe ₹649
                </button>
            </div>
        </div>
  )
}

export default Pricing