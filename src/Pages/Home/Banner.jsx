//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Banner = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation]}
      slidesPerView={1}
      spaceBetween={30}
      navigation={true}
      loop={true}
      className="py-8"
    >
      {/* Slider 1 */}
      <SwiperSlide className="py-8 px-12">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 ">
          <div className="w-full md:w-1/2 pl-8 md:pl-14 lg:pl-20 space-y-8">
            <h1 className="font-permanentMarker text-2xl text-slate-800">
              Superman
            </h1>
            <p className="w-full md:w-11/12 lg:10/12 font-spaceMono text-lg text-slate-700 ">
              <small>
                Bring the power of Superman to your playtime with this action
                figure. Get ready for epic adventures and save the day with
                Superman!
              </small>
            </p>
            <button className=" button-primary">Shop Now</button>
          </div>
          <div className="w-full md:w-1/2 ">
            <img
              src="https://i.ibb.co/YDb93yX/1-superman.jpg"
              alt=""
              className="w-96 h-96 mx-auto"
            />
          </div>
        </div>
      </SwiperSlide>
      {/* *** */}

      {/* Slider 2 */}
      <SwiperSlide className="py-8 px-12">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 ">
          <div className="w-full md:w-1/2 pl-8 md:pl-14 lg:pl-20 space-y-8">
            <h1 className="font-permanentMarker text-2xl text-slate-800">
              Batman
            </h1>
            <p className="w-full md:w-11/12 lg:10/12 font-spaceMono text-lg text-slate-700 ">
              <small>
                Enter the world of Gotham City with this Batman action figure.
                It's crafted with attention to detail and features multiple
                points of articulation for dynamic poses.
              </small>
            </p>
            <button className="button-primary">Shop Now</button>
          </div>
          <div className="w-full md:w-1/2 ">
            <img
              src="https://i.ibb.co/1zpWkbF/2-batman.jpg"
              alt=""
              className="w-96 h-96 mx-auto"
            />
          </div>
        </div>
      </SwiperSlide>
      {/* *** */}

      {/* Slider 3 */}
      <SwiperSlide className="py-8 px-12">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 ">
          <div className="w-full md:w-1/2 pl-8 md:pl-14 lg:pl-20 space-y-8">
            <h1 className="font-permanentMarker text-2xl text-slate-800">
              Iron Man
            </h1>
            <p className="w-full md:w-11/12 lg:10/12 font-spaceMono text-lg text-slate-700 ">
              <small>
                Suit up as the armored Avenger with this Iron Man action figure.
                Join the Avengers and save the world from threats!
              </small>
            </p>
            <button className="button-primary">Shop Now</button>
          </div>
          <div className="w-full md:w-1/2 ">
            <img
              src="https://i.ibb.co/3Fr72vz/3-iron-man.jpg"
              alt=""
              className="w-96 h-96 mx-auto"
            />
          </div>
        </div>
      </SwiperSlide>
      {/* *** */}

      {/* Slider 4 */}
      <SwiperSlide className="py-8 px-12">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 ">
          <div className="w-full md:w-1/2 pl-8 md:pl-14 lg:pl-20 space-y-8">
            <h1 className="font-permanentMarker text-2xl text-slate-800">
              Spider-Man
            </h1>
            <p className="w-full md:w-11/12 lg:10/12 font-spaceMono text-lg text-slate-700 ">
              <small>
                Swing into action with this Spider-Man action figure. Join
                Spider-Man in protecting New York City from villains!
              </small>
            </p>
            <button className="button-primary">Shop Now</button>
          </div>
          <div className="w-full md:w-1/2 ">
            <img
              src="https://i.ibb.co/NT84yPp/5-spiderman.jpg"
              alt=""
              className="w-96 h-96 mx-auto"
            />
          </div>
        </div>
      </SwiperSlide>
      {/* *** */}
    </Swiper>
  );
};

export default Banner;
