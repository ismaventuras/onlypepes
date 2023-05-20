'use client'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function NavigationMenu() {

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md text-green-100  px-3 py-2 text-sm font-semibold  shadow-sm ring-1 ring-inset ring-green-300 hover:bg-green-800">
          Menu
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className={'absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-green-900 shadow-lg ring-1 ring-green-300 ring-opacity-5 focus:outline-none'}>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/pepes"
                  className={classNames(
                    active ? 'bg-green-800 text-slate-100' : 'text-slate-300',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Pepes
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
