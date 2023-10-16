import React, { useEffect, useState } from "react";
import Select from "react-select";
function DropdownInput({ field }) {
  const [data, setData] = useState([]);
  const [filtData, setFiltData] = useState(data);
  const [inData, setInData] = useState(data);
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/lookup/${field}`)
      .then((resp) => resp.json())
      .then((res) => {
        setData(res);
        setFiltData(res)
      })
      .catch((err) => console.log(err));
    console.log(data);
  }, []);
  function handleClick() {
    const dp = document.getElementById(`${field}`);
    const dp_icon = document.getElementById(`dp-${field}-icon`);
    dp.classList.add("dp-open");
    dp_icon.classList.add("rotate");
  }
  function close() {
    const dp = document.getElementById(`${field}`);
    const dp_icon = document.getElementById(`dp-${field}-icon`);
    dp.classList.remove("dp-open");
    dp_icon.classList.remove("rotate");
  }
  function filterData(value) {
    const a = data.filter((arry) => {
      return arry.value.toLowerCase().includes(value) ? true: false;
    });
    setFiltData(a)
  }

  function handleChange(e) {
    console.log(filtData);
    setInData(e.target.value);
    filterData(e.target.value);
  }
  return (
    <>
      <input
        type="text"
        className="input"
        onFocus={handleClick}
        onChange={handleChange}
        value={inData}
      />
      <span
        className="material-symbols-outlined dp-icon"
        id={`dp-${field}-icon`}
      >
        arrow_drop_down
      </span>
      <div className="dropdown-container" id={`${field}`}>
        {filtData.map((arry) => (
          <div className="dp-elements" key={arry.id} onClick={close}>
            {arry.value}
          </div>
        ))}
      </div>
    </>
  );
}

export default DropdownInput;
