import React from 'react'
import { Watch } from "react-loader-spinner"

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-[900px]]">
        <div className="flex flex-col items-center gap-1">
            <Watch
                visible={true}
                height="80"
                width="80"
                radius="48"
                color="red"
                ariaLabel="watch-loading"
                wrapperStyle={{}}
                wrapperClass=""
                />
        </div>
    </div>
  )
}

export default Loader