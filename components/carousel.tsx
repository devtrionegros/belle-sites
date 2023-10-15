import Image from "next/image";

export default function Carousel() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="carousel carousel-center rounded-box">
        <div className="carousel-item">
          <Image className="" src="/img1.jpg" alt="Logo" height={100} width={100} priority unoptimized={true} />
        </div>
        <div className="carousel-item">
          <Image
            className="h-auto w-[12rem]"
            src="/img2.jpg"
            alt="Logo"
            height={500}
            width={500}
            priority
            unoptimized={true}
          />
        </div>
        <div className="carousel-item">
          <Image
            className="h-auto w-[12rem]"
            src="/img3.jpg"
            alt="Logo"
            height={100}
            width={100}
            priority
            unoptimized={true}
          />
        </div>
      </div>
    </div>
  );
}

/*




        <Image
          className="h-auto w-[12rem]"
          src="/img3.jpg"
          alt="Logo"
          height={100}
          width={100}
          priority
          unoptimized={true}
        />
*/
