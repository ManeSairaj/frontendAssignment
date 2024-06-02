import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.75rem] box-border max-w-full text-center text-[2rem] text-gray-400 font-h300-bold ${className}`}
    >
      <div className="flex-1 bg-gray-100 overflow-hidden flex flex-col items-center justify-start pt-[8.937rem] px-[1.25rem] pb-[8.343rem] box-border relative gap-[3.968rem] max-w-full mq750:gap-[1rem] mq450:pt-[3.75rem] mq450:pb-[3.563rem] mq450:box-border mq1050:gap-[2rem] mq1050:pt-[5.813rem] mq1050:pb-[5.438rem] mq1050:box-border">
        <div className="w-[36rem] h-[36rem] absolute !m-[0] bottom-[-12.041rem] left-[33.613rem] [filter:blur(327px)] rounded-[50%] bg-dodgerblue-100 [transform:_rotate(140.5deg)] [transform-origin:0_0]" />
        <div className="w-[23.869rem] h-[39.4rem] absolute !m-[0] top-[43.539rem] right-[-9.032rem] [filter:blur(327px)] rounded-[50%] bg-tomato [transform:_rotate(-126deg)] [transform-origin:0_0]" />
        <div className="w-[56.5rem] flex flex-row items-start justify-start py-[0.5rem] px-[4.75rem] box-border max-w-full mq1050:pl-[2.375rem] mq1050:pr-[2.375rem] mq1050:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] max-w-full">
            <div className="self-stretch relative leading-[3rem] font-extrabold z-[1] mq450:text-[1.188rem] mq450:leading-[1.813rem] mq1050:text-[1.625rem] mq1050:leading-[2.375rem]">
              Connect with Our Digital Marketing Experts
            </div>
            <div className="self-stretch relative text-[1.5rem] leading-[2.25rem] font-body300-rg text-darkslategray-100 z-[1] mq450:text-[1.188rem] mq450:leading-[1.813rem]">
              Reach Out for Tailored Strategies and Results-Driven Solutions.
              Let's Elevate Your Online Presence Together
            </div>
          </div>
        </div>
        <div className="lg:w-[56.5rem] w-screen shadow-[0px_10px_44px_rgba(0,_0,_0,_0.1)] lg:rounded-2xl bg-white flex flex-row flex-wrap items-center justify-center py-[2rem] px-[3.5rem] box-border max-w-full z-[1] mq450:gap-[1rem] mq450:pt-[1.313rem] mq450:pb-[1.313rem] mq450:box-border mq1050:pl-[1.75rem] mq1050:pr-[1.75rem] mq1050:box-border">
          <form className="m-0 flex-1 flex flex-col items-center justify-center gap-[2rem] max-w-full mq450:gap-[1rem]">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[2rem_1.875rem] max-w-full">
              <div className="flex-1 flex flex-col items-center justify-center gap-[1rem] min-w-[9.5rem] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
                  <b className="relative text-[1rem] leading-[1.5rem] font-semibold font-h200-blod text-gray-300 text-center inline-block min-w-[2.813rem]">
                    Name
                  </b>
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch h-[2.75rem] font-h200-blod text-[1rem] text-darkgray"
                    placeholder="Enter your name"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#c7c7c7" },
                      "& .MuiInputBase-root": {
                        height: "44px",
                        backgroundColor: "#fcfcfc",
                      },
                      "& .MuiInputBase-input": { color: "#a9b1bb" },
                    }}
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
                  <b className="relative text-[1rem] leading-[1.5rem] font-semibold font-h200-blod text-gray-300 text-center inline-block min-w-[3.125rem]">
                    Phone
                  </b>
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch h-[2.75rem] font-h200-blod text-[1rem] text-darkgray"
                    placeholder="Enter your Number"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#c7c7c7" },
                      "& .MuiInputBase-root": {
                        height: "44px",
                        backgroundColor: "#fcfcfc",
                      },
                      "& .MuiInputBase-input": { color: "#a9b1bb" },
                    }}
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
                  <b className="relative text-[1rem] leading-[1.5rem] font-semibold font-h200-blod text-gray-300 text-center inline-block min-w-[2.625rem]">
                    Email
                  </b>
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch h-[2.75rem] font-h200-blod text-[1rem] text-darkgray"
                    placeholder="Enter your Total No of Vehicles:"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#c7c7c7" },
                      "& .MuiInputBase-root": {
                        height: "44px",
                        backgroundColor: "#fcfcfc",
                      },
                      "& .MuiInputBase-input": { color: "#a9b1bb" },
                    }}
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center min-w-[9.5rem] max-w-full mq450:gap-[1rem]">
                <div className="self-stretch h-[15.5rem] rounded-lg flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border gap-[0.75rem] max-w-full">
                  <b className="relative text-[1rem] leading-[1.5rem] font-semibold font-h200-blod text-gray-300 text-center inline-block min-w-[4.438rem] shrink-0">
                    Message
                  </b>
                  <div className="self-stretch rounded bg-gray-200 box-border flex flex-row items-start justify-start pt-[0.375rem] pb-[1.062rem] pr-[1.062rem] pl-[0.687rem] max-w-full shrink-0 border-[1px] border-solid border-silver">
                    <p className="m-0 h-[13rem] flex-1 relative text-[1rem] leading-[1.75rem] font-h200-blod text-darkgray text-left inline-block max-w-full">
                      Enter your Message.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="w-[25.5rem] relative h-[3.5rem] max-w-full mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border lg:scale-[60%] lg:mt-0 mt-4 scale-[60%]"
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
              <div className="lg:scale-[140%] scale-[140%]">Get started</div>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
