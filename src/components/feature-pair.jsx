import { useMemo } from "react";
import PropTypes from "prop-types";

const FeaturePair = ({
  className = "",
  virtual105695042,
  callToActionOptimization,
  ourCarefullyCraftedCTAsGu,
  propPadding,
  propLeft,
}) => {
  const featurePairStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const virtual105695042IconStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start py-[2.25rem] px-[0rem] box-border gap-[1.812rem] min-w-[20.938rem] max-w-full text-center text-[1.5rem] text-gray-400 font-h300-bold mq450:pt-[1.438rem] mq450:pb-[1.438rem] mq450:box-border ${className}`}
      style={featurePairStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
        <div className="w-[11.875rem] flex flex-row items-start justify-start">
          <div className="h-[11.875rem] flex-1 relative">
            <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-whitesmoke-200 w-full h-full" />
            <img
              className="absolute top-[1.938rem] left-[1.969rem] w-[8rem] h-[8rem] object-contain z-[1]"
              loading="lazy"
              alt=""
              src={virtual105695042}
              style={virtual105695042IconStyle}
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
        <b className="self-stretch relative leading-[3rem] mq450:text-[1.188rem] mq450:leading-[2.375rem]">
          {callToActionOptimization}
        </b>
        <p className="m-0 self-stretch relative leading-[2.25rem] font-body300-rg text-darkslategray-100 mq450:text-[1.188rem] mq450:leading-[1.813rem]">
          {ourCarefullyCraftedCTAsGu}
        </p>
      </div>
    </div>
  );
};

FeaturePair.propTypes = {
  className: PropTypes.string,
  virtual105695042: PropTypes.string,
  callToActionOptimization: PropTypes.string,
  ourCarefullyCraftedCTAsGu: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propLeft: PropTypes.any,
};

export default FeaturePair;
