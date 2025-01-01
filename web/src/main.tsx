import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import ListUsers from "./pages/list-users.tsx";

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Routes>
			<Route path="/users/list" element={<ListUsers />} />
		</Routes>
	</BrowserRouter>,
);
