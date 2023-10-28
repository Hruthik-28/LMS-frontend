import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs'
import { Link } from "react-router-dom"

function Footer() {
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    return (
        <>
            <footer className="relative left-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20">
                <section className='text-lg'>
                    Copyright {year} | All rights reserverd
                </section>
                <section className="flex justify-center items-center gap-5 text-2xl text-white">
                    <Link className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                        <BsFacebook />
                    </Link>
                    <Link className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                        <BsInstagram />
                    </Link>
                    <Link className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                        <BsLinkedin />
                    </Link>
                    <Link className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                        <BsTwitter />
                    </Link>
                </section>
            </footer>
            
        </>
    )
}

export default Footer
