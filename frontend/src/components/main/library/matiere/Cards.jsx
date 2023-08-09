import React, { useState } from "react";
import Search from "../../Search";
import Filter from "../../Filter";
import SlideShow from "./SlideShow";

function Cards() {
  const [open, setOpen] = useState(false);
  const cards = [
    {
      title: "Dissection aortique",
      desc: "Description d’une des causes majeures de douleur thoracique aiguë.",
      categories: [
        { id: 230, title: "Douleur thoracique aiguë" },
        { id: 150, title: "Pneumothorax" },
      ],
    },
    {
      title: "Angor fonctionnel",
      desc: "Causes d’angor fonctionnel.",
      categories: [
        { id: 230, title: "Douleur thoracique aiguë" },
        { id: 339, title: "SCA" },
      ],
    },
    {
      title: "Angor fonctionnel",
      desc: "Causes d’angor fonctionnel.",
      categories: [
        { id: 230, title: "Douleur thoracique aiguë" },
        { id: 339, title: "SCA" },
      ],
    },
    {
      title: "Dissection aortique",
      desc: "Description d’une des causes majeures de douleur thoracique aiguë.",
      categories: [
        { id: 230, title: "Douleur thoracique aiguë" },
        { id: 150, title: "Pneumothorax" },
      ],
    },
    {
      title: "Angor fonctionnel",
      desc: "Causes d’angor fonctionnel.",
      categories: [
        { id: 230, title: "Douleur thoracique aiguë" },
        { id: 339, title: "SCA" },
      ],
    },
    {
      title: "Angor fonctionnel",
      desc: "Causes d’angor fonctionnel.",
      categories: [
        { id: 230, title: "Douleur thoracique aiguë" },
        { id: 339, title: "SCA" },
      ],
    },
    {
      title: "Dissection aortique",
      desc: "Description d’une des causes majeures de douleur thoracique aiguë.",
      categories: [
        { id: 230, title: "Douleur thoracique aiguë" },
        { id: 150, title: "Pneumothorax" },
      ],
    },
    {
      title: "Angor fonctionnel",
      desc: "Causes d’angor fonctionnel.",
      categories: [
        { id: 230, title: "Douleur thoracique aiguë" },
        { id: 339, title: "SCA" },
      ],
    },
    {
      title: "Angor fonctionnel",
      desc: "Causes d’angor fonctionnel.",
      categories: [
        { id: 230, title: "Douleur thoracique aiguë" },
        { id: 339, title: "SCA" },
      ],
    },
    {
      title: "Dissection aortique",
      desc: "Description d’une des causes majeures de douleur thoracique aiguë.",
      categories: [
        { id: 230, title: "Douleur thoracique aiguë" },
        { id: 150, title: "Pneumothorax" },
      ],
    },
    {
      title: "Angor fonctionnel",
      desc: "Causes d’angor fonctionnel.",
      categories: [
        { id: 230, title: "Douleur thoracique aiguë" },
        { id: 339, title: "SCA" },
      ],
    },
    {
      title: "Angor fonctionnel",
      desc: "Causes d’angor fonctionnel.",
      categories: [
        { id: 230, title: "Douleur thoracique aiguë" },
        { id: 339, title: "SCA" },
      ],
    },
  ];
  return (
    <>
      <div className="p-4 flex justify-between">
        <Search />
        <Filter />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {cards.map((card) => (
          <div className="group border-2 rounded-lg min-h-[200px] bg-white p-6 hover:shadow-lg hover:shadow-gray-300 click-action">
            <div className="group-hover:hidden flex flex-col h-full">
              <div className="py-2 text-2xl font-extrabold">{card.title}</div>
              <div className="flex-1">{card.desc}</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {card.categories.map((category) => (
                  <div className="px-2 border border-gray-400 rounded-md text-[12px]">
                    {category.id}. {category.title}
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden group-hover:flex items-center justify-center h-full">
              <div
                onClick={() => setOpen(true)}
                className="px-4 py-2 text-gray-500 font-bold border-2 border-gray-200 rounded-md  hover:cursor-pointer hover:shadow-md"
              >
                open
              </div>
            </div>
          </div>
        ))}
      </div>
      <SlideShow open={open} setOpen={setOpen} />
    </>
  );
}

export default Cards;
