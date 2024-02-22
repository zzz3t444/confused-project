import RightArrow from "./asset/rightArrow.svg";
import HeroAsset from "./asset/HeroAsset.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function Header() {
  return (
    <>
      <div className="root-hero-section flex justify-center items-center">
        <div className="left -mr-80 relative">
          {/* for circle components */}
          <div className=" -rotate-6 font-semibold ml-44 bg-[#666cda] rounded-full grid items-center text-center w-32 h-32 text-gray-200 circle-blue">Developer</div>
          {/* for circle components end */}
          <div className="name mt-32">
            <div className="for-tag-name">
              <h3 className="text-8xl text-gray-200 font-medium tracking-wider flex items-end">
                Afkar <br />
                Mitsal{" "}
                <span>
                  {" "}
                  <img src={RightArrow} width={150} alt="" />
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="center">
          <img src={HeroAsset} width={970} alt="" />
        </div>
        <div className="right -ml-40">
          <div className="desk">
            <p className="text-gray-500 text-[11px] tracking-widest">/ THIS IS ME</p>
            <h3 className="text-3xl font-medium mt-6 text-gray-200">
              Experience designer <br />
              and frontend developer <br />
              from Indonesia people.
            </h3>
            <p className="xl:w-80 text-[12px] text-gray-500 mt-6 leading-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui vel suscipit quas sint dolore veritatis nobis provident a, quos voluptates. </p>
          </div>
          <div className="circle-blue-right -ml-20 h-52 w-52 mt-10 bg-[#39afc9] rounded-full flex items-center font-medium">
            <h3 className="leading-5 text-gray-200 rotate-6 text-xl ml-10">
              Experience <br />
              <span className="ml-9">designer</span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
