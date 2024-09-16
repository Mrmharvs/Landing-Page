import { useState } from "react"

const Navbar = () => {
    const [isOpen,setisOpen] = useState(false)

    const toggleMenu = () => {
        setisOpen(!isOpen)
    }
    return (
        <nav className="border-b-2"></nav>
    )
}

export default Navbar