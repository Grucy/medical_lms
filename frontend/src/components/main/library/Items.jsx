import { Link } from "react-router-dom";
import { ProgressBar } from "../../common/ProgressBar";
import Pagination from "../Pagination";
import Search from "../Search";
import Filter from "../Filter";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

const items = [
  {
    title: "152. Endocardite infectieuse",
    status: "Fait",
    questions: "24 questions",
    progressRate: 60,
  },
  {
    title: "153. Surveillance des porteurs de prothèses valvulaires",
    status: "Fait",
    questions: "24 questions",
    progressRate: 60,
  },
  {
    title: "230. Douleur thoracique aiguë",
    status: "Fait",
    questions: "24 questions",
    progressRate: 60,
  },
  {
    title: "231. Électrocardiogramme : indications et interprétations",
    status: "Fait",
    questions: "24 questions",
    progressRate: 60,
  },
  {
    title: "232. Fibrillation atriale",
    status: "Fait",
    questions: "24 questions",
    progressRate: 60,
  },
  {
    title: "233. Valvulopathies",
    status: "Fait",
    questions: "24 questions",
    progressRate: 60,
  },
  {
    title: "234. Insuffisance cardiaque",
    status: "Fait",
    questions: "24 questions",
    progressRate: 60,
  },
];

export default function Items() {
  return (
    <div className="-mx-4 sm:-mx-6 lg:-mx-8 -mb-8 px-4 sm:px-6 lg:px-8 py-8 bg-gray-50">
      <div className="inline-block min-w-full py-2 align-middle">
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg  divide-y-2 divide-gray-200">
          <div className="p-6 bg-white text-xl font-extrabold">
            Liste des items
          </div>
          <div className="p-4 bg-white flex justify-between">
            <Search />
            <Filter />
          </div>
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="divide-y divide-gray-200 bg-white">
              <tr>
                <th
                  scope="col"
                  className="w-1/3 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Number of questions
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Progress rate
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {items.map((item, index) => (
                <tr key={item.title} >
                  <td className="whitespace-wrap font-extrabold py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6 hover:text-primary-600 hover:cursor-pointer click-action">
                    <Link to={`/library/item/${index}`}>{item.title}</Link>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div className="w-fit h-fit rounded-full border-2 border-success-200 bg-success-50 text-success-700 px-2 py-0.5">                      {item.status}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {item.questions}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <ProgressBar progressPercentage={item.progressRate} />
                  </td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <Link
                      to="/quiz"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      <PencilSquareIcon className="w-5 h-5 stroke-2"/>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        <Pagination />
        </div>
      </div>
    </div>
  );
}
