import Card from '../components/realisations/Card'


const Realisations = () => (
    <div className="m-6">
    <button className="rounded-md border border-gray-500 text-2xl text-white bg-green-700 px-4 ml-6 mb-3"><a href="/">←</a></button>
    <h1 className="text-2xl md:text-4xl font-semibold ml-6">Realisations</h1>
    <div className="px-8 sm:px-16 md:px-0 lg:px-16 py-8 flex flex-col md:flex-row mx-auto justify-center">
        <Card img="jacar.png" link="https://jacar-frontend.vercel.app/">
            <h1 className="text-2xl font-bold"> Jacar</h1>
            <p>Jacar is a social media platform narrowing tourism. Is allows you to share photos of your trips, and get inspiration from others.</p>
        </Card>

        <Card img="limousin.png" link="https://visites-en-limousin.pages.dev/tourisme">
            <h1 className="text-2xl font-bold">Visites en Limousin</h1>
            <p>Visites-en-Limousin is inspiration site about visiting the region around Limoges, France.</p>
        </Card>
    </div>
    <h1 className="text-2xl md:text-4xl font-semibold ml-6">Open Source Projects</h1>
    <div className="px-8 sm:px-16 md:px-0 lg:px-16 py-8 flex flex-col md:flex-row justify-center">
        <Card img="nextjs-sql-app.png" link="https://nextjs-sql-app.vercel.app/">
            <h1 className="text-2xl font-bold"> Nextjs SQL App</h1>
            <p>A basic App with message posting, and profile viewing. The Data is stored in a SQL database.</p>
        </Card>

        <Card img="nextjs-basicauth.png" link="https://next-basicauth-starter.vercel.app/">
            <h1 className="text-2xl font-bold">Nextjs Basic-Auth Starter</h1>
            <p>A template to enable authentification in your App. Example pages with non-accessible and accessible content.</p>
        </Card>
    </div>
    </div>
)

export default Realisations;

