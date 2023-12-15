import * as TooltipUi from '@radix-ui/react-tooltip'
import { TooltipProps } from './@interfaces'
import { TooltipArrow, TooltipContent } from './styles'

export function Tooltip({ children, text }: TooltipProps) {
  return (
    <TooltipUi.Provider>
      <TooltipUi.Root>
        <TooltipUi.Trigger asChild>{children}</TooltipUi.Trigger>
        <TooltipUi.Portal>
          <TooltipContent sideOffset={3}>
            {text}
            <TooltipArrow />
          </TooltipContent>
        </TooltipUi.Portal>
      </TooltipUi.Root>
    </TooltipUi.Provider>
  )
}
