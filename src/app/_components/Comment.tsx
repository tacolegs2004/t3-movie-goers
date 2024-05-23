export default function Comment(props: {
  name: string;
  avatar: string;
  key: string;
  time: string;
  body: string;
  amount?: number;
}) {
  return (
    <div className="antialiased mx-auto w-full ml-8" key={props.key}>
      <div className="space-y-4">
        <div className="flex">
          <div className="flex-shrink-0 mr-3">
            <img
              className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
              src={props.avatar}
              alt={`${props.name}'s avatar`}
            />
          </div>
          <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
            <strong>{props.name}</strong>{" "}
            <span className="text-xs text-gray-400">3:34 PM</span>
            <p className="text-sm">{props.body}</p>
            <div className="mt-4 flex items-center">
              <div className="flex -space-x-2 mr-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
