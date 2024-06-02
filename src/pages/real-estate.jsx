import { Button } from "@mui/material";
import Copyright from "../components/copyright";
import FrameComponent3 from "../components/frame-component3";
import Services from "../components/services";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import Expertise from "../components/expertise";
import TestimonialStudies from "../components/testimonial-studies";
import Frame from "../components/frame";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";

const RealEstate = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[2.375rem] box-border gap-[4.25rem] leading-[normal] tracking-[normal] mq750:gap-[2.125rem] mq450:gap-[1.063rem]">
      <div className="w-[32.313rem] h-[31.375rem] relative rounded-2xl bg-whitesmoke-100 box-border overflow-hidden shrink-0 hidden max-w-full border-[1px] border-solid border-ut-80 md:scale-[100%] scale-[50%] ">
        <img
          className="absolute top-[-0.75rem] left-[-0.312rem] w-full h-full object-cover hidden"
          src="/whatsapp-image-20230608-at-952-2@2x.png"
        />
        <img
          className="absolute top-[calc(50%_-_250px)] left-[calc(50%_-_265.5px)] w-full h-full object-cover hidden"
          src="/rathi-1@2x.png"
        />
        <img
          className="absolute top-[calc(50%_-_250px)] left-[calc(50%_-_258.5px)] w-[32.25rem] h-[32.25rem] object-cover hidden"
          src="/savex-1@2x.png"
        />
        <img
          className="absolute top-[calc(50%_-_261px)] left-[calc(50%_-_262.5px)] w-[32.813rem] h-[32.813rem] object-cover hidden"
          src="/gq-1-1@2x.png"
        />
        <img
          className="absolute top-[0rem] left-[0rem] w-full h-full object-cover hidden"
          src="/rathi-1-1@2x.png"
        />
        <img
          className="absolute top-[0rem] left-[0rem] w-full h-full object-cover hidden"
          src="/rathi-2@2x.png"
        />
        <img
          className="absolute top-[0rem] left-[0rem] w-full h-full object-cover hidden"
          src="/wegile-1@2x.png"
        />
        <img
          className="absolute top-[0rem] left-[0rem] w-full h-full object-cover"
          src="/leeway@2x.png"
        />
        <img
          className="absolute top-[0rem] left-[0rem] w-full h-full object-cover"
          src="/tabish-11-2-1@2x.png"
        />
        <img
          className="absolute top-[calc(50%_-_250px)] left-[calc(50%_-_257.5px)] w-full h-full object-cover hidden"
          src="/leeway-02@2x.png"
        />
        <img
          className="absolute top-[0rem] left-[0rem] w-full h-full object-cover hidden"
          src="/savex-1-1@2x.png"
        />
        <img
          className="absolute top-[0rem] left-[0rem] w-full h-full object-cover hidden"
          src="/neemans-2-1@2x.png"
        />
        <img
          className="absolute top-[0rem] left-[0rem] w-full h-full object-cover hidden"
          src="/neemans-1@2x.png"
        />
        <img
          className="absolute top-[0rem] left-[0rem] w-[32.813rem] h-[32.813rem] object-cover hidden"
          src="/whatsapp-image-20230608-at-955-2@2x.png"
        />
        <div className="absolute top-[0rem] left-[0rem] w-[32.813rem] h-[32.813rem] hidden" />
        <div className="absolute top-[24.5rem] left-[1.438rem] w-[21.125rem] h-[4.625rem] hidden" />
        <img
          className="absolute top-[calc(50%_-_250px)] left-[calc(50%_-_268.5px)] w-[33.5rem] h-[31.563rem] object-cover"
          src="/whatsapp-image-20230608-at-955-1@2x.png"
        />
        <img
          className="absolute top-[0rem] left-[calc(50%_-_257.5px)] w-full h-full object-cover hidden"
          src="/bc9692154166107-1@2x.png"
        />
      </div>
      <section className="self-stretch w-full flex flex-row items-start justify-start pt-[0rem] pb-[8.343rem] box-border max-w-full">
        <header className="flex-1 w-full [backdrop-filter:blur(22px)] bg-gray-600 flex flex-row items-center justify-between py-[0.5rem] px-[5rem] pb-[0rem] box-border top-[0] z-[99] fixed max-w-full gap-[1.25rem] mq750:pl-[2.5rem] mq750:pr-[2.5rem] mq750:box-border">
          <img
            className=" mq450:h-[4.0rem] mq1050:h-[4.5rem] h-[4.5rem] my-1 relative object-contain"
            loading="lazy"
            src="/osumare-logo01-2-4@2x.png"
          />
          <div className="md:w-[13.5rem] h-full w-fit flex flex-col items-center justify-end md:pt-[1.75rem] px-[0rem] pb-[0rem] box-border">
            <Button
              className="self-stretch w-fit text-nowrap my-auto ml-auto h-[2.75rem] px-[2rem] mq1050:scale-[100%] mq450:scale-[60%]"
              disableElevation={true}
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#000c1a", 
                fontSize: "16",
                borderColor: "#000c1a",
                borderRadius: "32px",
                "&:hover": { borderColor: "#000c1a" },
                height: 44,
              }}
            >
              <div className="md:scale-[100%] scale-[140%]">Contact Us</div>
            </Button>
          </div>
        </header>
      </section>
      <Copyright />
      <FrameComponent3 />
      <Services />
      <FrameComponent2 />
      <FrameComponent1 />
      <Expertise />
      <TestimonialStudies />
      <Frame />
      <FrameComponent />
      <Footer />
    </div>
  );
};

export default RealEstate;
