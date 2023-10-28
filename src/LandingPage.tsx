import SectionOne from "./component/SectionOne";
import Navbar from "./component/Navbar";
import SectionTwo from "./component/SectionTwo";
import SectionThree from "./component/SectionThree";

export default function LandingPage() {
  return (
    <main className="w-screen">
        <Navbar></Navbar>
        <div className=" bg-primary-base pt-20 min-h-screen">
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
            <SectionThree></SectionThree>
        </div>
    </main>
  )
}
