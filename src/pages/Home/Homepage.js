import Hero from '../../components/Hero';
import WhoWeAre from '../../components/whoWeAre'
import Stats from '../../components/Stats';
import BlogCarousel from '../../components/BlogCarousel';
import EnquiryForm from '../../components/EnquiryForm';

function Home() {
    return (
        <div className="home"> 
            <Hero />
            <WhoWeAre />
            <Stats />
            <BlogCarousel />
            <EnquiryForm />
        </div>
    );
}

export default Home;