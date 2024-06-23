import Link from "next/link";
import "../styles.css";

export default function RootLayout(
    { children, toptenusersscore, topfiftyusersscore, tophundredusersscore }:
        {
            children: React.ReactNode,
            toptenusersscore: React.ReactNode,
            topfiftyusersscore: React.ReactNode,
            tophundredusersscore: React.ReactNode
        }) {

    const isLogged = false;

    return isLogged ? (
        <div>
            <div>{children}</div>
            <div className="flex">
                <div className="flex-col bg-slate-200 p-10 rounded-xl">
                    <div className="bg-slate-300 p-5 rounded-xl">{topfiftyusersscore}</div>
                </div>
                <div className="flex-col bg-slate-300 p-10 rounded-xl">
                    <div className="bg-slate-200 p-5 rounded-xl">{toptenusersscore}</div>
                </div>
            </div>
        </div>
    ) :
        (
            <>
                <div className="flex">
                    <Link href="/login">Youre not yet logged, please click here to access this area</Link>
                </div>
            </>)
}