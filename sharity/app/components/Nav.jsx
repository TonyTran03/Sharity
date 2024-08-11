'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav(){
    const pathname = usePathname();

    const isNavItemActive = (pathToCheck, actualPath) => {
      return pathToCheck === actualPath;
    };
  

    return(
        <nav className="navbar w-full bg-base-100 flex justify-between items-center">
            
          <div className="flex items-center">

              <a  href="/home" className="btn btn-ghost text-xl ">S H A R I T Y</a>
          </div>

          <ul className="menu menu-horizontal flex items-center">
            <li className="flex-none">
              <Link
                className={isNavItemActive("/map", pathname) ? "active" : ""}
                href="/map"
              >
                Donation Map
              </Link>
            </li>

            <li className="flex-none">
              <Link
                className={isNavItemActive("/donate", pathname) ? "active" : ""}
                href="/donate"
              >
                Donate
              </Link>
            </li>
          </ul>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="oops"
                  src="sharity/public/salvation-army-logo.png" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between" href="/profile">
                  Profile
                </a>
              </li>
              <li><a href="/api/auth/logout">Logout</a></li>
            </ul>
          </div>

    </nav>
    );
}
