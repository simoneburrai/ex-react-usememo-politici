import { memo } from "react";
const Card = memo(({ politician }) => {
    console.log(`Rendering della card per: ${politician.name}`);
    return (
        <div className="p-3">
            <h3>{politician.name}</h3>
            <img src={politician.image} alt={politician.name} width="200" />
            <h4>{politician.position}</h4>
            <p>{politician.biography}</p>
        </div>
    );
});

export default Card;