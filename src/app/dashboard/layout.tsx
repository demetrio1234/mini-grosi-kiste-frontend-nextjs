import "../styles.css";

export default function RootLayout(
    { children, toptenusersscore, topfiftyusersscore, tophundredusersscore }:
        {
            children: React.ReactNode,
            toptenusersscore: React.ReactNode,
            topfiftyusersscore: React.ReactNode,
            tophundredusersscore: React.ReactNode
        }) {
    return (
        <div>
            <div>{children}</div>
            <div className="flex">
                <div className="flex-col bg-slate-200 p-10 rounded-xl">
                    <div className="bg-slate-300 p-5 rounded-xl">{topfiftyusersscore}</div>
                    <div className="bg-slate-300 p-5 rounded-xl">{tophundredusersscore}</div>
                </div>
                <div className="flex-col bg-slate-300 p-10 rounded-xl">
                    <div className="bg-slate-200 p-5 rounded-xl">{toptenusersscore}</div>
                </div>
            </div>
        </div>
    )
}