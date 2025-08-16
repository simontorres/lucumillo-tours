import React from 'react'
import { Sernatur } from './Sernatur'
import { OurPartnersAndFriends } from './OurPartnersAndFriends'

export const Footer = () => {
    return (
        <footer className="bg-[#f5f5f5] dark:bg-[#2e3736] dark:text-[#ededed] shadow-md">
            <div className="flex flex-col lg:flex-row gap-4 bg-[#f5f5f5] dark:bg-[#2e3736] dark:text-[#ededed]">
                <Sernatur />
                <OurPartnersAndFriends />
            </div>
            
            <div className='bg-[#FF4A1C] text-white p-4 m-0 text-center'>
                <p>&copy; {new Date().getFullYear()} Lucumillo Experience. All rights reserved.</p>
            </div>
            
        </footer>
    )
}
