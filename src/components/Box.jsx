export function Box(props) {
    return (<>
        <div className="m-4 p-4 
        dark:bg-gray-800 dark:border-gray-500 
        bg-emerald-200 border-emerald-500
        border-2 rounded-xl">

            <p className="text-xl font-semibold dark:text-emerald-200 text-gray-800">
                {props.title}
            </p>

            <p className="text-md dark:text-gray-100 text-gray-800 my-2">
                {props.description}
            </p>

            <a href={props.url} className="dark:text-emerald-200 
            text-emerald-900
            cursor-pointer">
                Learn More
            </a>

        </div>
    </>)
}