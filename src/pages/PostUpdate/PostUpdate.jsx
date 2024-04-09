export const PostUpdate = () => {
  let { _id } = useParams();

  return (
    <div>
      <PostUpdatData _id={_id} />
    </div>
  );
};
