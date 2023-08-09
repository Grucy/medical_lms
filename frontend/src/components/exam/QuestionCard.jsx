import React, { useEffect } from "react";

import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";

import { useState } from "react";
import Label from "../common/Label";
import Choice from "./Choice";
import Speedometer from "../icons/Speedometer";
import ShareIcon from "../icons/ShareIcon";
import Heart from "../icons/Heart";
import InfoIcon from "../icons/InfoIcon";
import InfoCircle from "../icons/InfoCircle";

import ShareLinkModal from "./ShareLinkModal";
import SlidePlaylist from "./SlidePlaylist";
import NotiStat from "./NotiStat";
import SlideConcept from "./SlideConcept";
import NotiRef from "./NotiRef";
import SlideReport from "./SlideReport";

function QuestionCard({ question, index, next }) {
  const [discordance, setDiscordance] = useState(null);
  useEffect(() => {
    if (question.result) {
      const correctItems = question.result.choices.filter(
        ({ correctAnswer, yourAnswer }) => correctAnswer !== yourAnswer
      );
      setDiscordance(correctItems.length);
    }
  }, [question]);

  var bgColor, borderColor, textColor;
  if (!question.result) {
    borderColor = "border-gray-300";
    textColor = "text-gray-800";
    bgColor = "bg-white";
  } else if (discordance === 0) {
    borderColor = "border-green-dark";
    textColor = "text-green-dark";
    bgColor = "bg-green-bg";
  } else if (discordance < 3) {
    borderColor = "border-orange-dark";
    textColor = "text-orange-dark";
    bgColor = "bg-orange-bg";
  } else {
    borderColor = "border-red-dark";
    textColor = "text-red-dark";
    bgColor = "bg-red-bg";
  }

  const [showShareLinkModal, openShareLinkModal] = useState(false);
  const [showPlaylistSlide, openPlaylistSlide] = useState(false);
  const [showStatisticNoti, openStatisticNoti] = useState(false);
  const [showConceptSlide, openConceptSlide] = useState(false);
  const [showReportSlide, openReportSlide] = useState(false);
  const [showRefNoti, openRefNoti] = useState(false);

  return (
    <>
      <div className="bg-white h-screen py-16 px-4 md:px-16 flex justify-center items-center">
        <div className="lg:w-5/6 h-full flex flex-col overflow-hidden shadow-lg shadow-gray-700 rounded-xl">
          <div
            className={`border-2 ${borderColor} ${bgColor} ${textColor} rounded-t-xl px-12 py-3 flex justify-between`}
          >
            <Label colorInherit>
              Question {index}
              <span className="rounded bg-blue-light text-white ml-2 my-1 px-1 text-xs text-center">
                {question.level}
              </span>
            </Label>
            {question.result && `${question.result.score}/${question.weight}`}
          </div>
          <div className="flex-1 overflow-auto border-x-2 border-gray-300">
            <div className="px-12 py-6">{question.content}</div>
            {question.choices.map((item, index) => (
              <Choice
                key={`${question._id}_${index}`}
                label={String.fromCharCode("A".charCodeAt(0) + index)}
                content={item}
                checked={question.result?.choices[index].yourAnswer}
                isRight={
                  question.result?.choices[index].yourAnswer ===
                  question.result?.choices[index].correctAnswer
                }
                desc={question.result?.choices[index].desc}
              />
            ))}

            {question.result && (
              <>
                <div className="flex gap-2 items-center">
                  <div
                    className="my-6 block h-px w-full bg-gray-200"
                    aria-hidden="true"
                  />
                  <div className="text-center">COMMENTAIRE</div>
                  <div
                    className="my-6 block h-px w-full bg-gray-200"
                    aria-hidden="true"
                  />
                </div>
                <div className="px-8">
                  <div className="px-6 bg-gray-100 rounded-lg p-2">
                    <p>
                      Les questions d’anatomie deviennent assez fréquentes sur
                      les dernières éditions des ECNi.
                    </p>
                    <p>
                      Veillez à bien maîtriser les différentes causes
                      traumatiques de paralysie des nerfs crâniens.
                    </p>
                  </div>
                  <div className="mt-2 flex gap-2 flex-wrap">
                    <Label
                      onClick={() => {
                        openConceptSlide(true);
                      }}
                    >
                      Les nerfs crâniens
                      <ArrowSmallRightIcon className="w-4 h-4" />
                    </Label>
                    <Label
                      onClick={() => {
                        openConceptSlide(true);
                      }}
                    >
                      Méningites virales
                      <ArrowSmallRightIcon className="w-4 h-4" />
                    </Label>
                    <Label
                      onClick={() => {
                        openConceptSlide(true);
                      }}
                    >
                      Syndrome anticholinergique
                      <ArrowSmallRightIcon className="w-4 h-4" />
                    </Label>
                    <Label
                      onClick={() => {
                        openConceptSlide(true);
                      }}
                    >
                      Diphtérie
                      <ArrowSmallRightIcon className="w-4 h-4" />
                    </Label>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="border-2 border-t-0 border-gray-300 rounded-b-xl p-12 pt-3 flex flex-wrap justify-between">
            <div className="flex items-center gap-3">
              <div
                className="hover:cursor-pointer hover:text-blue-500"
                onClick={() => {
                  openShareLinkModal(true);
                }}
              >
                <ShareIcon />
              </div>
              <div
                className="hover:cursor-pointer hover:text-blue-500"
                onClick={() => {
                  openPlaylistSlide(true);
                }}
              >
                <Heart />
              </div>
              <div
                onClick={() => {
                  openStatisticNoti(true);
                }}
                className="hover:cursor-pointer hover:text-blue-500"
              >
                <Speedometer />
              </div>
              <div
                onClick={() => {
                  openReportSlide(true);
                }}
                className="hover:cursor-pointer hover:text-blue-500"
              >
                <InfoIcon />
              </div>
              <div
                onClick={() => {
                  openRefNoti(true);
                }}
                className="hover:cursor-pointer hover:text-blue-500"
              >
                <InfoCircle />
              </div>
            </div>
            <button
              onClick={question.result ? next : () => {}}
              className="px-8 py-4 text-lg bg-primary-600 rounded-lg text-white border-transparent border-2 hover:border-sky-500 hover:bg-primary-600"
            >
              {question.result ? "Suivant" : "Soumettre"}
            </button>
          </div>
        </div>
      </div>

      <ShareLinkModal open={showShareLinkModal} setOpen={openShareLinkModal} />
      <SlidePlaylist open={showPlaylistSlide} setOpen={openPlaylistSlide} />
      <NotiStat show={showStatisticNoti} setShow={openStatisticNoti} />
      <SlideConcept open={showConceptSlide} setOpen={openConceptSlide} />
      <NotiRef show={showRefNoti} setShow={openRefNoti} />
      <SlideReport open={showReportSlide} setOpen={openReportSlide} />
    </>
  );
}

export default QuestionCard;
