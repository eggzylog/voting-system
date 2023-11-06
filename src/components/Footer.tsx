const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="pb-6 pt-24 text-center">
      <h5>&copy; {currentYear} All rights reserved</h5>
    </div>
  )
}

export default Footer
