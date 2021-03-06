import React from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { IoMdAdd, IoMdSearch } from 'react-icons/io';

const Navbar = ({ searchTerm, setSearchTerm, user }) => {
    const navigate = useNavigate();

    if (!user) return null;

    return (
        <div className="flex gap-2 md:gap-5 w-full p-2 bg-black pt-8 pb-8">
            <div className="flex justify-start items-center w-full rounded-md border-none outline-none focus-within:shadow-sm bg-gray-500">
                <IoMdSearch fontSize={21} className="ml-2" />
                <input
                    type="text"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder='Search'
                    value={searchTerm}
                    onFocus={() => navigate('/search')}
                    className="pl-2 w-full outline-none bg-gray-500 text-white"
                />
            </div>
            <div className="flex gap-3 pr-10">
                <Link to={`user-profile/${user?._id}`} className="hidden md:block pl-10">
                    <img src={user.image} alt="user-pic" className="w-14 h-12 rounded-lg" />
                </Link>
                <Link to="/create-pin" className="bg-gray-500 text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex justify-center items-center">
                    <IoMdAdd />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;