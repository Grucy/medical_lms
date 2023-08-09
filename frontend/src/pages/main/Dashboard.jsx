import React from "react";
import TrandingItem from "../../components/main/dashboard/TrendingItem";
import QuickAccess from "../../components/main/dashboard/QuickAccess";
import RecentItem from "../../components/main/dashboard/RecentItem";
import Calendar from "../../components/main/Calendar";

function Dashboard() {
  return (
    <div className="inset-0 p-4">
      <div className="grid sm:grid-cols-2 gap-8">
        {/* cards */}
        <div className="rounded-lg bg-gray-100 min-h-80 p-8 grid lg:grid-cols-2 click-action hover:cursor-pointer shadow-lg hover:shadow-primary-300">
          <div className="lg:-mr-10">
            <div className="px-2 font-bold text-gray-400">MASTERCLASS</div>
            <div className="p-2 font-bold text-3xl">
              Journée mondiale <br />
              de la Tuberculose
            </div>
            <div className="px-2 text-gray-400">
              Découvre nos DPs et <br />
              maîtrise un incontournable <br />
              des EDN.
            </div>
          </div>
          <div className="lg:ml-8 flex flex-col items-center justify-end">
            <img
              className="rounded-full w-full max-w-[250px]"
              src="/assets/image/card1.png"
              alt="Journée mondiale de la Tuberculose"
            />
          </div>
        </div>
        <div className="rounded-lg bg-gray-100 min-h-80 p-8 click-action hover:cursor-pointer shadow-lg hover:shadow-primary-300">
          <div className="px-2 font-bold text-gray-400">PHARMACOLOGIE</div>
          <div className="p-2 font-bold text-3xl">Méthotrexate</div>
          <div className="px-2 text-gray-400">
            Une compilation transversale pour <br />
            comprendre l’usage de ce traitement.
          </div>
          <div className="flex justify-center">
            <img
              className="-mt-6 -mb-10 center"
              src="/assets/image/card2.png"
              alt="Une compilation transversale pour comprendre l’usage de ce traitement."
            />
          </div>
        </div>
      </div>
      <div className="mt-8 mb-2 font-bold text-xl text-gray-600">
        Quick access
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        <QuickAccess />
        <QuickAccess />
        <QuickAccess />
        <QuickAccess />
      </div>
      <div className="grid sm:h-[520px] sm:grid-cols-2">
        <div>
          <div className="mt-8 mb-2 font-bold text-xl text-gray-600">
            Recently viewed
          </div>
          <div className="flex flex-col gap-1">
            <RecentItem>188. Endocardite infectieuse</RecentItem>
            <RecentItem>336. Méningites virales</RecentItem>
            <RecentItem>188. Endocardite infectieuse</RecentItem>
            <RecentItem>336. Méningites virales</RecentItem>
            <RecentItem>188. Endocardite infectieuse</RecentItem>
            <RecentItem>336. Méningites virales</RecentItem>
            <RecentItem>188. Endocardite infectieuse</RecentItem>
            <RecentItem>336. Méningites virales</RecentItem>
            <RecentItem>188. Endocardite infectieuse</RecentItem>
            <RecentItem>336. Méningites virales</RecentItem>
          </div>
        </div>
        <div className="mt-8 mb-2 h-[500px] flex flex-col">
          <div className="font-bold text-xl text-gray-600">Your day plan</div>
          <div className="h-[480px]">
            <Calendar />
          </div>
        </div>
      </div>
      <div>
        <div className="mt-8 mb-2 font-bold text-xl text-gray-600">
          Trending items
        </div>
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          <TrandingItem>Tuberculose</TrandingItem>
          <TrandingItem>Coqueluche</TrandingItem>
          <TrandingItem>Méningites infectieuse</TrandingItem>
          <TrandingItem>Tuberculose</TrandingItem>
          <TrandingItem>Tuberculose</TrandingItem>
          <TrandingItem>Tuberculose</TrandingItem>
          <TrandingItem>Tuberculose</TrandingItem>
          <TrandingItem>Tuberculose</TrandingItem>
          <TrandingItem>Tuberculose</TrandingItem>
          <TrandingItem>Tuberculose</TrandingItem>
        </div>
      </div>
      <div>
        <div className="mt-8 mb-2 font-bold text-xl text-gray-600">Library</div>
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          <RecentItem>188. Endocardite infectieuse</RecentItem>
          <RecentItem>336. Méningites virales</RecentItem>
          <RecentItem>336. Méningites virales</RecentItem>
          <RecentItem>188. Endocardite infectieuse</RecentItem>
          <RecentItem>336. Méningites virales</RecentItem>
          <RecentItem>188. Endocardite infectieuse</RecentItem>
          <RecentItem>336. Méningites virales</RecentItem>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
