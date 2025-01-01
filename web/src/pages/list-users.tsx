import { useEffect, useState } from "react";

type ListUserRequest = {
	users: {
		users: {
			id: string;
			email: string;
			password: string;
		}[];
	};
};

const ListUsers = () => {
	const [data, setData] = useState<ListUserRequest | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const data: ListUserRequest = await fetch("http://localhost:5000/users", {
				method: "get",
			}).then((res) => res.json());
			setData(data);
		};

		fetchData();
	}, []);
	return (
		<div>
			{data?.users.users.map((user) => (
				<div key={user.id}>
					<h2>{user.email}</h2>
					<h3>{user.password}</h3>
				</div>
			))}
		</div>
	);
};

export default ListUsers;
