import React from 'react'

const Navbar = () => {
  return (
    
      <nav className="flex justify-between bg-violet-700 text-white ">
            <div className="logo">
                <span className='font-bold text-xl mx-8'>Note Your Task</span>
            </div>

            {/* <ul className='flex gap-8 mx-9'>
                <li className='cursor-pointer hover:font-bold transition-all'>home</li>
                <li className='cursor-pointer hover:font-bold transition-all'>your tast</li>
            </ul> */}
      </nav>
    
  )
}

export default Navbar
