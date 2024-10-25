export const Navbar = () => {
    return (
        <div className=" border border-red-500">
            <div>
                <h1 className="text-5xl text-blue-400 font-semibold m bg-black h-36 p-2"><div className="m-2">Erados</div></h1>
                <div className="bg-black text-gray-400 flex space-x-6 p-2 ">
                    <a className="hover:text-white" href="#">Home</a><a className="hover:text-white" href="#">Activity</a><a className="hover:text-white" href="#">Problems</a><a className="hover:text-white" href="#">Leaderboard</a><a className="hover:text-white" href="#">Login</a>
                    <div className="justify-end">
                        <input type="text" placeholder="search" />

                    </div>
                </div>

            </div>

        </div>
    )
}