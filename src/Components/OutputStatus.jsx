import React from 'react'

const OutputStatus = ({ outputDetails }) => {
  return (
    <div className="w-full metrics-container flex flex-wrap justify-around">
      <p className="text-sm">
        Status:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-800 bg-opacity-80">
          {outputDetails?.status?.description}
        </span>
      </p>
      <p className="text-sm">
        Memory:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-800 bg-opacity-80">
          {outputDetails?.memory}
        </span>
      </p>
      <p className="text-sm">
        Time:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-800 bg-opacity-80">
          {outputDetails?.time}
        </span>
      </p>
    </div>
  )
}

export default OutputStatus;
