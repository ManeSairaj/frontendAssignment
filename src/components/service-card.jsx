import { useMemo } from "react";
import PropTypes from "prop-types";

const ServiceCard = ({
  className = "",
  group117,
  automotiveSEO,
  driveYourSuccessWithAutom,
  propPadding,
}) => {
  const serviceCardStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`w-[18.563rem] shadow-[-3px_4px_16px_rgba(0,_0,_0,_0.04)] rounded-lg bg-white flex flex-col items-center justify-start py-[2rem] px-[1rem] box-border gap-[1rem] text-center text-[1.125rem] text-gray-400 font-h300-bold ${className}`}
      style={serviceCardStyle}
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
        <img
          className="w-[3.25rem] h-[3.25rem] relative object-contain"
          loading="lazy"
          alt=""
          src={group117}
        />
        <b className="self-stretch relative leading-[1.438rem] font-bold">
          {automotiveSEO}
        </b>
      </div>
      <p className="m-0 self-stretch relative text-[0.875rem] font-body300-rg text-darkslategray-100">
        {driveYourSuccessWithAutom}
      </p>
    </div>
  );
};

ServiceCard.propTypes = {
  className: PropTypes.string,
  group117: PropTypes.string,
  automotiveSEO: PropTypes.string,
  driveYourSuccessWithAutom: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default ServiceCard;
