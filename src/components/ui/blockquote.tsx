import * as React from "react"

import { cn } from "@/lib/utils"

function Blockquote({
  className,
  ...props
}: React.ComponentProps<"blockquote">) {
  return (
    <blockquote
      data-slot="blockquote"
      className={cn(
        "border-l-4 border-brand-500 pl-4 font-serif text-lg italic text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function BlockquoteCite({
  className,
  ...props
}: React.ComponentProps<"cite">) {
  return (
    <cite
      data-slot="blockquote-cite"
      className={cn(
        "mt-2 block text-sm font-sans not-italic text-foreground",
        className
      )}
      {...props}
    />
  )
}

export { Blockquote, BlockquoteCite }
