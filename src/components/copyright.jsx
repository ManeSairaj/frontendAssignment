import { Button } from "@mui/material";
import PropTypes from "prop-types";

const Copyright = ({ className = "" }) => {
  return (
    <section
      className={`mx-auto self-stretch flex flex-row items-start justify-start pt-[0rem] px-[1.875rem] pb-[10.875rem] box-border max-w-full text-center text-[3rem] text-gray-400 font-h300-bold mq750:pb-[4.563rem] mq750:box-border mq1050:pb-[7.063rem] mq1050:box-border ${className}`}
    >
      <div className="w-[59.5rem] z-20 flex flex-col items-end justify-start gap-[3.593rem] max-w-full mq750:gap-[1.813rem]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] max-w-full mq750:gap-[1rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[4.5rem] z-[2] font-inherit mq450:text-[1.813rem] mq450:leading-[2.688rem] mq1050:text-[2.375rem] mq1050:leading-[3.625rem]">
              <span className="font-medium">{`Elevate `}</span>
              <b className="text-royalblue">Real Estate Success</b>
              <span className="font-medium">
                {" "}
                with Osumare's Digital Expertise
              </span>
            </h1>
            <div className="self-stretch relative text-[1.5rem] leading-[2.25rem] font-body300-rg text-darkslategray-100 z-[2] mq450:text-[1.188rem] mq450:leading-[1.813rem]">
              Tailored Solutions for Thriving in the Digital Real Estate
              Landscape
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
            <Button
              className="h-[3.5rem] w-[25.5rem] max-w-full z-[2] mq450:pl-[0.5rem] mq450:pr-[0.5rem] mq450:box-border lg:scale-[100%] scale-[50%] "
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "24",
                background: "#0078ff",
                borderRadius: "32px",
                "&:hover": { background: "#0078ff" },
                width: 408,
                height: 56,
              }}
            >
              <div className="lg:scale-[100%] scale-[140%] ">Get started</div>
            </Button>
          </div>
        </div>
        <div className="w-[57.375rem] h-fit lg:relative absolute top-9 -z-20 lg:opacity-100 opacity-45 mq450: flex flex-row items-start justify-end py-[0rem] px-[2.312rem] box-border max-w-full text-[2rem] text-white font-lato">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start py-[11rem] px-[12.187rem] box-border relative gap-[0.5rem] mix-blend-normal max-w-full z-[2] mq750:pl-[6.063rem] mq750:pr-[6.063rem] mq750:box-border mq450:py-[7.125rem] mq450:px-[1.25rem] mq450:box-border">
            <img
              className="w-full h-fit absolute !m-[0] top-[2.3rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full mix-blend-luminosity"
              loading="lazy"
              alt=""
              src="/forsalebro.svg"
            />
            <div className="xl:w-[9.313rem] w-[14.313rem] mq450:hidden relative font-black inline-block [text-shadow:0px_4px_13px_#9bc9fc] z-[1] mq450:text-[1.188rem] mq1050:text-[1.625rem]">We Need </div>
            <div className="xl:w-[9.563rem] w-[14.313rem] mq450:hidden relative font-black lg:text-left inline-block [text-shadow:0px_4px_13px_#9bc9fc] z-[1] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
              Marketing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Copyright;
