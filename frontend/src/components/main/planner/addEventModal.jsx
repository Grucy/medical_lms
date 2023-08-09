import { format } from "date-fns";
import Modal from "../../common/Modal";

export default function AddEventModal({ open, setOpen }) {
  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="bg-white rounded-xl p-8 border-2 border-gray-400 mt-40">
        <fieldset>
          <legend className="block text-sm font-medium leading-6 text-gray-900">
            Date and Time
          </legend>
          <div className="mt-2 -space-y-px rounded-md bg-white shadow-sm">
            <div>
              <label htmlFor="card-number" className="sr-only">
                date
              </label>
              <input
                type="text"
                name="card-number"
                id="card-number"
                className="relative block w-full rounded-none rounded-t-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder={format(Date.now(), "yyyy-MM-dd")}
              />
            </div>
            <div className="flex -space-x-px">
              <div className="w-1/2 min-w-0 flex-1">
                <label htmlFor="card-expiration-date" className="sr-only">
                  from
                </label>
                <input
                  type="text"
                  name="card-expiration-date"
                  id="card-expiration-date"
                  className="relative block w-full rounded-none rounded-bl-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder={format(Date.now(), "HH:00")}
                />
              </div>
              <div className="min-w-0 flex-1">
                <label htmlFor="card-cvc" className="sr-only">
                  to
                </label>
                <input
                  type="text"
                  name="card-cvc"
                  id="card-cvc"
                  className="relative block w-full rounded-none rounded-br-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder={format(Date.now() + 60 * 60 * 1000, "HH:00")}
                />
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset className="mt-6 bg-white">
          <legend className="block text-sm font-medium leading-6 text-gray-900">
            What are you planning to do?
          </legend>
          <div className="mt-2 -space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="country" className="sr-only">
                type
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="relative block w-full rounded-none rounded-t-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option>Matiere</option>
                <option>Item</option>
              </select>
            </div>
            <div>
              <label htmlFor="postal-code" className="sr-only">
                titel
              </label>
              <input
                type="text"
                name="postal-code"
                id="postal-code"
                autoComplete="postal-code"
                className="relative block w-full rounded-none rounded-b-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Cardiologie"
              />
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                setOpen(false);
              }}
              type="submit"
              className="flex mt-8 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add
            </button>
          </div>
        </fieldset>
      </div>
    </Modal>
  );
}
