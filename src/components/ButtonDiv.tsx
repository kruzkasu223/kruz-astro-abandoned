import { h } from 'preact'

interface ButtonDivProps {
  children: any
  className: string
  onClickHandler: () => void
}

export const ButtonDiv = ({
  children,
  className,
  onClickHandler,
}: ButtonDivProps) => {
  return (
    <div onClick={onClickHandler} class={className}>
      {children}
    </div>
  )
}
