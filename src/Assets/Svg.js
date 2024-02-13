export const Moon = ({ mode }) => {
  return (
    <svg
      style={{ transform: "rotate(250deg)" }}
      width="30px"
      height="30px"
      enableBackground="new 0 0 32 32"
      viewBox="0 0 32 32"
      id="moon"
    >
      <path
        d="M16.10999,31.5c7.60004,0,14.06-5.42999,15.37-12.91003c0.10004-0.58997-0.14996-1.17999-0.64996-1.51001C30.33002,16.75,29.69,16.75,29.19,17.07001c-1.66998,1.07996-3.60999,1.64996-5.59998,1.64996c-5.68005,0-10.31-4.63-10.31-10.31c0-1.98999,0.56995-3.92999,1.64996-5.59998C15.25,2.31,15.25,1.66998,14.91998,1.16998c-0.32996-0.5-0.92999-0.75-1.51001-0.65002C5.92999,1.82996,0.5,8.28998,0.5,15.89001C0.5,24.5,7.5,31.5,16.10999,31.5z"
        fill={mode ? "yellow" : "gray"}
      ></path>
    </svg>
  );
};


