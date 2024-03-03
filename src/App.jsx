import { Box } from "./components/Box"
import projects from "../etc/projects.json"

export function App() {
    return (<>
        <div className="px-16 py-8">
            <p className="dark:text-emerald-300 text-zinc-900 
            font-bold text-5xl hover:scale-110 duration-500 w-fit cursor-default">
                zirc.lol
            </p>

            <p className="dark:text-zinc-100 text-xl mr-[50%] my-3">
                Hi! I'm zirc, a web developer who enjoys making
                projects in their free time. I have experience with VueJS,
                ExpressJS, and EJS. I've made a few projects, feel free
                to check them out below!
            </p>

            <p className="text-3xl font-semibold mt-16">
                Projects
            </p>

            <div className="grid grid-cols-3 pt-4">
                { projects.map((project) => {
                    return (
                        <Box title={project.name} 
                        description={project.description} 
                        url={project.url} />
                    )
                }) }
            </div>

            <p className="text-3xl font-semibold mt-16">
                Languages & More
            </p>

            <ul className="text-xl list-disc ml-8">
                <li>Python</li>
                <li>JavaScript</li>
                <li>VueJS</li>
                <li>EJS</li>
                <li>HTML (CSS, JS)</li>
                <li>TailwindCSS</li>
            </ul>
        </div>
    </>);
}