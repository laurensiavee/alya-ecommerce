export default function Card(props) {
    return (
      <div className="bg-white rounded-xl w-full p-5">
          {props.children}
      </div>
    );
  }
  