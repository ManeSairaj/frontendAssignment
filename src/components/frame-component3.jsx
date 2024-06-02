import { Button } from "@mui/material";
import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-[0rem] px-[5rem] lg:pb-[10.281rem] box-border max-w-full text-center text-[2rem] text-gray-400 font-h300-bold mq750:pl-[2.5rem] mq750:pr-[2.5rem] lg:pb-[6.688rem] mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-end justify-start gap-[4rem] max-w-full mq750:gap-[2rem] mq450:gap-[1rem]">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.312rem] box-border max-w-full">
          <b className="w-[52.438rem] relative leading-[3rem] inline-block shrink-0 max-w-full mq450:text-[1.188rem] mq450:leading-[1.813rem] mq1050:text-[1.625rem] mq1050:leading-[2.375rem]">
            Real Estate-Focused Digital Mastery
          </b>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center gap-[2.493rem] max-w-full text-left lg:flex-wrap mq750:gap-[1.25rem]">
          <div className="h-[22.563rem] w-[31.694rem] flex flex-col items-start justify-start pt-[1.187rem] px-[0rem] pb-[0rem] box-border min-w-[31.694rem] max-w-full lg:flex-1 mq750:min-w-full">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full lg:self-stretch lg:w-auto"
              loading="lazy"
              alt=""
              src="/directingthearrowupcuate.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[2rem] min-w-[29.75rem] max-w-full mq750:gap-[1rem] mq750:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] max-w-full">
              <b className="w-[40.375rem] relative leading-[3rem] inline-block max-w-full mq450:text-[1.188rem] mq450:leading-[1.813rem] mq1050:text-[1.625rem] mq1050:leading-[2.375rem]">
                Unlock the Potential of Digital Real Estate Excellence
              </b>
              <p className="m-0 self-stretch relative text-[1.5rem] leading-[2.25rem] font-body300-rg text-darkslategray-100 mq450:text-[1.188rem] mq450:leading-[1.813rem]">
                At Osumare, we understand that the real estate landscape demands
                a digital presence that aligns with the intricacies of property
                marketing. Our range of specialized services is meticulously
                designed to catapult your brand's success in the ever-evolving
                digital property market.
              </p>
            </div>
            <div className="flex w-full items-center justify-center">
              <Button
                className="w-[14.563rem] h-[3.813rem] mq1050:scale-[100%] mq450:scale-[60%]"
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
                <div className="lg:scale-[100%] scale-[140%]">Get started</div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
