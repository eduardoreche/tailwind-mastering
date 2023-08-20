/* eslint-disable @next/next/no-img-element */

import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/eduardoreche.png"
        alt="user"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="truncate text-sm font-semibold text-zinc-700">
          Eduardo Reche
        </span>
        <span className="text-zinc500 truncate text-sm">ereche@msn.com</span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
