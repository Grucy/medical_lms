import React from "react";
import HomeIcon from "../icons/HomeIcon";
import LibraryIcon from "../icons/LibraryIcon";
import AnnalesIcon from "../icons/AnnalesIcon";
import PlannerIcon from "../icons/PlannerIcon";
import PlaylistIcon from "../icons/PlaylistIcon";
import ToolboxIcon from "../icons/ToolboxIcon";
import SettingsIcon from "../icons/SettingsIcon";
import SupportIcon from "../icons/SupportIcon";
import { Link, NavLink } from "react-router-dom";
import Search from "./GlobalSearch";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Library", href: "/library/", icon: LibraryIcon },
  { name: "Annales", href: "/annales/", icon: AnnalesIcon },
  { name: "Planner", href: "/planner/", icon: PlannerIcon },
  { name: "Playlists", href: "/playlists/", icon: PlaylistIcon },
  { name: "Toolbox", href: "/toolbox/", icon: ToolboxIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Sidebar() {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
      <div className="flex h-16 shrink-0 items-center">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul className="flex flex-1 flex-col gap-y-7">
          <li>
            <Search />
          </li>
          <li>
            <ul className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      classNames(
                        isActive
                          ? "bg-gray-50 text-primary-600"
                          : "text-gray-700 hover:text-primary-600 hover:bg-gray-50",
                        "group flex gap-x-3 rounded-md p-2 leading-6 font-semibold click-action"
                      )
                    }
                  >
                    <div
                      className="text-inherit group-hover:text-inherit h-6 w-6 shrink-0"
                      aria-hidden="true"
                    >
                      <item.icon />
                    </div>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <div className="text-sm font-semibold leading-6 text-gray-500">
              QUICK ACCESS
            </div>
            <ul className="-mx-2 mt-2 space-y-1">
              <li>
                <Link className="group flex items-center gap-x-3 rounded-md p-2 leading-6 font-semibold hover:text-primary-600 hover:bg-gray-50 border-gray-500 hover:border-primary-600 text-gray-600 click-action">
                  <div className="h-8 w-8 grounded flex justify-center items-center border-2 border-inherit rounded border-dashed text-[22px] pb-[1px]">
                    +
                  </div>
                  Add an item
                </Link>
              </li>
              <li>
                <Link className="group flex items-center gap-x-3 rounded-md p-2 leading-6 font-semibold hover:text-primary-600 hover:bg-gray-50 border-gray-500 hover:border-primary-600 text-gray-600 click-action">
                  <div className="h-8 w-8 grounded flex justify-center items-center border-2 border-inherit rounded border-dashed text-[22px] pb-[1px]">
                    +
                  </div>
                  Add an item
                </Link>
              </li>
              <li>
                <Link className="group flex items-center gap-x-3 rounded-md p-2 leading-6 font-semibold hover:text-primary-600 hover:bg-gray-50 border-gray-500 hover:border-primary-600 text-gray-600 click-action">
                  <div className="h-8 w-8 grounded flex justify-center items-center border-2 border-inherit rounded border-dashed text-[22px] pb-[1px]">
                    +
                  </div>
                  Add an item
                </Link>
              </li>
            </ul>
          </li>
          <li className="mt-auto mb-8">
            <ul className="-mx-2 space-y-1">
              <li>
                <Link className="text-gray-700 hover:text-primary-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 leading-6 font-semibold click-action">
                  <div
                    className="text-gray-500 group-hover:text-primary-600 h-6 w-6 shrink-0"
                    aria-hidden="true"
                  >
                    <SupportIcon />
                  </div>
                  Support
                </Link>
              </li>
              <li>
                <Link className="text-gray-700 hover:text-primary-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 leading-6 font-semibold click-action">
                  <div
                    className="text-gray-500 group-hover:text-primary-600 h-6 w-6 shrink-0"
                    aria-hidden="true"
                  >
                    <SettingsIcon />
                  </div>
                  Settings
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
