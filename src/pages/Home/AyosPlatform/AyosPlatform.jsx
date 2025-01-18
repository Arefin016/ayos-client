import Contractor from "@/components/Contractor/Contractor";
import Customer from "@/components/Customer/Customer";
import { useState } from "react";
import ayosPlatformPic from "../../../assets/images/ayosPlatformPic.png";

const AyosPlatform = () => {
  const [isCustomer, setisCustomer] = useState(true);
  return (
    <section className="flex flex-row justify-center items-center mt-20">
      <div className="relative">
        {/* This is the title section */}
        <div className="flex flex-col items-center justify-center text-center space-y-8 mb-10">
          <h1 className="font-poppins text-[40px] text-[#172B4D] font-semibold">
            The Ayos Platform
          </h1>
          <p className="font-poppins text-[#6F767E] text-[18px] font-normal">
            Lorem Ipsum is simply dummy text of the printing and <br />{" "}
            typesetting industry.
          </p>
        </div>
        {/* This is the customer and contractor tab */}
        <div className="flex flex-row items-center justify-center text-center">
          <button
            onClick={() => {
              setisCustomer(true);
            }}
            className={` mr-8 justify-center items-center ${
              isCustomer
                ? "text-2xl text-[#083EC5] font-poppins font-medium"
                : "text-2xl text-[#42526E] font-poppins font-medium"
            } `}
          >
            <div className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                className={isCustomer ? "fill-[#083EC5]" : "fill-[#42526E]"}
              >
                <path
                  d="M17.1875 20.1094C16.9288 20.1094 16.7188 20.3194 16.7188 20.5781C16.7188 20.8369 16.9288 21.0469 17.1875 21.0469C17.4462 21.0469 17.6562 20.8369 17.6562 20.5781C17.6562 20.3194 17.4462 20.1094 17.1875 20.1094ZM7.8125 20.1094C7.55375 20.1094 7.34375 20.3194 7.34375 20.5781C7.34375 20.8369 7.55375 21.0469 7.8125 21.0469C8.07125 21.0469 8.28125 20.8369 8.28125 20.5781C8.28125 20.3194 8.07125 20.1094 7.8125 20.1094Z"
                  fill="#083EC5"
                />
                <path
                  d="M21.4834 17.6817C20.9557 16.865 20.2306 16.216 19.3812 15.7969C19.3079 15.7285 19.2146 15.6856 19.115 15.6744C18.5006 15.4136 17.853 15.2812 17.1875 15.2812H15.7812V14.0445C16.5938 13.3472 17.1797 12.4231 17.4638 11.3906H17.6562C18.6901 11.3906 19.5312 10.5495 19.5312 9.51562C19.5312 9.02569 19.3422 8.57925 19.0333 8.24484C19.063 8.21978 19.0917 8.19352 19.1193 8.16614C19.385 7.90045 19.5312 7.54734 19.5312 7.17188C19.5312 6.55486 19.1316 6.02972 18.5777 5.84081C18.4121 3.68531 16.8993 1.84331 14.8164 1.266C14.693 0.621375 14.161 0 13.4375 0H11.5625C10.839 0 10.307 0.621375 10.1836 1.266C8.10092 1.84327 6.58827 3.68494 6.42238 5.84016C6.21828 5.90948 6.03292 6.02496 5.88073 6.17761C5.61505 6.4433 5.46875 6.79641 5.46875 7.17188C5.46875 7.60139 5.66253 7.98633 5.96703 8.24447C5.65803 8.57888 5.46875 9.0255 5.46875 9.51562C5.46875 10.5495 6.30988 11.3906 7.34375 11.3906H7.53491C7.77172 12.2511 8.22073 13.0411 8.84713 13.6936C8.96529 13.8164 9.08931 13.9334 9.21875 14.0442V15.2812H7.8125C7.14697 15.2812 6.49934 15.4136 5.885 15.6743C5.78544 15.6855 5.69214 15.7285 5.61889 15.7968C4.76938 16.216 4.04431 16.865 3.51664 17.6817C2.95377 18.5529 2.65625 19.5545 2.65625 20.5781V23.5312C2.65625 23.7901 2.86611 24 3.125 24H21.875C22.1339 24 22.3438 23.7901 22.3438 23.5312V20.5781C22.3438 19.5545 22.0462 18.5529 21.4834 17.6817ZM5.46875 23.0625H3.59375V20.5781C3.59375 19.1523 4.32416 17.7857 5.46875 16.9745V23.0625ZM17.6562 10.4531H17.6349C17.6488 10.2972 17.6562 10.1407 17.6562 9.98438V8.57812C18.1732 8.57812 18.5938 8.99869 18.5938 9.51562C18.5938 10.0326 18.1732 10.4531 17.6562 10.4531ZM10.1562 2.25652V4.35938C10.1562 4.61827 10.3661 4.82812 10.625 4.82812C10.8839 4.82812 11.0938 4.61827 11.0938 4.35938V1.54688C11.0938 1.25644 11.3391 0.9375 11.5625 0.9375H13.4375C13.6609 0.9375 13.9062 1.25644 13.9062 1.54688V4.35938C13.9062 4.61827 14.1161 4.82812 14.375 4.82812C14.6339 4.82812 14.8438 4.61827 14.8438 4.35938V2.25652C16.3573 2.79216 17.45 4.16184 17.63 5.76562H7.36995C7.55 4.16184 8.64266 2.79216 10.1562 2.25652ZM7.34375 10.4531C6.82681 10.4531 6.40625 10.0326 6.40625 9.51562C6.40625 8.99869 6.82681 8.57812 7.34375 8.57812V9.98438C7.34375 10.1407 7.35116 10.2972 7.36512 10.4531H7.34375ZM7.34375 7.64062H6.875C6.61653 7.64062 6.40625 7.43034 6.40625 7.17188C6.4061 7.11031 6.41817 7.04932 6.44175 6.99245C6.46534 6.93558 6.49997 6.88396 6.54364 6.84056C6.58704 6.79688 6.63867 6.76224 6.69555 6.73865C6.75243 6.71506 6.81342 6.70298 6.875 6.70312H18.125C18.3835 6.70312 18.5938 6.91341 18.5938 7.17188C18.5939 7.23344 18.5818 7.29443 18.5582 7.3513C18.5347 7.40817 18.5 7.45979 18.4564 7.50319C18.413 7.54688 18.3613 7.58152 18.3045 7.60511C18.2476 7.6287 18.1866 7.64077 18.125 7.64062H7.34375ZM8.36642 10.8367C8.36548 10.8316 8.36459 10.8265 8.36347 10.8215C8.30892 10.5458 8.28138 10.2654 8.28125 9.98438V8.57812H16.7188V9.98438C16.7188 10.2646 16.691 10.546 16.6365 10.8213C16.6354 10.8264 16.6345 10.8315 16.6336 10.8366C16.4236 11.8831 15.8438 12.819 15.0001 13.4729C14.2667 14.0426 13.4022 14.3438 12.5 14.3438C11.5978 14.3438 10.7333 14.0426 9.99917 13.4724C9.83036 13.3417 9.67141 13.1987 9.52362 13.0446C8.9323 12.4286 8.53236 11.6654 8.36642 10.8367ZM12.0312 23.0625H8.28125V21.9844C8.28125 21.7255 8.07139 21.5156 7.8125 21.5156C7.55361 21.5156 7.34375 21.7255 7.34375 21.9844V23.0625H6.40625V16.4753C6.70827 16.3612 7.0231 16.2844 7.34375 16.2465V19.1719C7.34375 19.4308 7.55361 19.6406 7.8125 19.6406C8.07139 19.6406 8.28125 19.4308 8.28125 19.1719V16.2188H9.48664L12.0312 18.8906V23.0625ZM10.1562 15.5625V14.6894C10.8796 15.0782 11.6763 15.2812 12.5 15.2812C13.3238 15.2812 14.1205 15.0782 14.8438 14.6895V15.5625L12.5 18.0234L10.1562 15.5625ZM18.5938 23.0625H17.6562V21.9844C17.6562 21.7255 17.4464 21.5156 17.1875 21.5156C16.9286 21.5156 16.7188 21.7255 16.7188 21.9844V23.0625H12.9688V18.8906L15.5134 16.2188H16.7188V19.1719C16.7188 19.4308 16.9286 19.6406 17.1875 19.6406C17.4464 19.6406 17.6562 19.4308 17.6562 19.1719V16.2465C17.9769 16.2844 18.2917 16.3612 18.5938 16.4754V23.0625ZM21.4062 23.0625H19.5312V16.9744C20.6758 17.7857 21.4062 19.1523 21.4062 20.5781V23.0625Z"
                  fill="#083EC5"
                />
              </svg>{" "}
              Customer
            </div>
          </button>
          <button
            onClick={() => {
              setisCustomer(false);
            }}
            className={`  ${
              !isCustomer
                ? "text-2xl text-[#083EC5] font-poppins font-medium"
                : "text-2xl text-[#42526E] font-poppins font-medium"
            } `}
          >
            <div className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.0514 15.0336C18.8435 17.3991 14.5198 22.1894 10.3007 20.8366C8.74129 20.5745 7.02443 20.5284 5.4482 20.6969C5.44571 19.3175 5.42415 17.9334 5.3954 16.5505C5.91937 16.486 6.37604 16.3457 6.89747 16.2141C7.25646 16.1563 8.91183 15.0322 9.82604 15.4371C10.3527 15.6348 12.3586 16.2288 12.9285 16.4096C13.1565 16.4811 13.3044 16.5962 13.3875 16.8276C13.4955 17.1281 13.3251 17.2419 13.4085 17.437C13.3916 17.4415 13.3891 17.5137 13.3623 17.5267C13.3335 17.5406 13.1883 17.6753 13.1644 17.6668C12.5962 18.1617 10.718 17.0401 9.84889 17.0876C9.80175 17.0926 9.53055 17.0286 9.46523 17.0369C9.38833 17.0843 9.37177 17.0383 9.34129 17.0721C9.31916 17.0967 9.30582 17.0752 9.29775 17.0864C9.2835 17.1061 9.27063 17.1075 9.25614 17.1137C9.51044 17.9708 11.201 18.0491 11.9332 18.2926C12.3866 18.5235 13.5796 18.4537 13.6687 17.6235C16.1901 17.4163 18.9445 15.3992 21.2151 14.2619C21.778 13.8561 22.1346 14.5325 22.0514 15.0336ZM22.0473 15.0667L22.0526 15.0617L22.044 15.0698L22.0473 15.0667ZM22.0378 15.0793C22.038 15.0788 22.038 15.0778 22.0385 15.0771C22.0378 15.0776 22.0373 15.0784 22.0378 15.0793ZM5.52711 16.427C5.5395 16.4166 5.55207 16.4063 5.56446 16.3956C5.51804 16.3877 5.39699 16.4275 5.39224 16.413L5.39415 16.4972C5.44935 16.4803 5.50427 16.4632 5.56067 16.4458C5.48737 16.4543 5.45852 16.4613 5.52711 16.427ZM5.05974 15.6633C5.31985 15.8076 5.41364 16.1253 5.39228 16.4108C5.39924 16.38 6.36174 16.1021 6.49547 16.0603C7.40195 15.7763 8.18137 14.9818 9.23156 14.904C9.15212 14.1577 8.9235 13.2908 9.06673 12.5466C7.97137 11.0389 5.42142 10.821 4.637 12.758C4.23131 13.6301 4.60235 14.8392 4.09945 15.6305C4.43372 15.6072 4.74779 15.4763 5.05974 15.6633ZM5.74715 9.73218C5.74931 9.2385 6.19086 8.70071 6.66126 8.53122C6.66198 8.53194 6.66246 8.53338 6.66294 8.53453C6.67542 8.5149 6.68483 8.52983 6.68483 8.50669L6.73383 8.46887C9.08603 10.2044 6.0099 11.8008 5.74715 9.73218ZM6.78563 8.43301C7.031 8.01584 7.08467 7.40015 7.36652 6.99157C8.5083 5.28162 10.6308 5.93821 11.2408 7.73437C10.5552 8.30149 10.5312 9.42848 11.2082 10.0224C10.2279 10.3645 9.47305 11.1677 9.16307 12.1565C8.89307 11.5958 8.40985 11.1845 7.8434 10.9398C8.89043 10.0903 8.04265 7.98507 6.73595 8.46699C6.74876 8.45322 6.76331 8.44035 6.78563 8.43301ZM8.10078 4.37509C8.35335 2.88848 10.5649 3.62965 9.77862 4.99045C9.7586 5.06355 9.7586 5.06207 9.70019 5.13575C9.64796 5.18403 9.72668 5.15058 9.59435 5.25896L9.46518 5.35199C9.17751 5.29011 8.88712 5.30576 8.59888 5.36034C8.3054 5.15744 8.05576 4.75583 8.10078 4.37509ZM13.5944 10.7916C12.1226 9.99426 10.0973 10.7939 9.64383 12.4291C9.42582 13.2402 9.4886 14.0838 9.42947 14.899C10.2193 14.9432 11.6691 15.5043 12.4532 15.6944C13.1817 15.8538 13.9901 16.1484 13.9945 17.0219C14.4331 16.9657 14.8508 16.8387 15.263 16.6661C14.8163 14.6546 15.7995 11.9835 13.5944 10.7916ZM15.7418 12.6077C15.7392 12.616 15.7352 12.6234 15.7264 12.6272C15.8204 13.9013 15.7643 15.327 15.5151 16.56C15.5147 16.56 15.5147 16.5602 15.5147 16.5602C17.162 15.8229 18.8248 14.8516 20.3956 13.9547C20.1793 11.3987 17.1907 10.3738 15.7418 12.6077ZM14.7326 4.33914C15.1491 2.54639 17.6156 3.944 16.1293 5.40455C15.7087 5.36091 15.6743 5.34061 15.253 5.40834C14.9302 5.11525 14.6787 4.78895 14.7326 4.33914ZM22.7338 14.7563C22.6511 13.6639 21.7188 13.0837 20.7833 13.7292C21.0879 12.5246 20.0999 11.257 18.9641 10.8991C19.8441 10.1544 19.3764 8.34387 18.0987 8.52167C17.8713 8.54634 17.9828 8.57667 17.988 8.59016C17.9687 8.63279 17.9601 8.61891 17.9818 8.63797C17.9565 8.64493 17.9229 8.64858 17.9111 8.66533C19.204 9.00714 19.1576 10.7997 17.6939 10.6484C17.0995 10.4949 16.8399 9.85443 17.1331 9.27378C17.1907 9.19669 17.167 9.15954 17.2444 9.07755C17.2905 9.03296 17.2302 9.05058 17.3503 8.9541C17.3851 8.92616 17.4382 8.90183 17.4916 8.85181C17.5523 8.79488 17.6522 8.79757 17.6766 8.76238C17.7282 8.68822 17.7886 8.71218 17.8131 8.6708C17.8323 8.63855 17.8587 8.65583 17.8646 8.64205C17.875 8.61848 17.8929 8.61253 17.9112 8.60139C17.8093 8.52541 17.8465 8.48029 17.7185 8.44155C16.3566 8.18581 15.8251 10.2136 16.8305 10.9662C16.3205 11.2067 15.8237 11.5501 15.5848 12.0808C15.2197 11.0508 14.4226 10.3157 13.388 9.9717C13.9343 9.46357 13.9804 8.55138 13.5048 7.982C13.5204 7.91255 13.5028 7.79677 13.5371 7.78127C13.5784 7.76255 13.5276 7.68191 13.5811 7.56027C13.6022 7.51232 13.7156 7.20608 13.7417 7.1949C14.9214 5.05463 17.6634 6.14134 17.7598 8.37901C17.7662 8.4369 17.801 8.41803 17.8024 8.46435C17.8036 8.50117 17.8076 8.45811 17.8471 8.53525C18.744 7.57674 17.7373 5.89559 16.6272 5.54034C17.7869 4.66266 16.9375 2.64646 15.4897 2.82733C14.1283 2.88099 13.4232 4.84117 14.6417 5.58363C13.8202 5.92866 13.0615 6.81839 13.2514 7.75746C12.8411 7.51875 12.3499 7.60813 12.3668 7.65258C12.3717 7.66554 12.4159 7.65747 12.389 7.69659C12.3722 7.72098 12.3785 7.70663 12.3925 7.72299C12.3679 7.72991 12.3332 7.73456 12.3216 7.75035C12.3823 7.85466 12.5249 7.80613 12.5992 7.87736C13.4116 8.17271 13.5257 9.45282 12.5899 9.70674C11.3583 10.0615 10.9783 8.28162 12.0871 7.84765C12.1347 7.77666 12.1998 7.79614 12.2236 7.75583C12.2417 7.72525 12.2694 7.74075 12.2755 7.72727C12.2859 7.70351 12.3033 7.69775 12.3216 7.68661C12.1323 7.41167 11.7899 7.4985 11.5179 7.57127C11.4899 6.69599 10.8705 5.95904 10.1067 5.57111C11.1618 4.69424 10.5558 2.93499 9.18155 2.86784C7.75988 2.74635 6.90563 4.59272 8.05508 5.51024C6.95454 5.94248 6.20603 7.18414 6.57227 8.34531C5.29964 8.38842 4.7258 9.94079 5.58774 10.8899C3.66265 11.6566 3.46527 13.915 3.96126 15.6493C3.89089 15.6731 3.00774 15.7301 3.29286 15.787C3.25268 15.8349 3.23655 15.8148 3.28619 15.8353C3.24803 15.8404 3.15284 15.8488 3.12467 15.8662C3.33879 15.9863 3.77161 15.9023 3.83799 15.9543C4.06959 16.0155 4.76348 15.8364 4.87316 16.1491C4.85084 17.6194 4.8314 19.7181 4.7894 21.2022C4.81609 21.4576 4.72177 21.5003 4.45518 21.4814C4.11572 21.4876 3.37767 21.4873 3.08535 21.4758C2.94985 21.436 2.96487 21.3191 2.96454 21.2096C2.97121 19.8073 2.97068 18.2532 2.86148 16.8626C2.86523 16.4747 2.68388 15.9563 3.12462 15.8025C1.80836 15.1052 2.39195 20.522 2.25457 21.2861C2.23964 22.3912 3.48875 22.1787 4.22526 22.1664C5.24593 22.2356 5.56052 21.7862 5.45353 20.8038C6.37873 21.0133 7.71932 20.9917 8.68297 21.1744C10.3938 21.3521 12.1237 22.1929 13.8334 21.5273C16.6656 20.4576 18.9151 18.3396 21.322 16.5587C21.7812 16.1422 22.9464 15.5198 22.7338 14.7563Z"
                  fill="#42526E"
                />
              </svg>
              Contractor
            </div>
          </button>
        </div>
        <div className="mt-12">
          {isCustomer ? <Customer /> : <Contractor />}
        </div>
        <div className="absolute top-0 left-[-222px]">
          <img src={ayosPlatformPic} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AyosPlatform;
