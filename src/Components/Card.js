import React from "react";

function Card({ data }) {
  const { name } = data;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all">
      <h1 className="text-xl font-semibold text-center text-blue-600">
        {name}
      </h1>
      <div className="mt-4 text-center">
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
          View Profile
        </button>
      </div>
    </div>
  );
}

export default Card;
