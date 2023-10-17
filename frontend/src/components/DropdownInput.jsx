import React, { useEffect, useState } from "react";
import Select from "react-select";
function DropdownInput({ field, id, setDpId, parent }) {
  const [data, setData] = useState([]);
  const [filtData, setFiltData] = useState(data);
  const [inData, setInData] = useState(data);
  useEffect(() => {
    (id
      ? fetch(`http://127.0.0.1:8000/api/lookup/${field}/get/${id}`)
      : fetch(`http://127.0.0.1:8000/api/lookup/${field}`)
    )
      .then((resp) => resp.json())
      .then((res) => {
        setData(res);
        setFiltData(res);
      })
      .catch((err) => console.log(err));
    console.log(id);
  }, [id ? id : null, field]);
  function handleOutsideClick(e){
    e.target.tagName=="SECTION"?close():null
  }
  function handleClick() {
    const dp = document.getElementById(`${field}`);
    const dp_icon = document.getElementById(`dp-${field}-icon`);
    dp.classList.add("dp-open");
    dp_icon.classList.add("rotate");
    document.addEventListener('click',handleOutsideClick)
  }
  function handleElementClick(data, id) {
    close();
    setInData(data);
    setDpId ? setDpId(id) : null;
  }
  function close() {
    document.removeEventListener('click',handleOutsideClick)
    const dp = document.getElementById(`${field}`);
    const dp_icon = document.getElementById(`dp-${field}-icon`);
    dp.classList.remove("dp-open");
    dp_icon.classList.remove("rotate");
  }
  function filterData(value) {
    const a = data.filter((arry) => {
      return arry.value.toLowerCase().startsWith(value) ? true : false;
    });
    setFiltData(a);
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
        placeholder={`Enter your ${field}`}
        onClick={handleClick}
        onChange={handleChange}
        value={inData}
        name ={field}
        autoComplete="off"
        // onBlur={close}
      />
      <span
        className="material-symbols-outlined dp-icon"
        id={`dp-${field}-icon`}
      >
        arrow_drop_down
      </span>
      <div className="fullScreen-dp">
        <div className="dropdown-container" id={`${field}`}>
          {filtData.map((arry) => (
            <div
              className="dp-elements"
              key={arry.id}
              onBlur={close}
              onClick={() => {
                handleElementClick(arry.value, arry.id);
              }}
            >
              {arry.value}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DropdownInput;
