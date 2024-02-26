import React from "react"

const PublicLayout = ({ children }) => {
    return (
        <>
            <section className="w-full mx-auto bg-gray-100 py-4">
                <main className="w-11/12 mx-auto">
                    {children}
                </main>
            </section>
        </>
    )
}

export default PublicLayout