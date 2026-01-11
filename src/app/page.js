import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Header from './components/Header';
import Intro from './components/Intro';
import MyGallery from './components/MyGallery';
import OurGoals from './components/OurGoals';
import OurMessage from './components/OurMessage';
import OurServices from './components/OurServices';
import OurVideos from './components/OurVideos';
import OurVisions from './components/OurVisions';

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <AboutUs />
      <OurVisions />
      <OurMessage />
      <OurGoals />
      <OurServices />
      <MyGallery />
      <OurVideos />
      <ContactUs />
      <Footer />
    </>
  );
}
