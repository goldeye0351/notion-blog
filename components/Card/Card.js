const Card = ({ children, headerSlot, className }) => {
  return <div className={`${className || ''} card rounded-xl lg:p-6 p-3`}>
    <>{headerSlot}</>
    <section>
        {children}
    </section>
  </div>
}
export default Card
