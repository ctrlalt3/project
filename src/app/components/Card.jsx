export default function Card(props) {
return (
    <div className="col-span-1 rounded-xl p-2">
        <div className="h-full p-1">
            <form action={props.onClick} className="flex items'center justify-center">
                <input type="hidden" name="hidden" value={props.id} />
                <input type="hidden" name="name" value={props.name} />
                <div className="flex w-full justify-between items-center gap-2">
                    <h1 className="text-zinc-300 text-left text-xl font-bold">
                        {props.name}
                    </h1>
                    <button className="pt-2 cursor-pointer hover:text-amber-400">
                        {props.icon}
                    </button>
                </div>
            </form>
            <article className="flex items-center justify-left gap-2">
                <p className="text-left">{props.info}</p>
                <p name="year">{props.year}</p>
            </article>
        </div>
    </div>
);
}
