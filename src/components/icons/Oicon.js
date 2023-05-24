import classes from "./ICON.module.css";
const Oicon = ({ color, classActive, size, stroke, strokeWidth, hovClass }) => {
  return (
    <div>
      <svg
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="-169 -35 100 100"
        className={`${size && classes.size} ${classes.mark} ${
          classActive && classes["icon-trans"]
        } ${hovClass && classes["make-hove"]} `}
      >
        <g>
          <path
            d="M-119,56.2c-22.7,0-41.2-18.5-41.2-41.2s18.5-41.2,41.2-41.2c22.7,0,41.2,18.5,41.2,41.2S-96.3,56.2-119,56.2z M-119-8
		c-12.7,0-23,10.3-23,23c0,12.7,10.3,23,23,23s23-10.3,23-23C-96,2.3-106.3-8-119-8z"
            fill={color}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        </g>
      </svg>
    </div>
  );
};

export default Oicon;
