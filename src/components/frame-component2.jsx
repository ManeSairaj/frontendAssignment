import TrendCards from "./trend-cards";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-[0rem] px-[5rem] pb-[8.75rem] box-border max-w-full text-center text-[2rem] text-gray-400 font-h300-bold mq750:pl-[2.5rem] mq750:pr-[2.5rem] mq750:pb-[3.688rem] mq750:box-border mq1050:pb-[5.688rem] mq1050:box-border ${className} `}
    >
      <div className="flex-1 flex flex-col items-center justify-center gap-[4rem] max-w-full mq750:gap-[2rem] mq450:gap-[1rem]">
        <div className="self-stretch flex flex-row items-center justify-center py-[0rem] px-[0.062rem] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] max-w-full">
            <b className="self-stretch relative leading-[3rem] mq450:text-[1.188rem] mq450:leading-[1.813rem] mq1050:text-[1.625rem] mq1050:leading-[2.375rem]">
              Navigating Real Estate's Digital Landscape
            </b>
            <div className="self-stretch h-[2.75rem] relative text-[1.5rem] leading-[2.25rem] font-body300-rg text-darkslategray-100 flex items-center justify-center shrink-0 mq450:text-[1.188rem] mq450:leading-[1.813rem]">
              Insights for Real Estate Marketing Advantage
            </div>
          </div>
        </div>
        <div className="self-stretch md:h-[46rem] h-fit flex flex-row flex-wrap items-center justify-start relative max-w-full w-[100vw] text-left text-[1.5rem] font-poppins mq750:h-auto mq750:min-h-[736]">
          <div className="w-[36.625rem] !m-[0] md:absolute relative top-[2.375rem] left-[0rem] flex flex-col items-center justify-start gap-[1rem] max-w-full">
            <TrendCards
              group116="/group-116@2x.png"
              marketTrendsAnalysis="Market Trends Analysis"
              predictiveInsightsToGuide="Predictive insights to guide real estate strategies."
            />
            <TrendCards
              group116="/group-116-1@2x.png"
              marketTrendsAnalysis="Targeted Buyer Persona"
              predictiveInsightsToGuide="Understand and connect with your ideal property buyers."
              propPadding="2.687rem 1.937rem"
            />
            <TrendCards
              group116="/group-116-2@2x.png"
              marketTrendsAnalysis="Competitor Insights"
              predictiveInsightsToGuide="Stand out in the property market with informed strategies."
              propPadding="2.687rem 1.937rem"
            />
            <TrendCards
              group116="/group-116-3@2x.png"
              marketTrendsAnalysis="Visual Content Appeal"
              predictiveInsightsToGuide="Captivate buyers with appealing visuals and immersive experiences."
              propPadding="1.937rem"
            />
          </div>
          <div className="h-[46rem] mq450:hidden mq1050:block w-[49.563rem] lg:block !m-[0] absolute top-[0rem] right-[0rem] rounded-13xl bg-whitesmoke-100 flex flex-row items-start justify-start py-[3.125rem] pr-[1.125rem] pl-[1.75rem] box-border max-w-full z-[1] text-[2rem] text-white font-lato">
            <div className="h-[33.794rem] flex-1 relative max-w-full">
              <div className="absolute top-[0rem] left-[0rem] w-full h-[32.313rem]">
                <img
                  className="absolute top-[0rem] left-[0rem] w-full h-full object-cover"
                  alt=""
                  src="/background_shelf_clock_img@2x.png"
                />
                <div className="absolute top-[0.744rem] left-[8.181rem] w-[31.669rem] h-[29.669rem]">
                  <img
                    className="absolute top-[0rem] left-[0rem] w-full h-full"
                    alt=""
                  />
                  <div className="absolute top-[6.619rem] left-[6.044rem] bg-darkslategray-200 w-[18.05rem] h-[13.313rem] z-[4]">
                    <img
                      className="absolute top-[0rem] left-[0rem] w-full h-full hidden"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="absolute top-[0rem] left-[0rem] w-full h-full"
                      alt=""
                      src="/vector1.svg"
                    />
                    <img
                      className="absolute w-[calc(100%_-_14.9px)] top-[0.469rem] right-[0.469rem] left-[0.463rem] max-w-full overflow-hidden h-[12.381rem] object-contain z-[6]"
                      alt=""
                      src="/vector-1.svg"
                    />
                    <img
                      className="absolute w-[calc(100%_-_14.9px)] top-[0.469rem] right-[0.469rem] left-[0.463rem] max-w-full overflow-hidden h-[12.381rem] object-contain z-[7]"
                      alt=""
                      src="/vector-2.svg"
                    />
                    <div className="absolute h-[calc(100%_-_27.5px)] top-[0.875rem] bottom-[0.844rem] left-[1.069rem] w-[15.163rem]">
                      <img
                        className="absolute top-[0rem] left-[0rem] w-full h-full z-[8]"
                        alt=""
                        src="/vector-3.svg"
                      />
                      <img
                        className="absolute top-[4.6rem] left-[0.313rem] w-[1.05rem] h-[0.125rem] z-[10]"
                        alt=""
                        src="/vector-4.svg"
                      />
                      <img
                        className="absolute top-[3.163rem] left-[0.094rem] w-[2.763rem] h-[3.131rem] z-[12]"
                        alt=""
                        src="/vector-5.svg"
                      />
                    </div>
                    <div className="absolute h-[calc(100%_-_26.5px)] top-[0.844rem] bottom-[0.813rem] left-[1.669rem] w-[15.156rem]">
                      <img
                        className="absolute top-[0.063rem] left-[0rem] w-full h-full z-[9]"
                        alt=""
                        src="/vector-6.svg"
                      />
                      <div className="absolute top-[3.169rem] left-[3.794rem] font-black [text-shadow:0px_4px_13px_#9bc9fc] z-[10] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
                        We Are
                      </div>
                      <div className="absolute top-[5.294rem] left-[4.169rem] font-black [text-shadow:0px_4px_13px_#9bc9fc] z-[11] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
                        Expert
                      </div>
                      <div className="absolute top-[3.119rem] left-[11.075rem] w-[2.725rem] h-[3.25rem]">
                        <img
                          className="absolute top-[0rem] left-[0rem] w-full h-full z-[15]"
                          alt=""
                          src="/vector-7.svg"
                        />
                        <img
                          className="absolute top-[1.681rem] left-[0.263rem] w-[1.075rem] h-[0.15rem] z-[16]"
                          alt=""
                          src="/vector-8.svg"
                        />
                      </div>
                      <img
                        className="absolute top-[4.513rem] left-[10.975rem] w-[1.319rem] h-[3.15rem] z-[17]"
                        alt=""
                        src="/vector-9.svg"
                      />
                      <img
                        className="absolute top-[9.575rem] left-[0.65rem] w-[2.538rem] h-[1.65rem] z-[10]"
                        alt=""
                        src="/group.svg"
                      />
                      <img
                        className="absolute top-[0.75rem] left-[11.575rem] w-[2.256rem] h-[1.956rem] z-[10]"
                        alt=""
                        src="/group-1.svg"
                      />
                      <img
                        className="absolute top-[0.125rem] left-[0.175rem] w-[2.75rem] h-[2.613rem] z-[10]"
                        alt=""
                        src="/group-2.svg"
                      />
                      <img
                        className="absolute top-[0rem] left-[5.406rem] w-[2.944rem] h-[1.663rem] z-[10]"
                        alt=""
                        src="/group-3.svg"
                      />
                      <img
                        className="absolute top-[9.875rem] left-[6.656rem] w-[2.375rem] h-[1.631rem] z-[10]"
                        alt=""
                        src="/group-4.svg"
                      />
                      <img
                        className="absolute top-[3.513rem] left-[0.744rem] w-[0.394rem] h-[0.881rem] z-[10]"
                        alt=""
                        src="/vector-10.svg"
                      />
                      <img
                        className="absolute top-[3.575rem] left-[0.475rem] w-[0.431rem] h-[0.8rem] z-[11]"
                        alt=""
                        src="/vector-11.svg"
                      />
                      <img
                        className="absolute top-[4.9rem] left-[0.031rem] w-[0.919rem] h-[0.169rem] z-[10]"
                        alt=""
                        src="/vector-12.svg"
                      />
                      <div className="absolute top-[3.119rem] left-[0.494rem] w-[2.725rem] h-[3.25rem]">
                        <img
                          className="absolute top-[0rem] left-[0rem] w-full h-full z-[13]"
                          alt=""
                          src="/vector-13.svg"
                        />
                        <img
                          className="absolute top-[1.4rem] left-[1.1rem] w-[1.238rem] h-[0.15rem] z-[14]"
                          alt=""
                          src="/vector-14.svg"
                        />
                        <img
                          className="absolute top-[1.681rem] left-[1.388rem] w-[1.075rem] h-[0.15rem] z-[14]"
                          alt=""
                          src="/vector-15.svg"
                        />
                        <img
                          className="absolute top-[2.1rem] left-[1.156rem] w-[0.656rem] h-[0.994rem] z-[14]"
                          alt=""
                          src="/vector-16.svg"
                        />
                        <img
                          className="absolute top-[2.094rem] left-[0.863rem] w-[0.463rem] h-[0.694rem] z-[15]"
                          alt=""
                          src="/vector-17.svg"
                        />
                      </div>
                      <img
                        className="absolute top-[4.513rem] left-[1.994rem] w-[1.319rem] h-[3.156rem] z-[15]"
                        alt=""
                        src="/vector-18.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="absolute top-[27.319rem] left-[36.619rem] w-[4.581rem] h-[6.469rem] z-[2]"
                loading="lazy"
                alt=""
                src="/plant2.svg"
              />
              <div className="absolute top-[19.8rem] left-[16.313rem] w-[13.881rem] h-[13.994rem]">
                <img
                  className="absolute top-[0rem] left-[0rem] w-[1.931rem] h-[13.994rem] z-[2]"
                  alt=""
                  src="/vector-19.svg"
                />
                <img
                  className="absolute top-[0rem] left-[0rem] w-full h-full"
                  alt=""
                  src="/group-5.svg"
                />
              </div>
              <div className="absolute top-[9.269rem] left-[27.331rem] w-[11.181rem] h-[24.525rem]">
                <img
                  className="absolute top-[10.531rem] left-[0.931rem] w-[1.931rem] h-[13.994rem] z-[2]"
                  alt=""
                  src="/vector-20.svg"
                />
                <img
                  className="absolute top-[3.094rem] left-[0.275rem] w-[1.156rem] h-[1.3rem] z-[10]"
                  alt=""
                  src="/vector-21.svg"
                />
                <img
                  className="absolute top-[3.956rem] left-[0.4rem] w-[1.369rem] h-[0.731rem] z-[11]"
                  alt=""
                  src="/vector-22.svg"
                />
                <img
                  className="absolute top-[3.175rem] left-[1.775rem] w-[1.175rem] h-[1.181rem] z-[10]"
                  alt=""
                  src="/vector-23.svg"
                />
                <img
                  className="absolute top-[2.894rem] left-[1.294rem] w-[1.425rem] h-[0.7rem] z-[11]"
                  alt=""
                  src="/vector-24.svg"
                />
                <img
                  className="absolute top-[2.45rem] left-[1.713rem] w-[0.394rem] h-[0.881rem] z-[12]"
                  alt=""
                  src="/vector-25.svg"
                />
                <img
                  className="absolute top-[2.513rem] left-[1.944rem] w-[0.431rem] h-[0.8rem] z-[13]"
                  alt=""
                  src="/vector-26.svg"
                />
                <img
                  className="absolute top-[3.838rem] left-[1.906rem] w-[0.919rem] h-[0.169rem] z-[11]"
                  alt=""
                  src="/vector-27.svg"
                />
                <img
                  className="absolute top-[3.569rem] left-[2.088rem] w-[1.05rem] h-[0.125rem] z-[12]"
                  alt=""
                  src="/vector-28.svg"
                />
                <img
                  className="absolute top-[2.131rem] left-[0.6rem] w-[2.763rem] h-[3.131rem] z-[14]"
                  alt=""
                  src="/vector-29.svg"
                />
                <img
                  className="absolute top-[3.456rem] left-[0.019rem] w-[1.238rem] h-[0.15rem] z-[16]"
                  alt=""
                  src="/vector-30.svg"
                />
                <img
                  className="absolute top-[4.156rem] left-[0.55rem] w-[0.656rem] h-[0.994rem] z-[16]"
                  alt=""
                  src="/vector-31.svg"
                />
                <img
                  className="absolute top-[4.15rem] left-[1.031rem] w-[0.463rem] h-[0.694rem] z-[17]"
                  alt=""
                  src="/vector-32.svg"
                />
                <img
                  className="absolute top-[6.988rem] left-[1.044rem] w-[2.506rem] h-[2.331rem] z-[10]"
                  alt=""
                  src="/group-6.svg"
                />
                <img
                  className="absolute top-[0rem] left-[0rem] w-full h-full"
                  alt=""
                  src="/character.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
