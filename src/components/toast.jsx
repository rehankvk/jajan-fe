import React from 'react'
import { IconButton } from '@material-tailwind/react'
import { XMarkIcon, CheckIcon } from '@heroicons/react/24/solid'


function ToastInfo({ children, setToastInfo }) {
    return (
        <>
            <div className="top-20 left-10 z-50">
                <div className="space-x-3 flex items-center w-max max-w-full p-4 mb-4 text-gray-500 bg-white rounded-lg shadow" role="alert">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg">
                        <CheckIcon className='w-5 h-5' />
                    </div>
                    <div className="ms-3 text-sm font-normal">{children}</div>
                    <IconButton variant={'text'} onClick={() => setToastInfo({ visible: false })}>
                        <XMarkIcon className='w-5 h-5' />
                    </IconButton>
                </div>
            </div>
        </>
    )
}

export default ToastInfo