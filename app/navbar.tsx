'use client';

import { Fragment } from 'react';
import { usePathname } from 'next/navigation';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useUser, SignIn, SignedOut } from '@clerk/clerk-react';
import Image from 'next/image';
import { ClerkProvider } from '@clerk/clerk-react';

const navigation = [
  { name: 'Graphiques', href: '/graphique' },
  { name: 'Calculateur', href: '/portfolio' },
  { name: 'Négocier ', href: '/negociations' },
  { name: 'Nouvelles', href: '/nouvelles' },
  { name: 'Bug Report ', href: '/bugreport' },

];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const pathname = usePathname();
  const { user } = useUser();

  return (
  
    
    <Disclosure as="nav" className="mb-10 bg-white shadow-sm">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 md:justify-center xs:justify-between lg:justify-center md:justify-between">
              <div className="flex">
                <div className='flex items-center'>
                  <a href='/accueil'>
                    <div className="flex flex-shrink-0 items-center ">
                      {/*source : https://iconduck.com/icons/64933/sf*/}
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 90 90"
                        clipRule="evenodd"
                        fillRule="evenodd"
                        strokeLinejoin="round"
                        strokeMiterlimit="2"
                        color='darkblue'
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          width="50%"
                          height="50%"
                          cx="45"
                          cy="45"
                          fill="currentColor"
                          r="45"
                        />
                        <g fill="#fff" fillRule="nonzero">
                          <path
                            d="m54.545 19.647h19.559v4.848h-13.832v6.345h12.11v4.792h-12.11v11.567h-5.727z"
                          />
                          <path
                            d="m22.003 54.18c.304 2.192.901 3.83 1.791 4.915 1.627 1.975 4.416 2.962 8.366 2.962 2.365 0 4.286-.26 5.761-.781 2.8-.998 4.2-2.854 4.2-5.566 0-1.585-.695-2.811-2.084-3.679-1.389-.846-3.57-1.595-6.543-2.246l-5.078-1.139c-4.991-1.129-8.442-2.355-10.351-3.679-3.234-2.213-4.851-5.674-4.851-10.384 0-4.297 1.563-7.866 4.688-10.709s7.715-4.265 13.769-4.265c5.057 0 9.37 1.34 12.94 4.021 3.57 2.68 5.441 6.57 5.615 11.669h-9.635c-.174-2.886-1.433-4.937-3.776-6.152-1.563-.803-3.505-1.204-5.827-1.204-2.583 0-4.644.521-6.185 1.562-1.541 1.042-2.311 2.496-2.311 4.362 0 1.715.759 2.995 2.278 3.841.977.565 3.06 1.226 6.25 1.986l8.268 1.986c3.625.868 6.359 2.029 8.204 3.483 2.864 2.257 4.296 5.523 4.296 9.798 0 4.384-1.676 8.024-5.029 10.921s-8.089 4.346-14.209 4.346c-6.25 0-11.165-1.427-14.746-4.281-3.581-2.853-5.371-6.776-5.371-11.767z"
                          />
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        pathname === item.href
                          ? 'border-blue-850 text-blue-500'
                          : 'border-transparent text-blue-800 hover:text-blue-800 hover:border-blue-300',
                        'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold'
                      )}
                      aria-current={pathname === item.href ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="h-8 w-8 rounded-full"
                        src={'https://avatar.vercel.sh/leerob'}
                        height={32}
                        width={32}
                        alt={`'placeholder' avatar`}
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {user ? (
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'flex w-full px-4 py-2 text-sm text-gray-700'
                              )}
                              onClick={() => SignedOut}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      ) : (
                        <div>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'flex w-full px-4 py-2 text-sm text-gray-700'
                                )}
                                //onClick={() => signIn('github')}
                                onClick={() => window.location.href = '/login'}
                              >
                                Sign in
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'flex w-full px-4 py-2 text-sm text-gray-700'
                                )}
                                //onClick={() => signIn('github')}
                                onClick={() => window.location.href = '/signup'}
                              >
                                Sign up
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      )}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    pathname === item.href
                      ? 'bg-slate-50 border-slate-500 text-slate-700'
                      : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                    'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                  )}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="border-t border-gray-200 pt-4 pb-3">
              {user ? (
      <button onClick={() => SignedOut}>Sign out</button>
    ) : (
      <button onClick={() => SignIn}>Sign in</button>
    )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    
  );
}
