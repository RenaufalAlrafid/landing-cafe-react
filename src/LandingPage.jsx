import SectionOne from "./component/SectionOne";
import Navbar from "./component/Navbar";
import SectionTwo from "./component/SectionTwo";
import SectionThree from "./component/SectionThree";
import SectionMenu from "./component/SectionMenu";
import SectionComment from "./component/SectionComment";
import SectionForm from "./component/SectionForm";
import Footer from "./component/Footer";

export default function LandingPage() {
  return (
    <main className="w-full">
        <Navbar></Navbar>
        <div className=" bg-primary-base pt-20 min-h-screen">
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
            <SectionThree></SectionThree>
        </div>
        <SectionMenu></SectionMenu>
        <div className="bg-primary-base pt-20 ">
          <SectionComment></SectionComment>
          <SectionForm></SectionForm>
        </div>
        <Footer></Footer>
        
    </main>
  )
}
