import React from 'react'

const OutputWindow = ({ outputDetails }) => {
    const getOutput = () => {
      let statusId = outputDetails?.status?.id;
  
      if (statusId === 6) {
        // compilation error
        return (
          <pre className="px-2 py-1 font-normal text-xs text-red-500">
            {atob(outputDetails?.compile_output)}
          </pre>
        );
      } else if (statusId === 3) {
        return (
          <pre className="px-2 py-1 font-normal text-xs text-green-500">
            {atob(outputDetails.stdout) !== null
              ? `${atob(outputDetails.stdout)}`
              : null}
          </pre>
        );
      } else if (statusId === 5) {
        return (
          <pre className="px-2 py-1 font-normal text-xs text-red-500">
            {`Time Limit Exceeded`}
          </pre>
        );
      } else {
        return (
          <pre className="px-2 py-1 font-normal text-xs text-red-500">
            {atob(outputDetails?.stderr)}
          </pre>
        );
      }
    };
    return (
      <>
      <div className='w-full h-full flex flex-col'>
        <h1 className="font-bold text-xl bg-clip-text text-transparent bg-teal-500 mb-2">
          Output
        </h1>
        <div className="w-full min-h-56 h-full bg-black rounded-md text-white font-normal text-sm overflow-y-auto border border-gray-800">
          {outputDetails ? <>{getOutput()}</> : null}
        </div>
        </div>
      </>
    );
  };

export default OutputWindow;