export default function Footer() {
    return (
        <footer className="flex justify-between items-center px-4 py-2 bg-white border-t border-gray-200">
            <div className="flex items-center">
                <h1 className="ml-2 text-2xl font-bold">Next.js</h1>
            </div>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}