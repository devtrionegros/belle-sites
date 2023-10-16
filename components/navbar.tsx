import Image from "next/image";

export default function Navbar() {
  return (
    // <div className="drawer">
    //   <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
    //   <div className="drawer-content flex flex-col">
    //     {/* Navbar */}
    //     <div className="w-full navbar bg-base-300">
    //       <div className="flex-none lg:hidden">
    //         <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             className="inline-block w-6 h-6 stroke-current"
    //           >
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
    //           </svg>
    //         </label>
    //       </div>
    //       <div className="flex-1 px-2 mx-2">
    //         <Image
    //           className="h-auto w-[12rem]"
    //           src="/logo.png"
    //           alt="Logo"
    //           height={100}
    //           width={100}
    //           priority
    //           unoptimized={true}
    //         />
    //       </div>
    //       <div className="flex-none hidden lg:block">
    //         <ul className="menu menu-horizontal">
    //           {/* Navbar menu content here */}
    //           <li>
    //             <a>Home</a>
    //           </li>
    //           <li>
    //             <a>Camping</a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //     {/* Page content here */}
    //   </div>
    //   <div className="drawer-side">
    //     <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
    //     <ul className="menu p-4 w-80 min-h-full bg-base-200">
    //       {/* Sidebar content here */}
    //       <li>
    //         <a>Home</a>
    //       </li>
    //       <li>
    //         <a>Camping</a>
    //       </li>
    //     </ul>
    //   </div>
    // </div>

    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          <Image
            className="h-auto w-[12rem]"
            src="/logo.png"
            alt="Logo"
            height={100}
            width={100}
            priority
            unoptimized={true}
          />
        </a>
      </div>
      <div className="flex-none hidden md:block lg:block">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Homepage</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end md:hidden">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-[7rem] right-[2%]"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
