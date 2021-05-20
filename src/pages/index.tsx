import Technos from '../components/Technos/Technos';
import Content1 from '../components/content1';
import Hero1 from '../components/Hero1'
import Hero2 from '../components/Hero2'
import Technologies from '../components/technologies';
import CallToAction from '../components/CallToAction';

const Index = () => (
    <>
    <Hero1 />
    <Content1 />
    <div className="w-5/6 mx-auto my-16 border"/>
    <div id="technologies" >
    <Technologies />
    </div>
    <Hero2 />
    <Technos />
    <CallToAction />
  </>
);

export default Index;
