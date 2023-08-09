import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tabs from "../../Tabs";
import Breadcrumb from "../../Breadcrumb";
import {
  ClipboardIcon,
  PaperClipIcon,
  ViewColumnsIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import Overview from "./Overview";
import SavedQuestions from "./SavedQuestions";
import Cards from "./Cards";
import Toolbox from "./Toolbox";

const Item = () => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [tabs, setTabs] = useState([
    { name: "Overview", icon: ViewColumnsIcon, current: true },
    { name: "Saved questions", icon: PaperClipIcon, current: false },
    { name: "Cards", icon: ClipboardIcon, current: false },
    { name: "Toolbox", icon: WrenchScrewdriverIcon, current: false },
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

  const pages = [{ name: "Library", href: "/library/", current: false },{ name: "230. Douleur thoracique aiguë", href: "#", current: true }];
  return (
    <div>
      <div className="-mt-4 mb-6">
        <Breadcrumb pages={pages} />
      </div>
      <div className="flex justify-between">
        <div className="text-3xl font-bold">Library</div>
      </div>
      <Tabs tabs={tabs} setCurrentTab={setCurrentTab} />

      <div
        className="-mx-4 sm:-mx-6 lg:-mx-8 -mb-8 px-4 sm:px-6 lg:px-8 py-8 bg-gray-50"
      >
        {tabs.find((tab) => tab.current).name === "Overview" && (<Overview />)}
        {tabs.find((tab) => tab.current).name === "Saved questions" && (<SavedQuestions />)}
        {tabs.find((tab) => tab.current).name === "Cards" && (<Cards />)}
        {tabs.find((tab) => tab.current).name === "Toolbox" && (<Toolbox />)}
      </div>
    </div>
  );
}

export default Item;
