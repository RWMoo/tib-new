import React, {Fragment, useState} from "react";
import {Listbox, Transition} from "@headlessui/react";
import {CheckIcon, SelectorIcon} from "@heroicons/react/solid";

const products = [
  "Business Insurance",
  "Management Liability",
  "Workers Compensation",
  "Professional Indemnity",
  "Hard To Place Risks",
  "Commercial Motor",
  "Trade Insurance",
  "Public Liability",
  "Heavy Motor & Mobile Plant",
  "Building Construction",
  "Farm Rural Packages",
  "Home Contents",
  "Motor Vehicle",
  "Other",
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Select = ({ values, setFieldValue }) => {
  const [selected, setSelected] = useState(values.product);
  return (
    <div>
      <Listbox
        value={selected}
        onChange={(value) => {
          setSelected(value);
          setFieldValue("product", value);
        }}
      >
        {({ open }) => (
          <>
            <label className={"hidden"}>Product</label>
            <Listbox.Label className="block text-sm font-medium text-gray-700">
              Product
            </Listbox.Label>
            <div className="mt-1 relative">
              <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 py-3 pr-10 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-base">
                <span className="block truncate">{selected}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  {products.map((person) => (
                    <Listbox.Option
                      key={person}
                      className={({ active }) =>
                        classNames(
                          active ? "text-white bg-indigo-600" : "text-gray-900",
                          "cursor-default select-none relative py-2 pl-8 pr-4"
                        )
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "block truncate"
                            )}
                          >
                            {person}
                          </span>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-indigo-600",
                                "absolute inset-y-0 left-0 flex items-center pl-1.5"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default Select;
