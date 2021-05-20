
const Backend = () => (
    <section id="backend" className="box-border relative w-full leading-6 text-gray-700 bg-white border-0 border-gray-200 border-solid">
        <div className="box-border flex flex-col items-center px-8 mx-auto leading-6 border-solid max-w-7xl xl:px-16 md:items-stretch md:justify-center">
            <div className="relative pb-10">
                <p className="w-full max-w-xl mx-0 mx-auto mt-4 mb-0 font-sans text-sm font-medium leading-relaxed text-center text-gray-400 border-0 border-gray-200 lg:text-lg md:text-base">
                    Which properties a good backend should have ? Many factors come to mind when we consider how a good backend should be. Here is a list of some points that should not be neglicted.
                </p>
            </div>

            <div className="z-10 grid gap-5 md:grid-cols-6 lg:grid-cols-9">

                <div className="col-span-3 font-sans text-gray-700 bg-gray-50 rounded-3xl">
                    <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                        <div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-arrows-vertical" width="32" height="32" viewBox="0 0 24 24" stroke-width="1" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M18 21v-14" />
                            <path d="M9 15l3 -3l3 3" />
                            <path d="M15 10l3 -3l3 3" />
                            <line x1="3" y1="21" x2="21" y2="21" />
                            <line x1="12" y1="21" x2="12" y2="12" />
                            <path d="M3 6l3 -3l3 3" />
                            <path d="M6 21v-18" />
                            </svg>
                        </div>
                        <div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                            <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">Scalable</h6>
                            <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4">
                                Your database should be able to support even the most important traffic.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-3 font-sans text-gray-700 bg-gray-50 rounded-3xl">
                    <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                        <div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lock" width="32" height="32" viewBox="0 0 24 24" stroke-width="1" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <rect x="5" y="11" width="14" height="10" rx="2" />
                            <circle cx="12" cy="16" r="1" />
                            <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                            </svg>

                        </div>
                        <div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                            <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">Secured</h6>
                            <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4">
                                Your database should be secured
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-3 font-sans text-gray-700 bg-gray-50 rounded-3xl">
                    <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                        <div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-database-import" width="32" height="32" viewBox="0 0 24 24" stroke-width="1" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <ellipse cx="12" cy="6" rx="8" ry="3" />
                            <path d="M4 6v8m5.009 .783c.924 .14 1.933 .217 2.991 .217c4.418 0 8 -1.343 8 -3v-6" />
                            <path d="M11.252 20.987c.246 .009 .496 .013 .748 .013c4.418 0 8 -1.343 8 -3v-6m-18 7h7m-3 -3l3 3l-3 3" />
                            </svg>
                        </div>
                        <div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                            <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">Backed</h6>
                            <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4">
                                Your database should have a back replacement
                            </p>
                        </div>
                    </div>
                </div>


                <div className="col-span-3 font-sans text-gray-700 border-0 bg-gray-50 rounded-3xl">
                    <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                        <div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="leading-6 text-center text-gray-700 align-middle stroke-current w-7 h-7" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M0 0h24v24H0z" stroke="none"></path>
                                <rect x="3" y="4" width="18" height="8" rx="3"></rect>
                                <rect x="3" y="12" width="18" height="8" rx="3"></rect>
                                <path d="M7 8v.01M7 16v.01"></path></svg>

                        </div>
                        <div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                            <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">Reliable</h6>
                            <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4">
                                Metrics should show that your database responds accordingly to your needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

    )

export default Backend
