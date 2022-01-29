import { getCrypto } from "../../functions/getData"
import { useEffect } from "react"
import { Link, Outlet, useLoaderData } from "remix"


export default function Posts() {

    return (
        <div>
            <h1>Index Route</h1>
            <Link to="new">New Route</Link>
            <Outlet />
        </div>
    )
}