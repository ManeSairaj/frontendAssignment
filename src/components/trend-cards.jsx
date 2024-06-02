import { useMemo } from "react";
import PropTypes from "prop-types";

const TrendCards = ({
  className = "",
  group116,
  marketTrendsAnalysis,
  predictiveInsightsToGuide,
  propPadding,
}) => {
  const trendCardsStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`z-20 self-stretch shadow-[-2px_4px_32px_rgba(235,_235,_235,_0.6)] rounded-2xl bg-white box-border flex flex-row items-center justify-center py-[2.687rem] px-[1.937rem] gap-[1rem] max-w-full text-left text-[1.5rem] text-gray-400 font-poppins border-[1px] border-solid border-whitesmoke-300 mq750:flex-wrap ${className}`}
      style={trendCardsStyle}
    >
      <img
        className="h-[3.25rem] w-[3.25rem] relative object-contain"
        loading="lazy"
        alt=""
        src={group116}
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem] min-w-[18.438rem] max-w-full px-[1.4rem]">
        <div className="self-stretch relative leading-[2rem] font-semibold mq450:text-[1.188rem] mq450:leading-[1.563rem]">
          {marketTrendsAnalysis}
        </div>
        <p className="m-0 self-stretch relative text-[1rem] tracking-[-0.02em] leading-[1.5rem] font-h200-blod text-darkslategray-100">
          {predictiveInsightsToGuide}
        </p>
      </div>
    </div>
  );
};

export default TrendCards;
