import React from 'react';

const Button = ({btntext}) => {
    return (
      <button className={`bg-[#F56565] hover:bg-red-500 text-white py-3 px-4 rounded-xl font-medium transition-colors duration-200`}>
        {btntext}
      </button>
    );
};

export default Button;