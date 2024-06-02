import { Button } from "@mui/material";
import ServiceCard from "./service-card";
import PropTypes from "prop-types";

const Services = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[5.593rem] box-border max-w-full text-center text-[2rem] text-gray-400 font-h300-bold lg:pb-[3.625rem] lg:box-border mq750:pb-[2.375rem] mq750:box-border ${className}`}
    >
      <div className="flex-1 bg-whitesmoke-100 overflow-hidden flex flex-col items-start justify-start py-[5.687rem] px-[5.062rem] box-border max-w-full mq750:py-[2.375rem] mq750:px-[2.5rem] mq750:box-border mq1050:pt-[3.688rem] mq1050:pb-[3.688rem] mq1050:box-border">
        <div className="self-stretch flex flex-col items-center justify-center gap-[4.25rem] mq750:gap-[2.125rem] mq450:gap-[1.063rem]">
          <div className="self-stretch flex flex-col items-center justify-center gap-[1rem]">
            <b className="self-stretch relative leading-[3rem] mq450:text-[1.188rem] mq450:leading-[1.813rem] mq1050:text-[1.625rem] mq1050:leading-[2.375rem]">
              Our Service Offerings
            </b>
            <div className="self-stretch h-[2.75rem] relative text-[1.5rem] leading-[2.25rem] font-body300-rg text-darkslategray-100 inline-block shrink-0 mq450:text-[1.188rem] mq450:leading-[1.813rem]">
              {" "}
              Strategies that Drive Property Market Excellence
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[2rem_1.793rem] mq1050:mt-[2rem] min-h-[31.875rem] text-[1.125rem]">
            <ServiceCard
              group117="/group-117@2x.png"
              automotiveSEO="Automotive SEO"
              driveYourSuccessWithAutom="Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today"
            />
            <ServiceCard
              group117="/group-117-1@2x.png"
              automotiveSEO="PPC Precision"
              driveYourSuccessWithAutom="Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns."
              propPadding="2rem 1rem 3.187rem"
            />
            <ServiceCard
              group117="/group-117-2@2x.png"
              automotiveSEO="Social Acceleration"
              driveYourSuccessWithAutom=" Engage and influence your audience across social media platforms, amplifying your brand's presence and connection."
              propPadding="2rem 1rem"
            />
            <ServiceCard
              group117="/group-117-3@2x.png"
              automotiveSEO="Content Excellence"
              driveYourSuccessWithAutom="Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement."
              propPadding="2rem 1rem 3.187rem"
            />
            <div className="w-[18.563rem] shadow-[-3px_4px_16px_rgba(0,_0,_0,_0.04)] rounded-lg bg-white flex flex-col items-center justify-start py-[2rem] px-[1rem] box-border gap-[1rem]">
              <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
                <img
                  className="w-[3.25rem] h-[3.25rem] relative object-contain"
                  alt=""
                  src="/group-117-4@2x.png"
                />
                <b className="self-stretch relative leading-[1.438rem]">
                  Web Design
                </b>
              </div>
              <p className="m-0 self-stretch relative text-[0.875rem] font-body300-rg text-darkslategray-100">
                Transform visitors into customers with high-performance websites
                designed for seamless user experiences and increased
                conversions.
              </p>
            </div>
            <ServiceCard
              group117="/group-117-5.svg"
              automotiveSEO="Data-Driven Insights"
              driveYourSuccessWithAutom="Leverage data to refine your strategies, making informed decisions that drive revenue growth."
              propPadding="2rem 1rem 3.187rem"
            />
            <ServiceCard
              group117="/group-117-6.svg"
              automotiveSEO="End-to-End Solutions"
              driveYourSuccessWithAutom="From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey."
              propPadding="2rem 1rem"
            />
            <ServiceCard
              group117="/group-117-7.svg"
              automotiveSEO="Video marketing"
              driveYourSuccessWithAutom="Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories."
              propPadding="2rem 1rem 3.187rem"
            />
          </div>
          <Button
            className="w-[14.563rem] h-[3.813rem] lg:scale-[100%] mq1050:scale-[100%] mq450:scale-[60%]"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18",
              background: "#0078ff",
              borderRadius: "32px",
              "&:hover": { background: "#0078ff" },
              width: 233,
              height: 61,
            }}
          >
            <div className="lg:scale-[100%] scale-[140%] tracking-wider">Get started</div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
