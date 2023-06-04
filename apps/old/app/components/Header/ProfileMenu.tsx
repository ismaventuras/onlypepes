'use client'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ProfileMenu() {
  const { data: session } = useSession()
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className={'flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'}>
          <span className="sr-only">Open user menu</span>
          <Image alt='' src={'/images/pepe-example.png'} width={32} height={32} className='h-8 w-8 rounded-full'/>
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-green-900 shadow-lg ring-1 ring-green-300 ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {session ? 
            <>
            <Menu.Item>
              {({ active }) => (                                
                <Link                  
                  href={'/profile'}
                  className={classNames(
                    active ? 'bg-green-800 text-slate-100' : 'text-slate-300',
                    'block px-4 py-2 text-sm cursor-pointer'
                  )}
                >
                  Profile
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (                                
                <div                  
                  onClick={()=>signOut()}
                  className={classNames(
                    active ? 'bg-green-800 text-slate-100' : 'text-slate-300',
                    'block px-4 py-2 text-sm cursor-pointer'
                  )}
                >
                  Sign Out 
                </div>
              )}
            </Menu.Item>
            </>
            :
            <>
            
            <Menu.Item>
              {({ active }) => (                                
                <div                  
                  onClick={()=>signIn()}
                  className={classNames(
                    active ? 'bg-green-800 text-slate-100' : 'text-slate-300',
                    'block px-4 py-2 text-sm cursor-pointer'
                  )}
                >
                  Sign In 
                </div>
              )}
            </Menu.Item>
            </>
            }

          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
