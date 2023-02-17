import React from 'react';
import { downloadImage } from '../utils';
import { MdFileDownload, MdOutlineClose } from 'react-icons/md';
import { useDeletePostMutation } from '../redux/services/dalleCoreApi';


const Card = ({ _id, name, prompt, photo, public_id }) => {
    const [deletePost] = useDeletePostMutation();
    const handleDeletePost = async (id, public_id) => {
        try {
            await deletePost({ id, public_id })
        } catch (error) {
            alert(error);
        }
    }
    
    return (
        <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
            <button
                type="button"
                className="group-hover:flex hidden absolute right-4 top-3 outline-none p-1 hover:rounded-full border-none hover:bg-[#BFBFBF] bg-transparent"
                onClick={ () => handleDeletePost(_id, public_id) }
            >
                <MdOutlineClose className="w-8 h-8"/>
            </button>
            <img
                className="w-full h-auto object-cover rounded-xl"
                src={ photo }
                alt={ prompt }
            />
            <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
                <p className="text-white text-md overflow-y-auto prompt">
                    { prompt }
                </p>
                <div className="mt-5 flex justify-between items-center gap-2">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">
                            { name[0] }
                        </div>
                        <p className="text-white text-sm">
                            { name }
                        </p>
                    </div>
                    <button 
                        type="button" 
                        onClick={() => downloadImage(_id, photo)}
                        className="outline-none bg-transparent border-none"
                    >
                        <MdFileDownload className="w-6 h-6 object-contain invert" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card;