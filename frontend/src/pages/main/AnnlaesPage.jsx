import React, { useEffect, useState } from 'react'
import { BriefcaseIcon, FolderOpenIcon, Square3Stack3DIcon } from '@heroicons/react/24/outline';
import Breadcrumb from '../../components/main/Breadcrumb';
import Tabs from '../../components/main/Tabs';
import All from '../../components/main/annales/All';
import MatOrItems from '../../components/main/annales/MatOrItems';
import Sessions from '../../components/main/annales/Sessions';

function AnnalesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [tabs, setTabs] = useState([
    { name: "All", icon: FolderOpenIcon, current: true },
    { name: "Matière/Items", icon: BriefcaseIcon, current: false },
    { name: "Session", icon: Square3Stack3DIcon, current: false },
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

  const pages = [{ name: "Annales", href: "/annales/", current: true }];

  return (
    <div>
      <div className="-mt-4 mb-6">
        <Breadcrumb pages={pages} />
      </div>
      <div className="flex justify-between">
        <div className="text-3xl font-bold">Annales</div>
      </div>
      <Tabs tabs={tabs} setCurrentTab={setCurrentTab} />

      <div
        className="-mx-4 sm:-mx-6 lg:-mx-8 -mb-8 px-4 sm:px-6 lg:px-8 py-8 bg-gray-50"
      >
        {tabs.find((tab) => tab.current).name === "All" && (<All />)}
        {tabs.find((tab) => tab.current).name === "Matière/Items" && (<MatOrItems />)}
        {tabs.find((tab) => tab.current).name === "Session" && (<Sessions />)}      
      </div>
    </div>
  );
}

export default AnnalesPage;