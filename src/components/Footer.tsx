export default function Footer() {
  return (
    <footer className="mt-16 p-6 text-center text-sm text-gray-500 border-t">
      © {new Date().getFullYear()} Study Planner. All rights reserved.
    </footer>
  );
}