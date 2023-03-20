import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'

export default function Header(props: { title: string, base: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto max-w-container flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="mr-auto flex-none">
          <a href={props.base} className="-m-1.5 p-1.5">
            <h1 className="text-lg leading-6 font-medium text-gray-900">{props.title}</h1>
          </a>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a href={`${props.base}blog/`} className="text-sm font-semibold leading-6 text-gray-900">Blog</a>
          <a href={`${props.base}reference/`} className="text-sm font-semibold leading-6 text-gray-900">Reference</a>
        </Popover.Group>
        <button type="button" className="-my-1 ml-6 -mr-1 flex h-8 w-8 items-center justify-center lg:hidden" onClick={() => setMobileMenuOpen(true)}>
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <h2>{ props.title }</h2>
            </a>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a href={`${props.base}blog/`} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Blog</a>
                <a href={`${props.base}reference/`} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Reference</a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}