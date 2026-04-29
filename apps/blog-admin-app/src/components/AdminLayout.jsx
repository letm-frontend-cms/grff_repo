import NavBar from "./NavBar.jsx";

export default function AdminLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
