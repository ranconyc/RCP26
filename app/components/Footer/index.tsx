export default function Footer() {
  return (
    <footer className="w-full px-6 py-4 bg-zinc-800 text-white mt-12">
      <div className="max-w-240 mx-auto text-center text-sm">
        &copy; {new Date().getFullYear()} Rancode. All rights reserved.
      </div>
    </footer>
  );
}
