import { Button } from "@mui/material";
import FeaturePair from "./feature-pair";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-[0rem] pb-[5.75rem] pr-[4.937rem] pl-[5rem] box-border max-w-full text-center text-[2rem] text-gray-400 font-h300-bold md:pb-[3.75rem] md:box-border mq750:pl-[2.5rem] mq750:pr-[2.438rem] mq750:box-border mq450:pb-[1.563rem] mq450:box-border mq1050:pb-[2.438rem] mq1050:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[4rem] max-w-full mq750:gap-[2rem] mq450:gap-[1rem]">
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.125rem] pl-[0.062rem] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] max-w-full">
            <b className="self-stretch relative leading-[3rem] mq450:text-[1.188rem] mq450:leading-[1.813rem] mq1050:text-[1.625rem] mq1050:leading-[2.375rem]">
              {" "}
              Driving Property Inquiries to Conversions
            </b>
            <div className="self-stretch h-[2.75rem] relative text-[1.5rem] leading-[2.25rem] font-body300-rg text-darkslategray-100 flex items-center justify-center shrink-0 mq450:text-[1.188rem] mq450:leading-[1.813rem]">
              Streamlined Strategies for Real Estate Success
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.062rem] box-border max-w-full text-left">
          <div className="flex-1 flex flex-row flex-wrap items-center justify-between py-[0rem] pr-[0.125rem] pl-[0rem] box-border max-w-full gap-[1.25rem]">
            <img
              className="w-[31.25rem] mx-auto flex relative max-h-full max-w-full"
              loading="lazy"
              alt=""
              src="/housesearchingbro.svg"
            />
            <div className="md:w-[42.625rem] w-full flex flex-col md:items-start items-center justify-start gap-[2rem] max-w-full mq750:gap-[1rem]">
              <div className="self-stretch flex flex-col items-center justify-center gap-[1rem]">
                <b className="self-stretch relative leading-[3rem] mq450:text-[1.188rem] mq450:leading-[1.813rem] mq1050:text-[1.625rem] mq1050:leading-[2.375rem]">
                  Optimized Path to Property Purchase
                </b>
                <p className="m-0 md:w-[42.625rem] relative text-[1.5rem] leading-[2.25rem] font-body300-rg text-darkslategray-100 inline-block max-h-[13.5rem] [word-break:break-word] mq450:text-[0.788rem] mq450:leading-[1.4rem]">
                  In the dynamic realm of real estate, the journey from a
                  property inquiry to a successful conversion demands a
                  well-crafted approach. At Osumare, we specialize in guiding
                  potential buyers through this journey seamlessly, maximizing
                  inquiries-turned-conversions with expert strategies.
                </p>
              </div>
              <Button
                className="w-[14.563rem] h-[3.813rem] md:scale-[100%] scale-[60%]"
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
                <div className="md:scale-[100%] scale-[140%]">Get started</div>
              </Button>
            </div>
          </div>
        </div>
        <b className="self-stretch relative leading-[3rem] mq450:text-[1.188rem] mq450:leading-[1.813rem] mq1050:text-[1.625rem] mq1050:leading-[2.375rem]">
          Driving Property Inquiries to Conversions
        </b>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-[0rem] pr-[0.125rem] pl-[0rem] box-border gap-[2.187rem_2.062rem] max-w-full text-[1.5rem] mq750:gap-[1rem]">
          <FeaturePair
            virtual105695042="/virtual-10569504-2@2x.png"
            callToActionOptimization="Call-to-Action Optimization"
            ourCarefullyCraftedCTAsGu="Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates."
          />
          <FeaturePair
            virtual105695042="/onlinestore-3929777-2@2x.png"
            callToActionOptimization="Landing Page Efficiency"
            ourCarefullyCraftedCTAsGu="Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission."
            propPadding="2.25rem 0rem"
            propLeft="1.938rem"
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-[0rem] pr-[0.125rem] pl-[0rem] box-border gap-[2.375rem_2.25rem] max-w-full mq750:gap-[1.125rem]">
          <FeaturePair
            virtual105695042="/3d-9345318-2@2x.png"
            callToActionOptimization="Social Proof Utilization"
            ourCarefullyCraftedCTAsGu="Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action"
            propPadding="2.25rem 0rem"
            propLeft="1.906rem"
          />
          <FeaturePair
            virtual105695042="/augmentedreality-7065057-2@2x.png"
            callToActionOptimization="Mobile-Friendly Experience"
            ourCarefullyCraftedCTAsGu="With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers."
            propPadding="unset"
            propLeft="1.969rem"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
