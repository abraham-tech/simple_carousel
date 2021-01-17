import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Carousel
        carouselItems={[
          <div>
            <img
              src="https://content.fortune.com/wp-content/uploads/2017/01/google.jpeg"
              alt="Image 1"
              height="400"
            />{" "}
          </div>,
          <div>
            <img
              src="https://img.etimg.com/thumb/msid-78487305,width-650,imgsize-539369,,resizemode-4,quality-100/google-2-afp.jpg"
              alt="Image 1"
              height="400"
            />{" "}
          </div>,
          <div>
            <img
              src="https://images.financialexpress.com/2020/05/google-reuters-620x413.jpg"
              alt="Image 1"
              height="400"
            />{" "}
          </div>
        ]}
      />
    </div>
  );
}

function Carousel(props) {
  const [active, setActive] = React.useState(0);
  let scrollInterval = null;
  const style = {
    carousel: {
      position: "relative"
    },
    carouselItem: {
      position: "absolute",
      visibility: "hidden"
    },
    visible: {
      visibility: "visible"
    }
  };
  React.useEffect(() => {
    scrollInterval = setTimeout(() => {
      const { carouselItems } = props;
      setActive((active + 1) % carouselItems.length);
    }, 2000);
  });
  const { carouselItems, ...rest } = props;
  return (
    <div style={style.carousel}>
      {carouselItems.map((item, index) => {
        const activeStyle = active === index ? style.visible : {};
        return React.cloneElement(item, {
          ...rest,
          style: {
            ...style.carouselItem,
            ...activeStyle
          }
        });
      })}
    </div>
  );
}
