export default function Card(props) {
    return (
      <div className="bg-white rounded-xl w-full p-5 shadow-xl shadow-l-primary/30">
          {props.children}
      </div>
    );
  }
  