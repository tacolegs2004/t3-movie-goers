export default function Comment(props: {
  name: string;
  avatar: string;
  key: string;
  time: string;
  body: string;
  amount?: number;
}) {
  return (
    <div className="ml-8 mr-auto mt-4 w-full antialiased" key={props.key}>
      <div className="space-y-4">
        <div className="flex">
          <div className="mr-3 flex-shrink-0">
            <img
              className="mt-2 h-8 w-8 rounded-full sm:h-10 sm:w-10"
              src={props.avatar}
              alt={`${props.name}'s avatar`}
            />
          </div>
          <div className="flex-1 rounded-lg border px-4 py-2 leading-relaxed sm:px-6 sm:py-4">
            <strong>{props.name}</strong>{" "}
            <span className="text-xs text-gray-400">3:34 PM</span>
            <p className="text-sm">{props.body}</p>
            <div className="mt-4 flex items-center">
              <div className="mr-2 flex -space-x-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
