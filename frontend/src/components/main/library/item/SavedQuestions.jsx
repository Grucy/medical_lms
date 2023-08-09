import { ArrowDownIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";
import Label from "../../../common/Label";
import Check from "../../../common/Check";
import Pagination from "../../Pagination";

function SavedQuestions() {
  const questions = [
    {
      id: 3066,
      lastAssessed: "Jan 6, 2022",
      playlist: null,
      desc: "",
      lastScore: 4,
    },
    {
      id: 3065,
      lastAssessed: "Jan 6, 2022",
      playlist: null,
      desc: "Épidémiologie",
      lastScore: 10,
    },
    {
      id: 3064,
      lastAssessed: "Jan 6, 2022",
      playlist: null,
      desc: "Prise en charge de la dissection aortique",
      lastScore: 4,
    },
    {
      id: 3063,
      lastAssessed: "Jan 5, 2022",
      playlist: null,
      desc: "",
      lastScore: 20,
    },
    {
      id: 3062,
      lastAssessed: "Jan 5, 2022",
      playlist: 1,
      desc: "",
      lastScore: 20,
    },
    {
      id: 3061,
      lastAssessed: "Jan 4, 2022",
      playlist: null,
      desc: "",
      lastScore: 4,
    },
    {
      id: 3060,
      lastAssessed: "Jan 4, 2022",
      playlist: null,
      desc: "",
      lastScore: 4,
    },
    {
      id: 3059,
      lastAssessed: "Jan 3, 2022",
      playlist: null,
      desc: "Délai ECG SCA",
      lastScore: 4,
    },
    {
      id: 3058,
      lastAssessed: "Jan 3, 2022",
      playlist: null,
      desc: "",
      lastScore: 4,
    },
    {
      id: 3057,
      lastAssessed: "Jan 3, 2022",
      playlist: null,
      desc: "",
      lastScore: 4,
    },
  ];

  return (
    <div>
      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg  divide-y-2 divide-gray-200">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="divide-y divide-gray-200 bg-white">
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 flex items-center gap-2"
              >
                <div>Question ID</div>
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
                Playlist
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Description
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Last score
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Delete</span>
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Test</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {questions.map((item) => (
              <tr key={item.id} className="even:bg-gray-50">
                <td className="whitespace-wrap font-extrabold py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6 flex items-center gap-2">
                  <Check />#{item.id}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {item.lastAssessed}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {item.playlist && <Label>Playlist {item.playlist}</Label>}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {item.desc}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {item.lastScore}/20
                </td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <Link
                    href="#"
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    <TrashIcon className="w-5 h-5 stroke-2"/>
                  </Link>
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

export default SavedQuestions;
