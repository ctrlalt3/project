import Navbar from "./Navbar.jsx";
import FireIcon from "./icons/FireIcon.jsx";
export default function Template({ children }) {
return (
    <div className="flex flex-col justify-center overflow-hidden h-screen">
    <div className="h-20 flex items-center pl-5 gap-3  justify-left bg-zinc-800 text-zinc-300 border-b-2 border-b-amber-400"> 
        <FireIcon></FireIcon>
        <h1 className="text-4xl">FIRE</h1>
    </div>
    <main className="w-full flex flex-col md:flex-row justify-between h-[calc(100vh-5rem)] overflow-hidden">
        <div className="w-full flex flex-col bg-zinc-800 text-zinc-300 overflow-hidden">
            {children}
        </div>
        <Navbar />
    </main>
    </div>
);
}
