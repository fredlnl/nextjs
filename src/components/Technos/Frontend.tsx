
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
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-check" width="32" height="32" viewBox="0 0 24 24" stroke-width="1" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="9" cy="7" r="4" />
                            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            <path d="M16 11l2 2l4 -4" />
                        </svg>
                                                </div>
                        <div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                            <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">User Friendly</h6>
                            <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4">
                                The Frontend should be the most accessible to the users
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-3 font-sans text-gray-700 bg-gray-50 rounded-3xl">
                    <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                        <div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-3d-cube-sphere" width="32" height="32" viewBox="0 0 24 24" stroke-width="1" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 17.6l-2 -1.1v-2.5" />
  <path d="M4 10v-2.5l2 -1.1" />
  <path d="M10 4.1l2 -1.1l2 1.1" />
  <path d="M18 6.4l2 1.1v2.5" />
  <path d="M20 14v2.5l-2 1.12" />
  <path d="M14 19.9l-2 1.1l-2 -1.1" />
  <line x1="12" y1="12" x2="14" y2="10.9" />
  <line x1="18" y1="8.6" x2="20" y2="7.5" />
  <line x1="12" y1="12" x2="12" y2="14.5" />
  <line x1="12" y1="18.5" x2="12" y2="21" />
  <path d="M12 12l-2 -1.12" />
  <line x1="6" y1="8.6" x2="4" y2="7.5" />
</svg>

                        </div>
                        <div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                            <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">Interactive</h6>
                            <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4">
                                Frontend should always have something to return
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-3 font-sans text-gray-700 bg-gray-50 rounded-3xl">
                    <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                        <div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-android" width="32" height="32" viewBox="0 0 24 24" stroke-width="1" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="10" x2="4" y2="16" />
  <line x1="20" y1="10" x2="20" y2="16" />
  <path d="M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0" />
  <line x1="8" y1="3" x2="9" y2="5" />
  <line x1="16" y1="3" x2="15" y2="5" />
  <line x1="9" y1="18" x2="9" y2="21" />
  <line x1="15" y1="18" x2="15" y2="21" />
</svg>
                        </div>
                        <div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                            <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">Mobile Ready</h6>
                            <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4">
                                It should be accessible even from tiny devices
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-3 font-sans text-gray-700 bg-gray-50 rounded-3xl">
                    <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                        <div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width="32" height="32" viewBox="0 0 24 24" stroke-width="1" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <line x1="15" y1="16" x2="19" y2="12" />
                            <line x1="15" y1="8" x2="19" y2="12" />
                            </svg>
                        </div>
                        <div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                            <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">Intuitive</h6>
                            <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4">
                                User should master easily your network
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-3 font-sans text-gray-700 bg-gray-50 rounded-3xl">
                    <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                        <div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-telegram" width="32" height="32" viewBox="0 0 24 24" stroke-width="1" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                            </svg>
                        </div>
                        <div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                            <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">Communicative</h6>
                            <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4">
                                Your user should have frequent updates about their experience on your site.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </section>

    )

export default Backend
