export default function DashboardLayout({children}){
    return(
        <div>
            <nav>Header</nav>
            {children}
             <nav>Footer</nav>
        </div>
    )
}