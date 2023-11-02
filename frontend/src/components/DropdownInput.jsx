import React, { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
function DropdownInput({ field, id, setDpId, parent, value, edit, onChange }) {
  console.log(id);
  const [data, setData] = useState([]);
  const [filtData, setFiltData] = useState(data);
  const [inData, setInData] = useState(data);
  useEffect(() => {
    async function getData() {
      if (id)
        var resp = await axios.get(
          `http://192.168.216.65:8000/api/lookup/${field}/get/${id}`
        );
      else
        var resp = await axios.get(
          `http://192.168.216.65:8000/api/lookup/${field}`
        );

      setData(resp.data);
      setFiltData(resp.data);
    }
    getData();
    console.log(id);
  }, [id ? id : null, field]);
  function handleOutsideClick(e) {
    const thisIpTagName = e.target.name
    // thisIpTagName == "SECTION" ? close() : null;
    // thisIpTagName== "FORM" ? close() : null;
    // thisIpTagName == "form-container" ? close() : null;
    thisIpTagName!== field?close():null
  }
  function handleClick() {
    const dp = document.getElementById(`${field}`);
    const dp_icon = document.getElementById(`dp-${field}-icon`);
    dp.classList.add("dp-open");
    dp_icon.classList.add("rotate");
    document.addEventListener("click", handleOutsideClick);
  }
  function handleElementClick(arry) {
    close();
    setInData(arry);
    setDpId ? setDpId(arry.id) : null;
    edit ? edit({ field: field, id: arry.id }) : null;
  }
  function close() {
    document.removeEventListener("click", handleOutsideClick);
    const dp = document.getElementById(`${field}`);
    const dp_icon = document.getElementById(`dp-${field}-icon`);
    dp.classList.remove("dp-open");
    dp_icon.classList.remove("rotate");
  }
  function filterData(value) {
    const a = data.filter((arry) => {
      return arry.value.toLowerCase().startsWith(value.toLowerCase()) && arry.value.toLowerCase().includes(value.toLowerCase()) ? true : false;
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
        onClick={(e) => {
          handleClick();
          onChange(e);
        }}
        onChange={(e) => {
          handleChange(e);
        }}
        value={inData.value}
        defaultValue={value ? value : null}
        name={field}
        required
        dp_key={inData.id}
        autoComplete="off"
        // onBlur={close}
      />
      {console.log(inData.id)}
      <span
        className="material-symbols-outlined dp-icon"
        id={`dp-${field}-icon`}
      >
        arrow_drop_down
      </span>
      <div className="fullScreen-dp">
        {filtData ? (
          <div className="dropdown-container" id={`${field}`}>
            {filtData.map((arry) => (
              <div
                className="dp-elements"
                key={arry.id}
                onBlur={close}
                onClick={() => {
                  handleElementClick(arry);
                }}
              >
                {arry.value}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default DropdownInput;
