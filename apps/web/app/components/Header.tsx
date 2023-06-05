import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center py-2">
            <Link href={'/'} className="flex-1 text-2xl font-bold text-green-600 text-center">
                onlypepes
            </Link>
            {/* TODO */}
            {/* <nav>
                <button>Click Me!</button>
            </nav> */}
        </header>
    )
}