import PropTypes from "prop-types";

const Expertise = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-[0rem] px-[5rem] pb-[4.25rem] box-border max-w-full text-center text-[2rem] text-gray-400 font-h300-bold mq750:pl-[2.5rem] mq750:pr-[2.5rem] mq750:pb-[2.75rem] mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[1.812rem] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.375rem] pl-[1.25rem] box-border max-w-full">
          <div className="w-[52.969rem] flex flex-col items-end justify-start gap-[6.25rem] max-w-full mq450:gap-[1.563rem] mq1050:gap-[3.125rem] lg:px-[6vw]">
            <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[4.312rem] pl-[4.437rem] box-border max-w-full mq1050:pl-[2.188rem] mq1050:pr-[2.125rem] mq1050:box-border">
              <div className="flex-1 relative leading-[3rem] font-extrabold inline-block max-w-full mq450:text-[1.188rem] mq450:leading-[1.813rem] mq1050:text-[1.625rem] mq1050:leading-[2.375rem]">
                Our Expertise in Action
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq750:flex-wrap mq750:justify-center">
              <div className="w-[11.875rem] flex flex-row items-start justify-start">
                <div className="h-[11.875rem] flex-1 relative">
                  <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-whitesmoke-200 w-full h-full" />
                  <img
                    className="absolute top-[1.938rem] left-[1.969rem] w-[8rem] h-[8rem] object-contain z-[1]"
                    loading="lazy"
                    alt=""
                    src="/weather-534564-2@2x.png"
                  />
                </div>
              </div>
              <div className="w-[11.875rem] flex flex-row items-start justify-start">
                <div className="h-[11.875rem] flex-1 relative">
                  <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-whitesmoke-200 w-full h-full" />
                  <img
                    className="absolute top-[1.938rem] left-[1.938rem] w-[8rem] h-[8rem] object-contain z-[1]"
                    loading="lazy"
                    alt=""
                    src="/mass-9984040-2@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[2.187rem] max-w-full text-[1.5rem] mq750:gap-[1.063rem]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] min-w-[25.375rem] max-w-full mq750:min-w-full">
            <b className="self-stretch relative leading-[3rem] mq450:text-[1.188rem] mq450:leading-[2.375rem]">
              Effective CTAs
            </b>
            <div className="self-stretch relative leading-[2.25rem] font-body300-rg text-darkslategray-100 mq450:text-[1.188rem] mq450:leading-[1.813rem]">
              {" "}
              See how our strategic CTAs drove a significant increase in
              property inquiries and accelerated sales for a real estate agency.
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] min-w-[25.375rem] max-w-full mq750:min-w-full">
            <b className="self-stretch relative leading-[3rem] mq450:text-[1.188rem] mq450:leading-[2.375rem]">
              Conversion-Optimized Landing Pages
            </b>
            <div className="self-stretch relative leading-[2.25rem] font-body300-rg text-darkslategray-100 mq450:text-[1.188rem] mq450:leading-[1.813rem]">
              Explore a case study where our landing page optimization increased
              property lead conversion rates by 30%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Expertise.propTypes = {
  className: PropTypes.string,
};

export default Expertise;
