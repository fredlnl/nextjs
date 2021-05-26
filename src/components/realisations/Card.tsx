type CardProps = {
    img : string
    children : any
    link: string
}

const Card = ({img, children, link} : CardProps) => (
    <div className="rounded-xl overflow-hidden border w-full md:w-4/12 bg-white m-3 shadow transform hover:scale-105 transition duration-500 ease-in-out">
        <div className="flex flex-col m-4 justify-between h-full pb-7">
            <div>
                <div className="flex items-center flex-none px-4 bg-green-600 rounded-b-none h-8 rounded-xl">
                    <div className="flex space-x-1.5">
                        <div className="w-3 h-3 border-2 border-red-500 rounded-full"></div>
                        <div className="w-3 h-3 border-2 border-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 border-2 border-green-400 rounded-full"></div>
                    </div>
                </div>
                <img src={img} className="border border-gray-300 mb-2" />
            </div>

            {children}

            <a href={link} target="_blank" className="ml-auto mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-external-link" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#a905b6" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
                    <line x1="10" y1="14" x2="20" y2="4" />
                    <polyline points="15 4 20 4 20 9" />
                </svg>
            </a>
        </div>
    </div>
);

export default Card;




