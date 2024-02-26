import { Card } from "@material-tailwind/react"

const AuthLayout = ({ children }) => {
    return (
        <>
            <section className="w-full h-screen flex justify-center items-center">
                <Card color="transparent" shadow={false}>
                    {children}
                </Card>
            </section>
        </>
    )
}

export default AuthLayout