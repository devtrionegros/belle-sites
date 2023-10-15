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
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Camping</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          {/* <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
