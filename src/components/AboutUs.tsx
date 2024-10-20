import { ABOUT_US_TEXT } from "@/constants"

const AboutUs = () => {
  return (
    <div className="container mx-auto my-20 border-b pb-10">
      <div className="mb-8">
        <h2 className="mb-6 text-center text-3xl tracking-tighter sm:text-4xl
        lg:text-5xl">
          About Us
        </h2>
        <p className="py-6 text-center text-lg tracking-tighter lg:pr-20">
          {ABOUT_US_TEXT}
        </p>
      </div>
      <div className="flex flex-wrap text-center">
        <div className="w-full border-neutral-700 p-6 lg:w-1/2 lg:border-r">
        <p className="bg-gradient-to-r from-blue-400 via-green-200 to-blue-500
        bg-clip-text text-transparent lg:text-7xl">
          5000+
        </p>
        <p className="my-8 font-medium">Partner since 2016</p>
        </div>
        <div className="w-full p-6 lg:w-1/2">
        <p className="bg-gradient-to-r from-orange-400 via-red-200 to-orange-500
        bg-clip-text text-transparent lg:text-7xl">
          1500+
        </p>
        <p className="my-8 font-medium">Investments closed</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs