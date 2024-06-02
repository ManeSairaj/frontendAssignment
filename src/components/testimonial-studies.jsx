import PropTypes from "prop-types";

const TestimonialStudies = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end py-[0rem] px-[5rem] box-border max-w-full text-center text-[1.5rem] text-gray-400 font-h300-bold mq750:pl-[2.5rem] mq750:pr-[2.5rem] mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[1.812rem] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <div className="w-[58.063vw] flex flex-row items-start justify-between  gap-[1.25rem] max-w-full mq750:flex-wrap">
            <div className="w-[11.875rem] flex flex-row items-start justify-start">
              <div className="h-[11.875rem] flex-1 relative">
                <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-whitesmoke-200 w-full h-full" />
                <img
                  className="absolute top-[1.938rem] left-[1.906rem] w-[8rem] h-[8rem] object-contain z-[1]"
                  loading="lazy"
                  alt=""
                  src="/3dmodel-9040866-3@2x.png"
                />
              </div>
            </div>
            <div className="w-[11.875rem] flex flex-row items-start justify-start">
              <div className="h-[11.875rem] flex-1 relative">
                <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-whitesmoke-200 w-full h-full" />
                <img
                  className="absolute top-[1.938rem] left-[1.969rem] w-[8rem] h-[8rem] object-contain z-[1]"
                  alt=""
                  src="/medal_1_img@2x.png"
                />
                <img
                  className="absolute top-[1.938rem] left-[1.969rem] w-[8rem] h-[8rem] object-contain z-[2]"
                  loading="lazy"
                  alt=""
                  src="/medal-2439078-1-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[2.375rem] max-w-full mq750:gap-[1.188rem]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] min-w-[25.25rem] max-w-full mq750:min-w-full">
            <b className="self-stretch relative leading-[3rem] mq450:text-[1.188rem] mq450:leading-[2.375rem]">
              Trust Building with Social Proof
            </b>
            <p className="m-0 self-stretch relative leading-[2.25rem] font-body300-rg text-darkslategray-100 mq450:text-[1.188rem] mq450:leading-[1.813rem]">
              Discover how leveraging client testimonials boosted buyer
              confidence, leading to higher conversion rates for a property
              development project
            </p>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] min-w-[25.25rem] max-w-full mq750:min-w-full">
            <b className="self-stretch relative leading-[3rem] mq450:text-[1.188rem] mq450:leading-[2.375rem]">
              Mobile-First Success:
            </b>
            <p className="m-0 self-stretch relative leading-[2.25rem] font-body300-rg text-darkslategray-100 mq450:text-[1.188rem] mq450:leading-[1.813rem]">
              {" "}
              Learn how our mobile-responsive design approach resulted in a 25%
              increase in inquiries from mobile users for a real estate agency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default TestimonialStudies;
