import { useHistory } from 'react-router';
import { setLang } from '../locale/index';

function Langs() {
  const history = useHistory();

  return (
    <div onClick={() => history.go(0)} className="Langs">
      <EnglishFlag />
      <RussianFlag />
    </div>
  );
}

const size = 25;

function EnglishFlag() {
  return (
    <svg
      onClick={() => setLang(null)}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <rect width={size} height={size} fill="#00247d" />
      <path
        d={`M 0,0 L ${size},${size} M ${size},0 L 0,${size}`}
        stroke="#fff"
        strokeWidth={size / 5}
      />
      <path
        d={`M 0,0 L ${size},${size} M ${size},0 L 0,${size}`}
        stroke="#cf142b"
        strokeWidth={size / 7.5}
      />
      <path
        d={`M ${size / 2},${size / 2} v -${size / 10} L ${size / 10},0 H 0 z h ${
          size / 10
        } L ${size},${size / 10} V 0 z v ${size / 10} L ${size / 1.11},${size} H ${size} z h -${
          size / 10
        } L 0,${size / 1.11} V ${size} z`}
        fill="#fff"
      />
      <path
        d={`M ${size / 2},0 V ${size} M 0,${size / 2} H ${size}`}
        stroke="#fff"
        strokeWidth={size / 3}
      />
      <path
        d={`M ${size / 2},0 V ${size} M 0,${size / 2} H ${size}`}
        stroke="#cf142b"
        strokeWidth={size / 5}
      />
    </svg>
  );
}

function RussianFlag() {
  return (
    <svg
      onClick={() => setLang('ru')}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 6 6"
      width={size}
      height={size}
    >
      <rect fill="#fff" width="9" height="3" />
      <rect fill="#d52b1e" y="3" width="9" height="3" />
      <rect fill="#0039a6" y="2" width="9" height="2" />
    </svg>
  );
}

export default Langs;
