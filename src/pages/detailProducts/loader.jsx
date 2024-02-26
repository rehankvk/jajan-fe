import { PhotoIcon } from "@heroicons/react/24/solid"

export default function DetailProductLoader() {
    return (
        <>
            <main className="w-11/12 mx-auto flex flex-col md:flex-row h-full bg-white">
                <div className="w-52 md:w-1/4 p-6 h-auto relative mx-auto animate-pulse">
                    <PhotoIcon className="w-32 h-32 object-contain mx-auto" />
                </div>
                <main className="w-full flex-auto flex flex-col md:flex-row">
                    <div className="p-3 w-full mx-auto flex flex-col">
                        <div className="w-11/12 bg-gray-200 h-4 ruonded-full"></div>
                        <div className="mt-3 flex justify-between items-center">
                            <div className="w-1/12 bg-gray-200 h-4 ruonded-full"></div>
                            <div className="w-1/6 bg-gray-200 h-3 ruonded-full"></div>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mt-2.5 mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
                    </div>
                    <div className="mx-auto w-full md:w-1/4 flex space-x-4 mb-6 text-sm font-medium">
                        <div className="p-3 w-11/12 mx-auto flex md:flex-col space-x-2 md:space-x-0 md:space-y-2">
                            <div className="w-full mx-auto h-10 bg-gray-200 rounded-full"></div>
                            <div className="w-full mx-auto h-10 bg-gray-200 rounded-full"></div>
                        </div>
                    </div>
                </main>
            </main>
        </>
    )
}
