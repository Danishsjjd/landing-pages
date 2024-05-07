import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

type Props = {
  children: React.ReactNode;
  items: React.ReactNode[];
};

export default function Dropdown({ children, items }: Props) {
  return (
    <Menu as="div" className="relative z-30 inline-block text-left">
      <Menu.Button className="">{children}</Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="divide-gray-200 bg-bg-main absolute right-0 mt-2 w-56 origin-top-right divide-y rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="bg-gray px-1 py-1">
            {items.map((singleItem, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-caloryCard text-white" : ""
                    } w-full rounded-md px-2 py-2 text-sm`}
                  >
                    {singleItem}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
