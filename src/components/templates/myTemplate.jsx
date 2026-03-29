
function MyTemplate({ children, className=''}) {
  return (
    <div className={className}>
        {children}
    </div>
  )
}

export { MyTemplate }
