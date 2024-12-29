export function Projects() {
  return (
    <div className="mt-10 min-h-screen text-xl ">
      <h1 className="font-nohemi text-5xl">Selected projects (2024-present)</h1>
      <hr className="border-t-1 my-3 border-black"></hr>
      <div className="flex flex-row gap-10 uppercase">
        <div className="mt-5 flex flex-col border border-black p-5">
          <img
            className="w-72 border-8 border-black"
            src="public/image/bite-share/biteShare1.png"
            alt="biteshare-homepage"
          />
          <span className="ml-5">bite share</span>
          <span className="ml-5">view case</span>
        </div>
        <div className="mt-5 flex flex-col border border-black p-5">
          <img
            className="w-72 border-8 border-black"
            src="public/image/bite-share/biteShare1.png"
            alt="biteshare-homepage"
          />
          <span className="ml-5">bite share</span>
          <span className="ml-5">view case</span>
        </div>
      </div>
    </div>
  )
}
