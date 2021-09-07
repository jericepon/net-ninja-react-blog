import { useEffect, useState } from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isPending, setPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(url)
			.then((res) => {
				if (!res.ok) {
					console.log('something\'s wrong');
					setPending(false);
				}
				return res.json()
			})
			.then((data) => {
				setData(data);
				setError(null);
				setPending(false);
			})
			.catch((err) => {
				setPending(false);
				setError(err.message);
			});
	}, [url]);

	return {data, isPending, error, setData}
}

export default useFetch
