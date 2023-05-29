import { PropTypes } from "prop-types";

export const MemoryCard = ({ card }) => {
  const { url_image } = card;
  return (
    <div className="memory-game__card">
      <img src={url_image} alt="" />
    </div>
  );
};

MemoryCard.propTypes = {
  card: PropTypes.object.isRequired,
};
