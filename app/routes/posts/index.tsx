import { getCrypto } from "../../functions/getData"
import { useEffect } from "react"
import { Link, Outlet, useLoaderData } from "remix"


export default function Posts() {

    return (
        <div>
            <h1>Index Route</h1>
            <Link to="new">Nea Feature</Link>
<<<<<<< HEAD
            <Link to="new">World</Link>

=======
            <Link to="new">Master thingkeldnsja</Link>
>>>>>>> master
            <Outlet />
        </div>
    )
}