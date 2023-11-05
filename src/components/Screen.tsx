interface ChildrenProps {
  children?: React.ReactNode
}

const Screen: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col place-content-center place-items-center">
      {children}
    </div>
  )
}

export default Screen
