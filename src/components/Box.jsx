export function Box(props) {
    return (<>
        <div className="m-4 p-4 hover:scale-105 duration-500
        dark:bg-zinc-800 dark:border-zinc-500 
        bg-zinc-200 dark:border-emerald-500 border-zinc-700
        border-2 rounded-xl shadow-md 
        dark:shadow-emerald-800 shadow-zinc-500">

            <p className="text-xl font-semibold dark:text-emerald-200 text-gray-800">
                {props.title}
            </p>

            <p className="text-md dark:text-gray-100 text-gray-800 my-2">
                {props.description}
            </p>

            <a href={props.url} target="_blank" className="dark:text-emerald-200 
            dark:font-medium font-bold
            text-zinc-800 cursor-pointer">
                Learn More
            </a>

        </div>
    </>)
}