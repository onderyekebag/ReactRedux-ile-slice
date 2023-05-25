import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { removeItem, increase, decrease } from "../control/cartSlice";
const CourseItem = ({ id, title, price, img, quantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <Card sx={{ width: 300, height: 325 }}>
        <CardMedia sx={{ height: 160 }} image={img} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Fiyat : {price} TL
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Adet : <b>{quantity}</b>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            onClick={() => {
              dispatch(increase(id));
            }}
          >
            <BsChevronUp />
          </Button>
          <Button
            size="small"
            variant="contained"
            onClick={() => {
              dispatch(decrease(id));
            }}
          >
            <BsChevronDown />
          </Button>
          <Button
            size="small"
            variant="contained"
            color="error"
            onClick={() => dispatch(removeItem(id))}
          >
            Sil
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CourseItem;
