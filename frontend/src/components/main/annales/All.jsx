import { ArrowDownIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";
import Label from "../../common/Label";
import Check from "../../common/Check";
import Pagination from "../Pagination";
import Search from "../Search";
import Filter from "../Filter";

function All() {
  const dps = [
    {
      id: 3066,
      title: "DP 1",
      lastAssessed: "Jan 6, 2022",
      item: "",
      matiere: "",
      lastScore: 4,
    },
    {
      id: 3065,
      title: "DP 2",
      lastAssessed: "",
      item: "",
      matiere: "Cardiologie, Pneumologie, Néphrologie",
      lastScore: null,
    },
    {
      id: 3064,
      title: "DP 3",
      lastAssessed: "",
      item: "",
      matiere: "Cardiologie, Pneumologie, Néphrologie",
      lastScore: null,
    },
    {
      id: 3063,
      title: "DP 4",
      lastAssessed: "Jan 5, 2022",
      item: "",
      matiere: "",
      lastScore: 20,
    },
    {
      id: 3062,
      title: "DP 5",
      lastAssessed: "Jan 5, 2022",
      item: "154. Dissection Aortique",
      matiere: "",
      lastScore: 20,
    },
    {
      id: 3061,
      title: "DP 6",
      lastAssessed: "Jan 4, 2022",
      item: "",
      matiere: "",
      lastScore: 4,
    },
    {
      id: 3060,
      title: "LCA 1",
      lastAssessed: "",
      item: "",
      matiere: "",
      lastScore: null,
    },
    {
      id: 3059,
      title: "LCA 2",
      lastAssessed: "",
      item: "",
      matiere: "",
      lastScore: null,
    },
    {
      id: 3058,
      title: "DP 7",
      lastAssessed: "Jan 3, 2022",
      item: "",
      matiere: "",
      lastScore: 4,
    },
    {
      id: 3057,
      title: "DP 8",
      lastAssessed: "Jan 3, 2022",
      item: "",
      matiere: "",
      lastScore: 4,
    },
  ];

  return (
    <div>
      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg  divide-y-2 divide-gray-200">
        <div className="p-4 bg-white flex justify-between">
          <Search />
          <Filter />
        </div>
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="divide-y divide-gray-200 bg-white">
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 flex items-center gap-2"
              >
                <div>Invoice</div>
                <ArrowDownIcon className="w-4 h-4" />
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Last Assessed
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Item
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Matières
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Last score
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Test</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {dps.map((dp) => (
              <tr key={dp.id} className="even:bg-gray-50">
                <td className="whitespace-wrap font-extrabold py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6 flex items-center gap-2">
                  <Check />
                  {dp.title}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {dp.lastAssessed}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {dp.item && <Label>{dp.item}</Label>}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {dp.matiere}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {dp.lastScore && `${dp.lastScore}/20`}
                </td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <Link
                    to="/quiz"
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    <PencilSquareIcon className="w-5 h-5 stroke-2" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination />
      </div>
    </div>
  );
}

export default All;
