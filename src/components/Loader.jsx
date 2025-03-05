import React from 'react';

const Loader = () => {
    return (
        <div className="flex justify-center items-center fixed inset-0 bg-white bg-opacity-75 z-50">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
};

export default Loader;
