import React, { useEffect, useState } from "react";
import Tabs from "../../components/main/Tabs";
import Matieres from "../../components/main/library/Matieres";
import Breadcrumb from "../../components/main/Breadcrumb";
import Items from "../../components/main/library/Items";
import { BriefcaseIcon, FolderIcon } from "@heroicons/react/24/outline";

function LibraryPage() {
  const [tabs, setTabs] = useState([
    { name: "Matières", icon: BriefcaseIcon, current: true },
    { name: "Items", icon: FolderIcon, current: false },
  ]);

  const setCurrentTab = (selectedTab) => {
    console.log(selectedTab);
    setTabs(
      tabs.map((tab) => {
        if (selectedTab === tab.name) tab.current = true;
        else tab.current = false;
        return tab;
      })
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pages = [
    { name: 'Library', href: '/library/', current: true },
  ]
  
  return (
    <div>
      <div className="-mt-4 mb-6">
        <Breadcrumb pages={pages}/>
      </div>
      <div className="flex justify-between">
        <div className="text-3xl font-bold">Library</div>
        <div className="flex gap-4 -my-2">
          <div className="text-xl text-primary-600">
            36 <div className="text-sm text-gray-500">Matières disponibles</div>
          </div>
          <div className="text-xl text-primary-600">
            365 <div className="text-sm text-gray-500">items disponibles</div>
          </div>
        </div>
      </div>
      <Tabs tabs={tabs} setCurrentTab={setCurrentTab} />
      {tabs.find((tab) => tab.current).name === "Matières" ? (
        <Matieres />
      ) : (
       <Items />
      )}
    </div>
  );
}

export default LibraryPage;
