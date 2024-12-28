import InputBox from "./InputBox"
import Product from "./Product"

export default function Main() {
    return (
        <main className="flex flex-col mt-20 gap-10 items-center justify-center">
            <Product />
            <InputBox />
        </main>
    )
}