export const UserProfileBox = ({ imagePath, imageAlt, nickname }) => {
  return (
    <div>
      <img src={imagePath} alt={imageAlt} />
      <span>{nickname}</span>
    </div>
  );
};
