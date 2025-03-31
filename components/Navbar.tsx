import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="bg-blue-100 py-5">
        <div className="container mx-auto">
            <div className="flex justify-between items-center">
                <Link href={'/'} className="text-2xl font-bold">Logo</Link>
                <ul className="flex gap-4 items-center">
                    <li><Link className="opacity-50 hover:opacity-100 transition" href={'/'}>Home</Link></li>
                    <li><Link className="opacity-50 hover:opacity-100 transition" href={'/'}>Shop</Link></li>
                    <li><Link className="opacity-50 hover:opacity-100 transition" href={'/'}>About</Link></li>
                    <li><Link className="opacity-50 hover:opacity-100 transition" href={'/'}>Products</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar