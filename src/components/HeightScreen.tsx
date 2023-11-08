interface ChildrenProps {
  children?: React.ReactNode
}

const HeightScreen: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col place-content-center place-items-center">
      {children}
    </div>
  )
}

export default HeightScreen
