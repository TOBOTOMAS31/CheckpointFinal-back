import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import ReactCardFlip from "react-card-flip";
import "./PicCard.scss";

const picCard = (props) => {
  const { pic, catSelected } = props;

  return (
    <div className="picCard">
      <div
        className="coverPic"
        style={{
          backgroundImage: `url(${pic.pic_link})`,
        }}
      />
      <div className="footer">
        <div className="categoryTag">{pic.cat_name}</div>
        <Link component={RouterLink} to={`/pics/${pic.pic_id}`}>
          <Button variant="outlined" color="primary" size="small">
            Voir
          </Button>
        </Link>
      </div>
    </div>
  );
};

picCard.propTypes = {};

export default picCard;
