


const Hero1 = () => (
<div className="py-16 bg-white md:py-24">
    <div className="flex flex-col max-w-6xl px-10 mx-auto lg:flex-row">

        <div className="flex flex-col items-start justify-center w-full pr-10 mb-12 lg:w-1/2 lg:mb-0 order-2 lg:order-first">
            <h1 className="relative z-20 text-5xl font-extrabold leading-none text-purple-500 xl:text-6xl sm:text-center lg:text-left">
                Frédéric Lang<br/>
                <span className="mt-1 text-gray-800 lg:mt-0">Fullstack Development</span>
            </h1>
            <p className="relative z-20 block mt-6 text-base text-gray-500 xl:text-xl sm:text-center lg:text-left">Are you ready to see the magical awesomeness of web development? Now, you can design smarter and build faster, leveraging last web technologies.</p>
            <div className="relative flex mt-4">
                <a href="mailto:frederic.ln.lang@gmail.com?subject = Enter your subject here&body = Your Message" className="flex items-center self-start justify-center px-5 py-2 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-purple-500 border border-transparent rounded-full shadow lg:py-4 hover:bg-purple-600 focus:outline-none focus:border-purple-600 focus:shadow-outline-purple md:text-lg xl:text-xl md:px-5 xl:px-10">Email</a>
                <a href="#technologies" className="relative flex items-center self-start justify-center py-2 pl-10 pr-5 mt-5 ml-5 text-base font-medium leading-tight text-gray-400 transition duration-150 ease-in-out bg-gray-100 border-transparent rounded-full shadow-sm lg:py-4 md:pl-16 md:pr-5 xl:pr-10 hover:text-purple-500 focus:outline-none md:text-lg xl:text-xl">
                    <svg className="absolute left-0 w-6 h-6 ml-3 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
                    <span className="text-purple-500">Get Started</span>
                </a>
            </div>
        </div>

        <div className="flex flex-col items-center justify-center w-1/2 order-1 mx-auto pb-8">
            <img src="https://cdn.devdojo.com/images/december2020/greenred-animals.png"/>
        </div>
    </div>
</div>
)

export default Hero1;
