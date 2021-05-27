const Technologies = () => (
<section className="flex items-center justify-center py-10 text-white bg-white sm:py-16 md:py-24 lg:py-32">
    <div className="relative max-w-3xl px-10 text-center text-white auto lg:px-0">
        <div className="flex flex-col w-full md:flex-row">

            <div className="flex justify-between">
                <h1 className="relative flex flex-col text-5xl font-extrabold text-left text-black mt-4 mx-auto md:hidden">
                    How to build great software ?
                </h1>
                <h1 className="relative flex-col text-5xl font-extrabold text-left text-black mt-4 md:mt-8 mx-auto hidden md:flex ">
                    How to build
                    <span className="text-blue-500">great</span>
                    <span>software ?</span>
                </h1>
            </div>
            <div className="relative top-0 right-0 h-64 mt-12 md:-mt-16 md:absolute md:h-96 mx-auto">
                <img src="https://cdn.devdojo.com/images/december2020/designs3d.png" className="object-cover mt-3 mr-5 h-80 lg:h-96" />
            </div>
        </div>

        <div className="my-16 border-b border-gray-300 lg:my-24"></div>

        <h2 className="text-left text-gray-500 xl:text-xl">
            The web is composed of informatics technologies that has been developed continously since the early ages of Internet. How do you consider take advantages of them and how can they fit into you organization&nbsp;?
        </h2>
    </div>
</section>

)

export default Technologies
