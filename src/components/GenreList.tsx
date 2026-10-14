import useGenres from "@/hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((data) => (
        <li key={data.name}>{data.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
