export default function Divider() {
  return (
    <div className="flex flex-col w-full border-opacity-50 mb-0">
      <div className="grid h-[75vh] card bg-base-300  place-items-center">
        <div className="w-[75%]">
          <h1
            className="text-center sm:text-[2rem]"
            style={{ fontFamily: "Goudy Old Style , Grotesk, sans-serif ", fontSize: "3rem" }}
          >
            Welcome to Belle's Luxe Picnics
          </h1>
          <p className="text-center">
            <em>Crafting Moments, Cherishing Memories</em>
          </p>
          <br />
          <p style={{ fontFamily: "  'Grotesk', 'sans-serif' " }} className="sm:text-[12px] ">
            Belle's Luxe Picnics brings you a world of upscale pop-up picnics where you can devote your attention to
            what truly matters - crafting unforgettable memories with your cherished ones. Be it a birthday celebration,
            engagement, anniversary, or any significant moment, we're here to make your day as exceptional as you are.
            For an exceptional and enduring experience, reserve your Belle's Luxe Picnic today.
          </p>
        </div>
      </div>
      {/* <div className="grid h-20 card bg-base-300 rounded-box place-items-center">tester</div> */}
    </div>
  );
}

/*
<div className="flex flex-col w-full border-opacity-50">
  <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
  <div className="divider">OR</div>
  <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
</div>

 font-family: 'Grotesk', sans-serif;

*/
