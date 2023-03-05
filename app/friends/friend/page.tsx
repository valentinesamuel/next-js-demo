import Link from "next/link";

const Friend = () => {
  return (
    <div>
      <p className="text-2xl font-bold font-serif">This is a friend here</p>

      <Link href="friends" className="text-lime-700 mr-6">
        <button>Go back to friends</button>
      </Link>
      <Link href="/">
        <button>Go back home</button>
      </Link>
    </div>
  );
};

export default Friend;
