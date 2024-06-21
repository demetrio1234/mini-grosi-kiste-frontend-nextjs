export default function JobInsertionDetailFooter() {
    return (
        <footer className="flex justify-between items-center px-4 py-2 bg-black border-t border-gray-200">
            <div className="flex items-center">
                <h1 className="ml-2 text-2xl font-bold">JobInsertionDetailFooter</h1>
            </div>
            <nav>
                <ul className="flex flex-row justify-center">
                    <li className="flex flex-row">
                        <a href="#" className="text-gray-600 hover:text-gray-900">NOTHING</a>
                    </li>
                    <li className="flex flex-row">
                        <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
                    </li>
                    <li className="flex flex-row">
                        <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}