import { Navbar, Button } from "flowbite-react";

export default function Menu()
{
    return (
        <>
            {/* Menu START */}
            <Navbar
                fluid={true}
                rounded={true}
                className="px-2 sm:px-4 py-2.5 bg-gradient-to-b from-neutral-900 to-neutral-800 fixed w-full z-20 top-0 left-0 border-b border-neutral-200 border-neutral-600"
            >
                <Navbar.Brand href="#">
                <img src="/images/logo1.png" style={{ width: '3.5rem' }} className="mr-3" alt="AIGOS LOGO" />
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <a href="#section4">
                        <Button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg font-medium text-sm text-center mr-3 md:mr-0 bg-red-600 hover:bg-red-700 focus:ring-red-800">
                            JOIN PRESALE
                        </Button>
                    </a>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse className="flex flex-col p-4 mt-4 rounded-lg border border-gray-800 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 border-gray-700 bg-gradient-to-b from-neutral-900 to-neutral-800">
                    <Navbar.Link
                        href="#home"
                        className="uppercase block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:hover:text-white text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                    >
                        HOME
                    </Navbar.Link>
                    <Navbar.Link
                        className="uppercase block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:hover:text-white text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                        href="#section2">
                        STEP BY STEP GUIDE
                    </Navbar.Link>
                    <Navbar.Link
                        className="uppercase block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:hover:text-white text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                        href="#section3">
                        WHITEPAPER
                    </Navbar.Link>
                    <Navbar.Link
                        className="uppercase block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:hover:text-white text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                        href="#section4">
                        BUY AIGOS
                    </Navbar.Link>
                    <Navbar.Link
                        className="uppercase block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:hover:text-white text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                        href="#section5">
                        DOCUMENTATION
                    </Navbar.Link>
                    <Navbar.Link
                        className="uppercase block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:hover:text-white text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                        href="#section6">
                        SOCIAL MEDIA
                    </Navbar.Link>
                    <Navbar.Link
                        className="uppercase block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:hover:text-white text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                        href="#section7">
                        TOKENOMICS
                    </Navbar.Link>
                    <Navbar.Link
                        className="uppercase block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:hover:text-white text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                        href="#section8">
                        OUR TEAM
                    </Navbar.Link>
                    <Navbar.Link
                        className="uppercase block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:hover:text-white text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                        href="#section9">
                        ROADMAP
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
            {/* Menu END */}
        </>
    )
}

