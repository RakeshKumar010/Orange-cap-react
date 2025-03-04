 
import { Link } from "react-router-dom";
import AboutVideoImg1 from "../../assets/image/about/about-video.jpg";
 

const AboutSecVideo = () => {
  return (
    <section className="  overflow-hidden py-14  px-3  lg:px-5 2xl:px-32 bg-white text-gray-700">
      <div className="w-full">
        <div className="flex flex-col items-center justify-between gap-x-16 gap-y-[60px] lg:flex-row xl:gap-x-[120px]">
          <div
            className="lg:w-1/2 aos-init aos-animate"
            data-aos="fade-up-right"
            data-aos-delay="400"
          >
            <div className="text-left">
            


              <span className="mb-2 block font-secondary text-[28px] md:text-[40px] font-bold uppercase leading-[1.5] tracking-[4px] text-logoColor  ">
              Why choose us
            </span>
            <h2 className="font-secondary md:text-[30px] text-[20px] font-[700] md:leading-[60px]   text-gray-700  ">
            Let’s Build Your Digital Success Story
            </h2>

              <p className="mt-5 whitespace-pre-line">
                Whether you're a startup, an enterprise, or a personal brand,
                Orange Cap Media Private Limited is your trusted partner in
                achieving a powerful online presence and business growth.
              </p>
              <br />
              <p className="text-gray-800 font-semibold">
              Ready to Elevate Your Digital Presence? Get in touch today!
              </p>
            </div>
            <div className="mt-7 grid gap-5 text-accent-900 text-gray-800 sm:grid-cols-2 md:mt-10 md:gap-7">
              <div className="group flex min-h-[64px] items-center gap-5 rounded-md border border-logoColor/50 text-gray-700 px-6 py-2 md:min-h-[85px] md:px-7 md:py-3 transition-all duration-300  ">
                <span className="scale-100 transition-transform ease-linear group-hover:scale-90 text-logoColor">
                  <svg
                    width="30"
                    height="41"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M26.25 39.5938H3.75C2.75544 39.5938 1.80161 39.1987 1.09835 38.4954C0.395088 37.7921 0 36.8383 0 35.8438V5.84375C0 4.84919 0.395088 3.89536 1.09835 3.1921C1.80161 2.48884 2.75544 2.09375 3.75 2.09375H26.25C27.2446 2.09375 28.1984 2.48884 28.9017 3.1921C29.6049 3.89536 30 4.84919 30 5.84375V35.8438C30 36.8383 29.6049 37.7921 28.9017 38.4954C28.1984 39.1987 27.2446 39.5938 26.25 39.5938ZM3.75 4.59375C3.41848 4.59375 3.10054 4.72545 2.86612 4.95987C2.6317 5.19429 2.5 5.51223 2.5 5.84375V35.8438C2.5 36.1753 2.6317 36.4932 2.86612 36.7276C3.10054 36.9621 3.41848 37.0938 3.75 37.0938H26.25C26.5815 37.0938 26.8995 36.9621 27.1339 36.7276C27.3683 36.4932 27.5 36.1753 27.5 35.8438V5.84375C27.5 5.51223 27.3683 5.19429 27.1339 4.95987C26.8995 4.72545 26.5815 4.59375 26.25 4.59375H3.75Z"></path>
                    <path d="M11.25 34.5938H8.75C8.41848 34.5938 8.10054 34.4621 7.86612 34.2276C7.6317 33.9932 7.5 33.6753 7.5 33.3438C7.5 33.0122 7.6317 32.6943 7.86612 32.4599C8.10054 32.2254 8.41848 32.0938 8.75 32.0938H11.25C11.5815 32.0938 11.8995 32.2254 12.1339 32.4599C12.3683 32.6943 12.5 33.0122 12.5 33.3438C12.5 33.6753 12.3683 33.9932 12.1339 34.2276C11.8995 34.4621 11.5815 34.5938 11.25 34.5938Z"></path>
                  </svg>
                </span>
                <h3 className="text-md font-bold leading-[1.25] md:text-lg">
                Technology-Driven Approach 
                </h3>
              </div>

              <div className="group flex min-h-[64px] items-center gap-5 rounded-md border border-logoColor/50 text-gray-700 px-6 py-2 md:min-h-[85px] md:px-7 md:py-3 transition-all duration-300  ">
                <span className="scale-100 transition-transform ease-linear group-hover:scale-90 text-logoColor">
                  <svg
                    width="40"
                    height="41"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.50125 22.2687V8.34375C7.50125 8.01223 7.36955 7.69429 7.13513 7.45987C6.90071 7.22545 6.58277 7.09375 6.25125 7.09375C5.91973 7.09375 5.60179 7.22545 5.36737 7.45987C5.13295 7.69429 5.00125 8.01223 5.00125 8.34375V22.2687C3.94204 22.5566 3.00698 23.185 2.34033 24.057C1.67369 24.929 1.3125 25.9961 1.3125 27.0938C1.3125 28.1914 1.67369 29.2585 2.34033 30.1305C3.00698 31.0025 3.94204 31.6309 5.00125 31.9188V33.3438C5.00125 33.6753 5.13295 33.9932 5.36737 34.2276C5.60179 34.4621 5.91973 34.5938 6.25125 34.5938C6.58277 34.5938 6.90071 34.4621 7.13513 34.2276C7.36955 33.9932 7.50125 33.6753 7.50125 33.3438V31.9188C8.56046 31.6309 9.49552 31.0025 10.1622 30.1305C10.8288 29.2585 11.19 28.1914 11.19 27.0938C11.19 25.9961 10.8288 24.929 10.1622 24.057C9.49552 23.185 8.56046 22.5566 7.50125 22.2687Z"></path>
                    <path d="M38.7513 27.0938C38.7477 25.9881 38.3777 24.9147 37.6991 24.0417C37.0206 23.1687 36.0718 22.5452 35.0013 22.2687V8.34375C35.0013 8.01223 34.8696 7.69429 34.6351 7.45987C34.4007 7.22545 34.0828 7.09375 33.7513 7.09375C33.4197 7.09375 33.1018 7.22545 32.8674 7.45987C32.6329 7.69429 32.5013 8.01223 32.5013 8.34375V22.2687C31.442 22.5566 30.507 23.185 29.8403 24.057C29.1737 24.929 28.8125 25.9961 28.8125 27.0938C28.8125 28.1914 29.1737 29.2585 29.8403 30.1305C30.507 31.0025 31.442 31.6309 32.5013 31.9188V33.3438C32.5013 33.6753 32.6329 33.9932 32.8674 34.2276C33.1018 34.4621 33.4197 34.5938 33.7513 34.5938C34.0828 34.5938 34.4007 34.4621 34.6351 34.2276C34.8696 33.9932 35.0013 33.6753 35.0013 33.3438V31.9188C36.0718 31.6423 37.0206 31.0188 37.6991 30.1458C38.3777 29.2728 38.7477 28.1994 38.7513 27.0938ZM33.7513 29.5938C33.2568 29.5938 32.7734 29.4471 32.3623 29.1724C31.9512 28.8977 31.6308 28.5073 31.4416 28.0505C31.2523 27.5936 31.2028 27.091 31.2993 26.606C31.3957 26.1211 31.6339 25.6756 31.9835 25.326C32.3331 24.9764 32.7786 24.7382 33.2635 24.6418C33.7485 24.5453 34.2511 24.5948 34.708 24.784C35.1648 24.9733 35.5552 25.2937 35.8299 25.7048C36.1046 26.1159 36.2513 26.5993 36.2513 27.0938C36.2513 27.7568 35.9879 28.3927 35.519 28.8615C35.0502 29.3304 34.4143 29.5938 33.7513 29.5938Z"></path>
                    <path d="M21.2513 9.76875V8.34375C21.2513 8.01223 21.1196 7.69429 20.8851 7.45987C20.6507 7.22545 20.3328 7.09375 20.0013 7.09375C19.6697 7.09375 19.3518 7.22545 19.1174 7.45987C18.8829 7.69429 18.7513 8.01223 18.7513 8.34375V9.76875C17.692 10.0566 16.757 10.685 16.0903 11.557C15.4237 12.429 15.0625 13.4961 15.0625 14.5938C15.0625 15.6914 15.4237 16.7585 16.0903 17.6305C16.757 18.5025 17.692 19.1309 18.7513 19.4187V33.3438C18.7513 33.6753 18.8829 33.9932 19.1174 34.2276C19.3518 34.4621 19.6697 34.5938 20.0013 34.5938C20.3328 34.5938 20.6507 34.4621 20.8851 34.2276C21.1196 33.9932 21.2513 33.6753 21.2513 33.3438V19.4187C22.3105 19.1309 23.2455 18.5025 23.9122 17.6305C24.5788 16.7585 24.94 15.6914 24.94 14.5938C24.94 13.4961 24.5788 12.429 23.9122 11.557C23.2455 10.685 22.3105 10.0566 21.2513 9.76875ZM20.0013 17.0938C19.5068 17.0938 19.0234 16.9471 18.6123 16.6724C18.2012 16.3977 17.8808 16.0073 17.6916 15.5505C17.5023 15.0936 17.4528 14.591 17.5493 14.106C17.6457 13.6211 17.8839 13.1756 18.2335 12.826C18.5831 12.4764 19.0286 12.2382 19.5135 12.1418C19.9985 12.0453 20.5011 12.0948 20.958 12.2841C21.4148 12.4733 21.8052 12.7937 22.0799 13.2048C22.3546 13.6159 22.5013 14.0993 22.5013 14.5938C22.5013 15.2568 22.2379 15.8927 21.769 16.3615C21.3002 16.8304 20.6643 17.0938 20.0013 17.0938Z"></path>
                  </svg>
                </span>
                <h3 className="text-md font-bold leading-[1.25] md:text-lg">
                Creative Excellence 
                </h3>
              </div>
              <div className="group flex min-h-[64px] items-center gap-5 rounded-md border border-logoColor/50 text-gray-700 px-6 py-2 md:min-h-[85px] md:px-7 md:py-3 transition-all duration-300  ">
                <span className="scale-100 transition-transform ease-linear group-hover:scale-90 text-logoColor">
                  <svg
                    width="40"
                    height="41"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.50125 22.2687V8.34375C7.50125 8.01223 7.36955 7.69429 7.13513 7.45987C6.90071 7.22545 6.58277 7.09375 6.25125 7.09375C5.91973 7.09375 5.60179 7.22545 5.36737 7.45987C5.13295 7.69429 5.00125 8.01223 5.00125 8.34375V22.2687C3.94204 22.5566 3.00698 23.185 2.34033 24.057C1.67369 24.929 1.3125 25.9961 1.3125 27.0938C1.3125 28.1914 1.67369 29.2585 2.34033 30.1305C3.00698 31.0025 3.94204 31.6309 5.00125 31.9188V33.3438C5.00125 33.6753 5.13295 33.9932 5.36737 34.2276C5.60179 34.4621 5.91973 34.5938 6.25125 34.5938C6.58277 34.5938 6.90071 34.4621 7.13513 34.2276C7.36955 33.9932 7.50125 33.6753 7.50125 33.3438V31.9188C8.56046 31.6309 9.49552 31.0025 10.1622 30.1305C10.8288 29.2585 11.19 28.1914 11.19 27.0938C11.19 25.9961 10.8288 24.929 10.1622 24.057C9.49552 23.185 8.56046 22.5566 7.50125 22.2687Z"></path>
                    <path d="M38.7513 27.0938C38.7477 25.9881 38.3777 24.9147 37.6991 24.0417C37.0206 23.1687 36.0718 22.5452 35.0013 22.2687V8.34375C35.0013 8.01223 34.8696 7.69429 34.6351 7.45987C34.4007 7.22545 34.0828 7.09375 33.7513 7.09375C33.4197 7.09375 33.1018 7.22545 32.8674 7.45987C32.6329 7.69429 32.5013 8.01223 32.5013 8.34375V22.2687C31.442 22.5566 30.507 23.185 29.8403 24.057C29.1737 24.929 28.8125 25.9961 28.8125 27.0938C28.8125 28.1914 29.1737 29.2585 29.8403 30.1305C30.507 31.0025 31.442 31.6309 32.5013 31.9188V33.3438C32.5013 33.6753 32.6329 33.9932 32.8674 34.2276C33.1018 34.4621 33.4197 34.5938 33.7513 34.5938C34.0828 34.5938 34.4007 34.4621 34.6351 34.2276C34.8696 33.9932 35.0013 33.6753 35.0013 33.3438V31.9188C36.0718 31.6423 37.0206 31.0188 37.6991 30.1458C38.3777 29.2728 38.7477 28.1994 38.7513 27.0938ZM33.7513 29.5938C33.2568 29.5938 32.7734 29.4471 32.3623 29.1724C31.9512 28.8977 31.6308 28.5073 31.4416 28.0505C31.2523 27.5936 31.2028 27.091 31.2993 26.606C31.3957 26.1211 31.6339 25.6756 31.9835 25.326C32.3331 24.9764 32.7786 24.7382 33.2635 24.6418C33.7485 24.5453 34.2511 24.5948 34.708 24.784C35.1648 24.9733 35.5552 25.2937 35.8299 25.7048C36.1046 26.1159 36.2513 26.5993 36.2513 27.0938C36.2513 27.7568 35.9879 28.3927 35.519 28.8615C35.0502 29.3304 34.4143 29.5938 33.7513 29.5938Z"></path>
                    <path d="M21.2513 9.76875V8.34375C21.2513 8.01223 21.1196 7.69429 20.8851 7.45987C20.6507 7.22545 20.3328 7.09375 20.0013 7.09375C19.6697 7.09375 19.3518 7.22545 19.1174 7.45987C18.8829 7.69429 18.7513 8.01223 18.7513 8.34375V9.76875C17.692 10.0566 16.757 10.685 16.0903 11.557C15.4237 12.429 15.0625 13.4961 15.0625 14.5938C15.0625 15.6914 15.4237 16.7585 16.0903 17.6305C16.757 18.5025 17.692 19.1309 18.7513 19.4187V33.3438C18.7513 33.6753 18.8829 33.9932 19.1174 34.2276C19.3518 34.4621 19.6697 34.5938 20.0013 34.5938C20.3328 34.5938 20.6507 34.4621 20.8851 34.2276C21.1196 33.9932 21.2513 33.6753 21.2513 33.3438V19.4187C22.3105 19.1309 23.2455 18.5025 23.9122 17.6305C24.5788 16.7585 24.94 15.6914 24.94 14.5938C24.94 13.4961 24.5788 12.429 23.9122 11.557C23.2455 10.685 22.3105 10.0566 21.2513 9.76875ZM20.0013 17.0938C19.5068 17.0938 19.0234 16.9471 18.6123 16.6724C18.2012 16.3977 17.8808 16.0073 17.6916 15.5505C17.5023 15.0936 17.4528 14.591 17.5493 14.106C17.6457 13.6211 17.8839 13.1756 18.2335 12.826C18.5831 12.4764 19.0286 12.2382 19.5135 12.1418C19.9985 12.0453 20.5011 12.0948 20.958 12.2841C21.4148 12.4733 21.8052 12.7937 22.0799 13.2048C22.3546 13.6159 22.5013 14.0993 22.5013 14.5938C22.5013 15.2568 22.2379 15.8927 21.769 16.3615C21.3002 16.8304 20.6643 17.0938 20.0013 17.0938Z"></path>
                  </svg>
                </span>
                <h3 className="text-md font-bold leading-[1.25] md:text-lg">
                Growth-Oriented Strategies 
                </h3>
              </div>
              <div className="group flex min-h-[64px] items-center gap-5 rounded-md border border-logoColor/50 text-gray-700 px-6 py-2 md:min-h-[85px] md:px-7 md:py-3 transition-all duration-300  ">
                <span className="scale-100 transition-transform ease-linear group-hover:scale-90 text-logoColor">
                  <svg
                    width="30"
                    height="41"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M26.25 39.5938H3.75C2.75544 39.5938 1.80161 39.1987 1.09835 38.4954C0.395088 37.7921 0 36.8383 0 35.8438V5.84375C0 4.84919 0.395088 3.89536 1.09835 3.1921C1.80161 2.48884 2.75544 2.09375 3.75 2.09375H26.25C27.2446 2.09375 28.1984 2.48884 28.9017 3.1921C29.6049 3.89536 30 4.84919 30 5.84375V35.8438C30 36.8383 29.6049 37.7921 28.9017 38.4954C28.1984 39.1987 27.2446 39.5938 26.25 39.5938ZM3.75 4.59375C3.41848 4.59375 3.10054 4.72545 2.86612 4.95987C2.6317 5.19429 2.5 5.51223 2.5 5.84375V35.8438C2.5 36.1753 2.6317 36.4932 2.86612 36.7276C3.10054 36.9621 3.41848 37.0938 3.75 37.0938H26.25C26.5815 37.0938 26.8995 36.9621 27.1339 36.7276C27.3683 36.4932 27.5 36.1753 27.5 35.8438V5.84375C27.5 5.51223 27.3683 5.19429 27.1339 4.95987C26.8995 4.72545 26.5815 4.59375 26.25 4.59375H3.75Z"></path>
                    <path d="M11.25 34.5938H8.75C8.41848 34.5938 8.10054 34.4621 7.86612 34.2276C7.6317 33.9932 7.5 33.6753 7.5 33.3438C7.5 33.0122 7.6317 32.6943 7.86612 32.4599C8.10054 32.2254 8.41848 32.0938 8.75 32.0938H11.25C11.5815 32.0938 11.8995 32.2254 12.1339 32.4599C12.3683 32.6943 12.5 33.0122 12.5 33.3438C12.5 33.6753 12.3683 33.9932 12.1339 34.2276C11.8995 34.4621 11.5815 34.5938 11.25 34.5938Z"></path>
                  </svg>
                </span>
                <h3 className="text-md font-bold leading-[1.25] md:text-lg">
                Comprehensive Service Portfolio 
                </h3>
              </div>
            </div>
          </div>
          <div className="lg:w-[45%]">
            <div
              className="group relative z-[1] mx-auto aos-init aos-animate"
              data-aos="fade-up-left"
              data-aos-delay="400"
            >
              <div data-testid="video-player" className="inline-grid">
                <div
                  data-testid="media-wrapper"
                  className="video-player_media-wrapper__FL2Ld cursor-pointer relative inline-flex overflow-hidden rounded-[5px] after:pointer-events-none after:absolute after:left-0 after:top-0 after:z-[1] after:h-0 after:w-full after:bg-white/30 after:opacity-100 hover:transition-all hover:after:h-full hover:after:opacity-0 hover:after:duration-400 hover:after:ease-linear"
                >
                  <span className="video-player_media-overlay__3zbem absolute inset-0 z-[1] hidden"></span>

                  <img
                    style={{ color: "transparent" }}
                    src={AboutVideoImg1}
                    alt="about-video-img-1"
                    className="block object-cover grayscale"
                  />
                  <Link
                    href={"https://www.youtube.com/watch?v=NKJ-6zCSk2E"}
                    target="_blank"
                    className="cursor-pointer absolute left-1/2 top-1/2 z-10 inline-block -translate-x-1/2 -translate-y-1/2"
                  >
                    <span className="w-[100px] h-[100px] rounded-[-logoColor grid place-items-center duration-350 text-white hover:bg-black transition-all text-[2.5rem] md:text-[6.25rem] relative after:absolute after:inset-0 after:[box-shadow:0_0_0_0_rgb(255_255_255/60%)] after:[animation-delay:.6s] after:transition-all after:animate-ripple after:rounded-[inherit] before:absolute before:inset-0 before:[box-shadow:0_0_0_0_rgb(255_255_255/60%)] before:transition-all before:animate-ripple before:rounded-[inherit]">
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.82617 0.546509L15.0762 7.42151C15.623 7.77307 15.9746 8.39807 15.9746 9.02307C15.9746 9.68713 15.623 10.3121 15.0762 10.6246L3.82617 17.4996C3.24023 17.8512 2.49805 17.8903 1.91211 17.5387C1.32617 17.2262 0.974609 16.6012 0.974609 15.8981V2.14807C0.974609 1.48401 1.32617 0.859009 1.91211 0.546509C2.49805 0.194946 3.24023 0.194946 3.82617 0.546509Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="absolute left-0 top-0 -z-[1] h-full w-full rotate-3 rounded-[5px] bg-logoColor tex/50t-logoColor gray-700ion-transform duration-350 group-hover:rotate-[2deg] md:rotate-[5deg]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSecVideo;
