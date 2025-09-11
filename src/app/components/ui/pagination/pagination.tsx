import { PaginationProps } from "@/types";
import { FC } from "react";

const Pagination: FC<PaginationProps> = ({ currentPage, pages, onPageChange }) => {
    return (
        <div className="flex justify-center mt-4 gap-5" >
            <button
                className="px-4 py-2 mx-1 text-white bg-[#ff5733] rounded"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            <div className="flex gap-5">
                {pages.map((_, index:number) => (
                    <button 
                    key={index} 
                    className={`w-10 h-10  rounded-full ${currentPage === index + 1 ? "bg-[#ffcc00] text-white" : "bg-[#9ca3af] text-black"}`} 
                    onClick={() => onPageChange(index + 1)}>{index + 1}
                    </button>
                ))}
            </div>
            <button
                className="px-4 py-2 mx-1 text-white bg-[#ff5733] rounded"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === pages.length}
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;