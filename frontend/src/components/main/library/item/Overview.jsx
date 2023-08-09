import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import React from "react";
import PieChart from "../../PieChart";
import Pagination from "../../Pagination";

function Overview() {
  const questions = [
    {
      title: "Connaître la définition d’une douleur thoracique aiguë",
      rank: "Rang A",
    },
    {
      title:
        "Savoir rechercher une détresse vitale devant une douleur thoracique",
      rank: "Rang A",
    },
    {
      title:
        "Identifier les signes de gravité imposant des décisions thérapeutiques immédiates",
      rank: "Rang B",
    },
    {
      title:
        "Savoir évoquer les quatre urgences cardio-vasculaires devant une douleur thoracique",
      rank: "Rang A",
    },
    {
      title:
        "Connaître la sémiologie clinique fonctionnelle et physique de la dissection aortiuqe",
      rank: "Rang A",
    },
    {
      title:
        "Connaître la démarche diagnostique des quatre urgences cardio-vasculaires",
      rank: "Rang B",
    },
    {
      title:
        "Connaître la place et les anomalies de la radiographie thorax des quatre urgences cardio-vasculaires",
      rank: "Rang B",
    },
  ];

  return (
    <>
      <div className="inline-block min-w-full py-2 align-middle">
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg  divide-y-2 divide-gray-200">
          <div className="p-6 bg-white text-xl font-extrabold">
            Liste des objectifs
          </div>
          <table className="min-w-full divide-y divide-gray-300">
            <tbody className="divide-y divide-gray-200 bg-white">
              {questions.map((question, idx) => (
                <tr key={idx}>
                  <td className="whitespace-wrap font-extrabold py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">
                    {question.title}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {question.rank}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination />
        </div>
      </div>
      <div className="mt-8 grid md:grid-cols-2 gap-8 bg-gray-50">
        {/* statistics card */}
        <div className="rounded-2xl bg-white p-6 relative">
          <div className="absolute top-4 right-4 text-gray-500 hover:cursor-pointer group-hover:text-primary-600">
            <EllipsisVerticalIcon className="w-6 h-6" />
          </div>
          <div>
            <PieChart
              color={["#7F56D9", "#9E77ED", "#B692F6", "#D6BBFB", "#EAECF0"]}
            />
          </div>
          <div className="py-4">How you answer?</div>
          <div className="text-green-500 text-4xl font-extrabold">
            60% success
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 relative">
          <div className="absolute top-4 right-4 text-gray-500 hover:cursor-pointer group-hover:text-primary-600">
            <EllipsisVerticalIcon className="w-6 h-6" />
          </div>
          <div>
            <PieChart
              color={["#475467", "#667085", "#98A2B3", "#D0D5DD", "#F2F4F7"]}
            />
          </div>
          <div className="py-4">Progress rate</div>
          <div className="text-green-500 text-4xl font-extrabold">60% done</div>
        </div>
      </div>
    </>
  );
}

export default Overview;
