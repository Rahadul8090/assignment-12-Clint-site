import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Auth/Contex";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const { user, signOuts } = useContext(authContext)
    // console.log(user)

    const signOut = () => {
        signOuts()
            .then()
            .catch(error => console.error(error))
    }
    return (
        <nav className="w-full bg-white shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to=" ">
                            <h2 className="text-2xl font-bold">My ReSell</h2>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link to="/">Home </Link>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link to="/categore">categore</Link>
                            </li>
                            {user?.uid &&
                                <li className="text-gray-600 hover:text-blue-600">
                                <Link to="/deshbord">DeshBord</Link>
                            </li>}
                           
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link to="/blog">Blog </Link>
                            </li>
                            {user?.uid ?
                                <div className="dropdown lg:dropdown-left sm:dropdown-hover ">
                                    <label tabIndex={0} className="m-1">
                                        <img alt='' className="rounded-full w-9 h-9" src={user?.photoURL} />
                                    </label>
                                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><label htmlFor="my-modal-3">Open Your Photos</label></li>

                                        <li><button onClick={signOut}>Sign Out</button></li>
                                    </ul>
                                </div>
                                :
                                <li className="text-gray-600 hover:text-blue-600">
                                    <Link to="/signup">Sign Up</Link>
                                </li>
                            }
                            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box relative  w-5/6 h-5/6">
                                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">???</label>
                                    <h3 className="text-lg font-bold">{user?.displayName}</h3>
                                    <img alt='' className="w-full h-full" src={user?.photoURL}/>
                                 </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </nav >
    );
}