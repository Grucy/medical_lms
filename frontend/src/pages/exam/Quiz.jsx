import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Sidebar from "../../components/exam/Sidebar";
import QuestionCard from "../../components/exam/QuestionCard";
import { useQuiz } from "../../hooks/useQuiz";

export default function Quiz() {
  const { questions } = useQuiz();
  const [currentQuestion, setQuestion] = useState(0);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex flex-row-reverse">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute right-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="w-full bg-[#53389E] h-screen">
                    <Sidebar
                      currentQuestion={currentQuestion}
                      setQuestion={setQuestion}
                      questions={questions}
                      closeSideBar={() => setSidebarOpen(false)}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden bg-[#53389E] lg:absolute lg:right-0 lg:inset-y-0 lg:z-2 lg:flex lg:w-72 lg:flex-col">
          <Sidebar
            currentQuestion={currentQuestion}
            setQuestion={setQuestion}
            questions={questions}
          />
        </div>
        <button
          type="button"
          className="absolute top-5 right-7 rounded-lg bg-primary-600 opacity-50 hover:opacity-100 text-white -m-2.5 p-2.5 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="lg:pr-72">
          <QuestionCard
            question={questions[currentQuestion]}
            index={currentQuestion + 1}
            next={() => {
              setQuestion((state) =>
                state + 1 < questions.length ? state + 1 : state
              );
            }}
          />
        </div>
      </div>
    </>
  );
}
