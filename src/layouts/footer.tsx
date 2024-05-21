import React from 'react'
import Image from 'next/image'

function Footer() {
    return (
        <footer className="text-white bg-black body-font">
            <div className="container mb-5 px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <br />
                <a className="flex title-font font-medium items-center md:justify-start justify-center">
                    <Image src="/assets/logo.png" alt="logo" width={50} height={50} />
                    <span className="ml-3 text-xl">EzTechEzLife</span>
                </a>
                <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 EzTechEzLife —
                    <a href="https://kyawkingston.com" className=" ml-1" rel="noopener noreferrer" target="_blank"> @kingston</a>
                </p>
                <br />
                <br />
            </div>
        </footer>
    )
}

export default Footer