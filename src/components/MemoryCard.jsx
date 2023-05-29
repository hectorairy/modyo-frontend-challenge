import PropTypes from "prop-types";

export const MemoryCard = ({ card, id, selectCard }) => {
  const { url_image, stat } = card;
  const classCard = stat ? `memory-game__card--active ${stat}` : "";

  const handleClick = () => {
    if (stat.includes("correct")) return false;
    selectCard(id);
  };

  return (
    <div className={`memory-game__card ${classCard}`} onClick={handleClick}>
      <img src={url_image} alt="" />
    </div>
  );
};

MemoryCard.propTypes = {
  card: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  selectCard: PropTypes.func.isRequired,
};
