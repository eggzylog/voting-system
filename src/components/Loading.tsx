import HeightScreen from '@/components/HeightScreen'

const Loading = () => {
  return (
    <HeightScreen>
      <div className="flex">
        <div className="relative">
          <div className="absolute h-12 w-12 rounded-full border-8 border-dashed border-gray-200"></div>
          <div className="absolute h-12 w-12 animate-spin rounded-full border-8 border-dashed border-purple-500 border-t-transparent"></div>
        </div>
      </div>
    </HeightScreen>
  )
}

export default Loading
