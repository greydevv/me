

export default function BoxGraphic({ className, left, children }) {

  const borderCls = () => {
    const baseCls = "z-[-1] absolute w-full h-full border border-red top-5 pointer-events-none"
    return `${left ? 'right-5' : 'left-5'} ${baseCls}`
  }

  const backdropCls = () => {
    const baseCls = "z-[-2] absolute w-full h-full bg-red-10 top-8 pointer-events-none"
    return `${left ? 'right-8' : 'left-8'} ${baseCls}`
  }

  return (
    <div className={ `${className} z-[1] relative` }>
    <div className="w-full h-full bg-dark">
      { children }
    </div>
    <div className={ borderCls() } />
    <div className={ backdropCls() } />
    </div>
  )
}
