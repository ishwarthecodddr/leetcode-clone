import { Navbar } from "./Navbar"
import { Questions } from "./Questions"

const Landing = () => {
  return (
    <div className="grid grid-cols-5 h-screen  border border-gr">
      <div className="col-span-1">
        <h1></h1>
      </div>
      <div className="col-span-3 border border-green-300 ">
        <Navbar />
        <Questions />
      </div>
      <div className="col-span-1">

      </div>
    </div>
  )
}

export default Landing

