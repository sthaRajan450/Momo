import { FaBirthdayCake } from "react-icons/fa";
import { GiCook, GiPartyPopper } from "react-icons/gi";
import { IoPlayCircle } from "react-icons/io5";
import { PiChefHat } from "react-icons/pi";
import Button from "../components/Button/Button";

const chefImg =
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80";
const foodBg =
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1600&q=80";

const partyImg =
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80";

const cateringImg =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80";

const qrImg =
  "https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=ServiceQR";

export default function Services() {
  return (
    <div>
      <div className="flex justify-between bg-white px-8 ml-30">
        <div className="flex-1 mt-40">
          <h2 className="text-7xl   font-bold mb-2">Our Services</h2>
          <div className="uppercase text-2xl text-gray-400 mb-4">
            Knowing our customers needs
          </div>
          <div className="mb-4">
            <p className="text-orange-600 font-bold text-4xl ">
              We're more than just momos.
            </p>
            <p className="text-black font-bold text-4xl">
              We're a full-service dining experience.
            </p>
          </div>
        </div>

        <div className="relative mr-20">
          <div className="w-24 h-24 bg-green-100 rounded-full absolute -top-4 -left-4 animate-pulse"></div>
          <img
            src={chefImg}
            alt="Chef"
            className="h-96 w-[500px] rounded-3xl shadow-lg object-cover"
          />
        </div>
      </div>

      <div className="relative w-full h-[500px] mt-12">
        <img
          src={foodBg}
          alt="Momo Food"
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50  flex flex-col justify-center items-start pl-16">
          <h2 className="text-white text-4xl font-bold mb-3">Dine With Us</h2>
          <p className="text-white text-lg mb-6 max-w-xl">
            Enjoy our momos in the comfort of your own home with our delivery
            services.
          </p>
          <Button text="watch the video" icon={<IoPlayCircle />}></Button>
        </div>
      </div>

      <div className="mt-32 mx-40">
        <div className="flex gap-20 justify-between">
          <div className="w-[50%]">
            <GiPartyPopper className="w-20 h-20 text-red-400" />
            <h1 className="mt-4 text-3xl font-semibold">Private Party</h1>
            <p className="mt-4 text-gray-600">
              Host your next celebration with us. From birthdays to corporate
              parties, we provide the perfect ambiance and mouthwatering menu to
              make your event unforgettable.
            </p>
            <div className="mt-8 rounded-2xl p-4 flex justify-between items-center shadow-lg bg-white">
              <div>
                <p className="text-2xl font-bold text-green-700">
                  Scan the QR code
                </p>
                <p className="text-gray-400">
                  Check out our exclusive services.
                </p>
              </div>
              <div>
                <img className="h-20 w-20" src={qrImg} alt="QR Code" />
              </div>
            </div>
          </div>
          <div>
            <img
              className="rounded-3xl shadow-lg hover:scale-105 transition"
              src={partyImg}
              alt="Private Party"
            />
          </div>
        </div>

        <div className="mt-20 flex gap-20 justify-between">
          <div>
            <img
              className="rounded-3xl shadow-lg hover:scale-105 transition"
              src={cateringImg}
              alt="Catering"
            />
          </div>
          <div className="w-[50%]">
            <PiChefHat className="w-20 h-20 text-red-400" />
            <h1 className="mt-4 text-3xl font-semibold">Catering</h1>
            <p className="mt-4 text-gray-600">
              Our experienced chefs are ready to cater for your special
              occasions, offering customized menus and impeccable service to
              elevate your event.
            </p>
            <div className="mt-8 rounded-2xl p-4 flex justify-between items-center shadow-lg bg-white">
              <div>
                <p className="text-2xl font-bold text-green-700">
                  Scan the QR code
                </p>
                <p className="text-gray-400">
                  Check out our catering services.
                </p>
              </div>
              <div>
                <img className="h-20 w-20" src={qrImg} alt="QR Code" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-24 mb-12 bg-gray-50 rounded-2xl py-12 px-6 text-center shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Got any Queries?</h2>
        <p className="text-gray-600 mb-8 text-lg">
          If you have any questions, send us a message. Our friendly team would
          love to hear from you.
        </p>
        <div className="flex justify-center">
          <Button text="Get in touch" icon={<IoPlayCircle />}></Button>
        </div>
      </div>
    </div>
  );
}
