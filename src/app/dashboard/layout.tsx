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
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>{topfiftyusersscore}</div>
                    <div>{tophundredusersscore}</div>
                </div>
                <div style={{ display: "flex", flex: 1 }}>{toptenusersscore}</div>
            </div>
        </div>
    )
}