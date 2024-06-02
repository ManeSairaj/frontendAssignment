import {
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Icon,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

const Frame = ({ className = "" }) => {
  return (
    <section
      className={`w-full mb-[5.75rem] overflow-hidden flex flex-row items-start justify-start max-w-[137%] shrink-0 text-center text-[2rem] text-gray-400 font-h300-bold ${className}`}
    >
      <div className="flex-1 overflow-hidden flex flex-col items-center justify-start pt-[7.843rem] px-[4vw] pb-[0rem] box-border relative mq1050:gap-[9.843rem] gap-[2rem] max-w-full z-[12] md:gap-[4.938rem] md:pl-[2.688rem] md:pt-[3.313rem] md:pr-[2.688rem] md:box-border mq750:gap-[2.438rem] mq750:pl-[3.813rem] mq750:pt-[2.125rem] mq750:pr-[3.813rem] mq750:box-border mq450:gap-[1.25rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
        <div className="w-[48.688rem] relative flex flex-col items-start justify-start gap-[2rem] max-w-full mq450:gap-[1rem]">
          <div className="self-stretch relative flex flex-col items-start justify-start gap-[1rem]">
            <b className="self-stretch relative leading-[3rem] z-[13] mq450:text-[1.188rem] mq450:leading-[1.813rem] mq1050:text-[1.625rem] mq1050:leading-[2.375rem]">
              Your Peace of Mind
            </b>
            <p className="m-0 self-stretch relative h-fit text-[1.5rem] leading-[2.25rem] font-body300-rg text-darkslategray-100 inline-block shrink-0 z-[13] mq450:text-[1.188rem] mq450:leading-[1.813rem] ">
              <span className="block">
                Through our conversion-focused strategies, we ensure that
                property seekers are not just visitors, but engaged prospects
                ready to make their next move in the real estate market
              </span>
            </p>
            <div className="relative mt-[2rem] md:mt-0 self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] md:scale-[100%] scale-[50%] ">
              <Button
                className="h-[3.813rem] w-[14.563rem] z-[13]"
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
        <div className="[background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#f9f9f9)] overflow-hidden flex flex-col items-start justify-start pt-[5.187rem] pb-[4.512rem] pr-[3.562rem] pl-[6.437rem] box-border gap-[6rem] max-w-full z-[15] md:pt-[3.375rem] md:pb-[2.938rem] md:box-border mq750:gap-[2rem] mq750:pl-[3.188rem] mq750:pr-[1.75rem] mq750:box-border mq450:gap-[1rem] mq450:pl-[1.25rem] mq450:pt-[1.438rem] mq450:pb-[1.25rem] mq450:box-border mq1050:pt-[2.188rem] mq1050:pb-[1.938rem] mq1050:box-border">
          <div className="w-[77.125rem] flex flex-row items-start justify-center max-w-full">
            <div className="w-[65rem] flex flex-col items-start justify-start gap-[1rem] max-w-full z-20">
              <b className="self-stretch relative leading-[3rem] mq450:text-[1.188rem] mq450:leading-[1.813rem] mq1050:text-[1.625rem] mq1050:leading-[2.375rem]">
                What Our Pharma Partners Say
              </b>
              <div className="self-stretch relative text-[1.5rem] leading-[2.25rem] font-body300-rg text-darkslategray-100 mq450:text-[1.188rem] mq450:leading-[1.813rem]">
                Driving Transformations, One Brand at a Time
              </div>
            </div>
          </div>
          <div className="w-full md:scale-[100%] scale-[119%] flex flex-row items-start justify-start pt-[0rem] md:px-[3.687rem] pb-[6rem] box-border max-w-full text-left text-[1.125rem] text-gray-500  font-poppins md:pl-[1.813rem] md:pr-[1.813rem] md:box-border mq750:pb-[3.875rem] mq750:box-border">
            <div className="flex-1 flex flex-col items-start justify-start w-full ">
              <div className="self-stretch md:shadow-[0px_20px_40px_rgba(0,_0,_0,_0.08)] rounded-2xl md:bg-white flex flex-col items-center justify-center md:py-[3.125rem] md:px-[2.75rem] box-border w-full md:pl-[1.375rem] md:pr-[1.375rem] md:box-border mq750:pt-[2rem] mq750:pb-[2rem] mq750:box-border">
                <div className="self-stretch flex flex-row flex-wrap items-center justify-center  max-w-full">
                  <img
                    className="md:h-[29rem] h-[24rem]  flex-1 relative rounded-3xl w-full max-w-full overflow-hidden min-w-[20.938rem]"
                    loading="lazy"
                    alt=""
                    src="/video.svg"
                  />
                  <div className="flex flex-col mt-[4rem] items-start justify-start gap-[2.7rem] max-w-full w-[70vw]">
                    <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem] mq750:flex-wrap">
                      <div className="flex flex-row items-center justify-start gap-[1.25rem] mq450:flex-wrap">
                        <img
                          className="h-[5rem] mt-4 w-[5rem] relative object-cover"
                          loading="lazy"
                          alt=""
                          src="/avatar-of-team@2x.png"
                        />
                        <div className="flex flex-col items-start justify-start py-[1.25rem] px-[0rem]">
                          <b className="relative font-bold inline-block min-w-[7.125rem]">
                            Tabish khan
                          </b>
                        </div>
                      </div>
                      <h1 className="m-0 w-[3.875rem] relative text-[3.875rem] leading-[3.875rem] font-normal font-font-awesome-5-free text-royalblue flex items-center mq450:text-[2.313rem] mq450:leading-[2.313rem] mq1050:text-[3.125rem] mq1050:leading-[3.125rem]">
                        
                      </h1>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start text-[1.5rem] font-body300-rg">
                      <p className="m-0 self-stretch relative leading-[2.25rem] mq450:text-[1.188rem] mq450:leading-[1.813rem]">
                        Osumare's expertise in pharma marketing is unparalleled.
                        Their strategies helped us navigate complex regulations
                        while driving remarkable growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.312rem] pl-[1.25rem] mt-4">
                <div className="w-[9.5rem] flex flex-row items-start justify-between gap-[1.25rem] md:scale-[100%] scale-[50%]">
                  <img
                    className="h-[3.75rem] w-[3.75rem] relative min-h-[3.75rem]"
                    loading="lazy"
                    alt=""
                    src="/scroll-buttion.svg"
                  />
                  <img
                    className="h-[3.75rem] w-[3.75rem] relative object-contain min-h-[3.75rem]"
                    alt=""
                    src="/scroll-buttion-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[4rem] max-w-full mq750:gap-[2rem] mq450:gap-[1rem] md:mt-0 mt-[2.7rem]">
            <div className="w-[64.375rem] flex flex-col items-center justify-center gap-[1rem] max-w-full">
              <b className="self-stretch relative leading-[3rem] mq450:text-[1.188rem] mq450:leading-[1.813rem] mq1050:text-[1.625rem] mq1050:leading-[2.375rem]">
                Frequently Asked Questions
              </b>
              <p className="m-0 w-[61.5rem] relative text-[1.5rem] leading-[2.25rem] font-body300-rg text-darkslategray-100 inline-block max-w-full mq450:text-[1.188rem] mq450:leading-[1.813rem]">
                Pinpoint your audience with precision, ensuring your marketing
                efforts reach those most likely to engage with your brand.
              </p>
            </div>
            <div className="md:w-[80rem] w-full overflow-x-auto flex flex-col items-center justify-start py-[0rem] md:px-[1.25rem] box-border max-w-full text-left text-[1.125rem] text-gray-500">
              <Accordion
                className="w-fit rounded-sm md:scale-[100%] scale-[50%]"
                sx={{ width: 800 }}
              >
                <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
                  <Typography />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography />
                </AccordionDetails>
              </Accordion>
              <div className="relative md:w-[60%] w-full bg-white flex flex-col items-start justify-start  min-w-[100%] ">
                <div className="self-stretch w-full shadow-[0px_10px_15px_rgba(0,_120,_255,_0.35)] bg-white flex flex-col items-start justify-start py-[1.25rem] md:pr-[3.062rem] px-[9%] md:pl-[2.812rem] relative gap-[0.625rem]">
                  <div className="self-stretch flex flex-row items-center justify-between md:gap-[1.25rem]">
                    <div className="relative leading-[1.75rem] font-semibold md:text-md xl:text-2xl text-[0.71rem]">
                      3. How does Osumare measure campaign success?
                    </div>
                    <div className="flex flex-row items-center justify-end text-[1.25rem] font-font-awesome-5-free">
                      <div className="relative leading-[1.25rem] [transform:_rotate(180deg)] mq450:text-[1rem] mq450:leading-[1rem] md:scale-[100%] scale-[50%]">
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadow-[0px_10px_15px_rgba(0,_0,_0,_0.1)] rounded-t-none rounded-b-md bg-white flex flex-col items-start justify-start text-white">
                <div className="self-stretch shadow-[0px_10px_15px_rgba(0,_120,_255,_0.35)] bg-royalblue flex flex-col items-start justify-start py-[1.25rem] py-[1.25rem] md:pr-[3.062rem] px-[9%] md:pl-[2.812rem] relative gap-[0.625rem]">
                  <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem]">
                    <div className="relative leading-[1.75rem] font-semibold md:text-md xl:text-2xl text-[0.71rem]">
                      3. How does Osumare measure campaign success?
                    </div>
                    <div className="flex flex-row items-center justify-end text-[1.25rem] font-font-awesome-5-free">
                      <div className="relative leading-[1.25rem] inline-block min-w-[1rem] mq450:text-[1rem] mq450:leading-[1rem]">
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-[1.75rem] pb-[1.737rem] pr-[3.187rem] pl-[2.812rem] box-border max-h-[12.5rem] max-w-full text-[1rem] text-dimgray font-body300-rg">
                  <p className="m-0 h-[7.313rem] flex-1 relative leading-[1.5rem] inline-block max-w-full md:text-base xl:text-xl text-[0.71rem]">
                    We believe in measurable results. Our data-driven approach
                    means that every campaign's performance is tracked,
                    analyzed, and refined for optimal outcomes. We provide
                    regular reports that detail key metrics, giving you clear
                    insights into how our strategies are driving growth for your
                    brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Frame.propTypes = {
  className: PropTypes.string,
};

export default Frame;
