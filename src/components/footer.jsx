import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <section
      className={`w-[88rem] flex flex-row items-start justify-end py-[0rem] px-[4rem] box-border max-w-full lg:pl-[2rem] lg:pr-[2rem] lg:box-border ${className}`}
    >
      <footer className="flex-1 flex flex-col items-start justify-start gap-[2rem] max-w-full text-left text-[1.5rem] text-gray-400 font-h300-bold mq750:gap-[1rem]">
        <div className="self-stretch [backdrop-filter:blur(500px)] rounded-13xl [background:linear-gradient(261.57deg,_rgba(0,_111,_237,_0.12),_rgba(179,_214,_255,_0.12))] overflow-hidden flex flex-row items-start justify-between pt-[3.5rem] pb-[6.687rem] pr-[2.187rem] pl-[2.687rem] box-border relative max-w-full gap-[1.25rem] lg:pl-[1.313rem] lg:box-border mq750:pt-[2.25rem] mq750:pb-[4.375rem] mq750:box-border mq1050:flex-wrap">
          <div className="h-[36rem] w-[36rem] absolute !m-[0] bottom-[-19.041rem] left-[30.675rem] [filter:blur(327px)] rounded-[50%] bg-dodgerblue-200 [transform:_rotate(140.5deg)] [transform-origin:0_0]" />
          <div className="w-[23.125rem] flex flex-col items-start justify-start py-[0rem] pr-[0.312rem] pl-[0rem] box-border gap-[2rem] max-w-full text-[1rem] font-body300-rg mq450:gap-[1rem]">
            <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.937rem] gap-[1rem] text-darkslategray-100">
              <div className="w-[8.563rem] h-[4.5rem] relative rounded overflow-hidden shrink-0 z-[1]">
                <img
                  className="absolute h-full top-[0rem] bottom-[0rem] left-[calc(50%_-_68.5px)] max-h-full w-[7.763rem] object-cover"
                  loading="lazy"
                  alt=""
                  src="/osumare-logo01-2-3@2x.png"
                />
              </div>
              <p className="m-0 self-stretch relative leading-[1.5rem] z-[1]">
                The best digital marketing agency in Pune with a proven track
                record of consistently delivering quality service.
              </p>
            </div>
            <div className="w-[12.25rem] flex flex-col items-start justify-start gap-[0.5rem] text-center text-[1.125rem] font-h300-bold">
              <b className="relative tracking-[0.3px] leading-[1.688rem] font-bold inline-block min-w-[4.938rem] z-[1]">
                Address
              </b>
              <p className="m-0 self-stretch relative text-[1rem] leading-[1.5rem] font-body300-rg text-darkslategray-100 text-left z-[1]">
                Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi,
                Pune-14, Maharastra, India.
              </p>
            </div>
            <div className="w-[12rem] flex flex-col items-start justify-start gap-[1.5rem] z-[1] text-[1.5rem] font-h200-blod">
              <b className="relative leading-[2.25rem] inline-block min-w-[6.75rem] mq450:text-[1.188rem] mq450:leading-[1.813rem]">
                Contacts
              </b>
              <div className="self-stretch flex flex-col items-start justify-center gap-[1rem] text-[1rem] text-darkslategray-100 font-body300-rg">
                <div className="self-stretch flex flex-row items-start justify-start gap-[0.5rem]">
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                    loading="lazy"
                    alt=""
                    src="/mailfill.svg"
                  />
                  <a
                    className="flex-1 relative leading-[1.5rem] text-[inherit] [text-decoration:none] whitespace-nowrap"
                    href="mailto:%68ello@osum%61re%2Ein"
                    target="_blank"
                  >
                    hello@osumare.in
                  </a>
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.5rem]">
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                    loading="lazy"
                    alt=""
                    src="/phonefill.svg"
                  />
                  <div className="relative leading-[1.5rem] whitespace-nowrap">
                    +91 8459 8762 26
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[2rem] text-center">
            <b className="relative leading-[3rem] inline-block min-w-[4.5rem] mq450:text-[1.188rem] mq450:leading-[2.375rem]">
              Menu
            </b>
            <div className="flex flex-col items-start justify-start gap-[1rem] text-[1rem] text-darkslategray-100">
              <div className="relative leading-[1.5rem] font-medium inline-block min-w-[3.125rem]">
                Home
              </div>
              <a className="[text-decoration:none] relative leading-[1.5rem] font-medium text-[inherit] inline-block min-w-[3.188rem]">
                About
              </a>
              <a className="[text-decoration:none] relative leading-[1.5rem] font-medium text-[inherit] inline-block min-w-[4.188rem]">
                Services
              </a>
              <div className="relative leading-[1.5rem] font-medium inline-block min-w-[2.75rem]">
                Work
              </div>
              <div className="relative leading-[1.5rem] font-medium inline-block min-w-[2.375rem]">
                Blog
              </div>
              <div className="relative leading-[1.5rem] font-medium inline-block min-w-[3.375rem]">
                Career
              </div>
            </div>
          </div>
          <div className="w-[17.5rem] flex flex-col items-start justify-start gap-[1.5rem]">
            <b className="relative leading-[3rem] inline-block min-w-[4.688rem] mq450:text-[1.188rem] mq450:leading-[2.375rem]">
              Social
            </b>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-between pt-[0rem] pb-[4rem] pr-[0.25rem] pl-[0rem] relative gap-[1.25rem]">
              <div>
                <img
                  className="h-[2.5rem] w-[2.5rem] relative rounded-13xl overflow-hidden shrink-0 object-contain min-h-[2.5rem]"
                  loading="lazy"
                  alt=""
                  src="/pinterestfill@2x.png"
                />
              </div>
              <div>
                <img
                  className="h-[2.5rem] w-[2.5rem] relative rounded-13xl overflow-hidden shrink-0 object-contain min-h-[2.5rem]"
                  alt=""
                  src="/pinterestfill-1@2x.png"
                />
              </div>
              <div>
                <img
                  className="h-[2.5rem] w-[2.5rem] relative rounded-13xl overflow-hidden shrink-0 object-contain min-h-[2.5rem]"
                  alt=""
                  src="/pinterestfill-2@2x.png"
                />
              </div>
              <div className="h-[2.5rem] w-[1.5rem] relative rounded-13xl bg-white overflow-hidden shrink-0">
                <img
                  className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] w-[1.5rem] h-[1.5rem]"
                  alt=""
                  src="/vector-33.svg"
                />
              </div>
              <img
                className="h-[2.5rem] w-[2.5rem] relative rounded-13xl overflow-hidden shrink-0 min-h-[2.5rem]"
                loading="lazy"
                alt=""
                src="/whatsappfill.svg"
              />
              <img
                className="h-[2.5rem] w-[2.5rem] absolute !m-[0] bottom-[0rem] left-[0rem] rounded-13xl overflow-hidden shrink-0"
                alt=""
                src="/whatsappfill-1.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] text-[1rem]">
          <div className="relative tracking-[0.3px] leading-[1.5rem] font-medium">
            © 2023 Osumare. All rights reserved.
          </div>
        </div>
      </footer>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
