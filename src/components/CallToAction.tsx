
const CallToAction = () => (
<section className="py-20 bg-white">
    <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl xl:text-6xl">
            Convinced ?
        </h2>
        <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            We review the main points that make good software and what should be considered when thinking about development. Send me an email and let's pursue the discussion.
        </p>
        <div className="flex justify-center mt-8 space-x-3">
            <a href="mailto:frederic.ln.lang@gmail.com?subject = Enter your subject here&body = Your Message" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow hover:bg-indigo-700">Get in Touch</a>
{/*             <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200">Learn more</a> */}
        </div>
    </div>
</section>
)

export default CallToAction
