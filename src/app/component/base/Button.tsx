export default function Button(props) {
    return (
        <>
            <button className="rounded-xl p-3 bg-gradient-to-br from-l-primary to-l-secondary text-d-text font-bold hover:from-l-secondary hover:to-l-primary hover:shadow-2xl hover:shadow-l-primary/50">
                {props.children}
            </button>
            <button className="rounded-xl p-3 bg-gradient-to-br from-l-secondary to-l-accent text-d-text font-bold hover:from-l-accent hover:to-l-secondary hover:shadow-2xl hover:shadow-l-secondary/50">
                {props.children}
            </button>

            <button className="rounded-xl p-3 bg-gradient-to-br from-l-secondary to-l-primary text-d-text font-bold hover:from-l-primary hover:to-l-secondary hover:shadow-2xl hover:shadow-l-secondary/50">
                {props.children}
            </button>
            <button className="rounded-xl p-3 bg-gradient-to-br from-l-accent to-l-secondary text-d-text font-bold hover:from-l-secondary hover:to-l-accent hover:shadow-2xl hover:shadow-l-accent/50">
                {props.children}
            </button>

            <button className="rounded-xl p-3 bg-l-primary text-d-text font-bold hover:shadow-2xl hover:shadow-l-primary/70">
                {props.children}
            </button>
            <button className="rounded-xl p-3 bg-l-secondary text-d-text font-bold hover:shadow-2xl hover:shadow-l-secondary/70">
                {props.children}
            </button>
                <button className="rounded-xl p-3 bg-l-accent text-d-text font-bold hover:shadow-2xl hover:shadow-l-accent/70">
                {props.children}
            </button>
        </>
    );
  }
  