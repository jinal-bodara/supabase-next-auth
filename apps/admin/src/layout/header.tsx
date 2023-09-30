"use client";
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  HamburgerMenuIcon,
  Cross1Icon,
  ExitIcon,
  GearIcon,
  LockClosedIcon,
  AvatarIcon,
} from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname} from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const navigation = [
  { name: 'Overview', href: '/' },
];

const profileMenus = [
  {
    name: 'Profile',
    href: '/profile',
    icon: (
      <AvatarIcon
        className="mr-2 my-auto block h-4 w-4 text-gray-900"
        aria-hidden="true"
      />
    ),
  },
  {
    name: 'Settings',
    href: '/profile/settings',
    icon: (
      <GearIcon
        className="mr-2 my-auto block h-4 w-4 text-gray-900"
        aria-hidden="true"
      />
    ),
  },
  {
    name: 'Security',
    href: '/profile/security',
    icon: (
      <LockClosedIcon
        className="mr-2 my-auto block h-4 w-4 text-gray-900"
        aria-hidden="true"
      />
    ),
  },
];

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const pathname = usePathname();

  async function handleLogout(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const { error } = await supabase.auth.signOut();
    router.push('/sign-in');
  }

  return (
    <Disclosure as="nav" className="bg-gray-50 dark:bg-gray-700">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  {open ? (
                    <Cross1Icon
                      className="block h-6 w-6 text-gray-900"
                      aria-hidden="true"
                    />
                  ) : (
                    <HamburgerMenuIcon
                      className="block h-6 w-6 text-gray-900"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  Logo
                </div>
                <div className="hidden ml-6 md:ml-10 sm:block">
                  <div className="flex space-x-8">
                    {navigation?.map((item, index) => (
                      <Link href={item.href} key={index}>
                        <span
                          key={item.name}
                          className={classNames(
                            pathname === item.href
                              ? 'font-semibold border-b border-black'
                              : 'hover:font-medium border-b border-transparent hover:border-black',
                            'cursor-pointer py-2 text-sm font-medium font-sm'
                          )}
                        >
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full text-sm">
                      <span className="absolute -inset-1.5" />
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-35 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {profileMenus?.map((link, index) => {
                        return (
                          <Menu.Item key={index}>
                            {({ active }) => (
                              <Link href={link.href}>
                                <span
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'flex px-4 hover:bg-gray-300 cursor-pointer py-2 text-sm text-gray-700 text-center'
                                  )}
                                >
                                  {link.icon}
                                  {link?.name}
                                </span>
                              </Link>
                            )}
                          </Menu.Item>
                        );
                      })}
                      <Menu.Item>
                        {({ active }) => (
                          <Link href={'#'}>
                            <span
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'flex px-4 hover:bg-gray-300 cursor-pointer py-2 text-sm text-gray-700 text-center'
                              )}
                              onClick={handleLogout}
                            >
                              <ExitIcon
                                className="mr-2 my-auto block h-4 w-4 text-gray-900"
                                aria-hidden="true"
                              />
                              Logout
                            </span>
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    pathname === item.href
                      ? 'bg-gray-300'
                      : 'hover:bg-gray-200',
                    'text-gray-900 hover:undeline block rounded-md px-3 py-2 text-base font-sm'
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
