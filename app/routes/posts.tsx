import { Outlet } from "remix";

export default function Posts() {
    return (
        <div>
            <h1>Now your are in the main posts page</h1>
            <main>
                <Outlet />
            </main>
        </div>
    )
}