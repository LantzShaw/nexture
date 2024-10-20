export const metadata = {
  title: 'Home',
  description: 'Home page',
}

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>header</div>
      <div>{children}</div>

      {/* <div className="bg-blue-500 w-full h-screen">444</div> */}
      <div className="flex justify-between items-center">
        <div className="w-1/4 p-4 bg-purple-600 text-center rounded-xl">Left Content</div>
        <div className="w-1/4 p-4 bg-purple-600 text-center rounded-lg">Right Content</div>
        <div className="w-20 h-20 rounded-full bg-red-500 text-center">rounded</div>
      </div>

      <div className="flex h-[200px] bg-green-400 items-center">
        <div className="w-[400px] h-20 bg-red-500">1</div>
        <div className="w-20 h-20 bg-orange-500">2</div>
      </div>

      <div className="h-56 grid grid-cols-2 gap-4 my-4 mx-4 text-center">
        <div className="bg-orange-100 dark:hover:bg-green-500  hover:bg-orange-600 hover:text-[#fff]  rounded-lg text-orange-600 font-medium">
          01
        </div>
        <div className="bg-orange-100 rounded-lg text-orange-600 font-medium">02</div>
        <div className="bg-orange-100 rounded-lg text-orange-600 font-medium">03</div>
        <div className="bg-orange-100 rounded-lg text-orange-600 font-medium">04</div>
        <div className="bg-orange-100 rounded-lg text-orange-600 font-medium">05</div>
      </div>

      <div className="bg-white p-10">
        <div className="text-slate-700">123</div>
      </div>
    </>
  )
}
