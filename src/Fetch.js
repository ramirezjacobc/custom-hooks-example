import { useFetch } from "./hooks/useFetch";

function Fetch({ username }) {
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${username}`
  );

  if (loading) return <h4>Loading...</h4>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default Fetch;
