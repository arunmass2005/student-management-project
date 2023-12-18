import React, { useEffect, useState } from "react";

function DropdownInput({
  field,
  id,
  setDpId,
  parent,
  value,
  edit,
  onChange,
  className,
}) {
  console.log(id);
  const [data, setData] = useState([]);
  const [filtData, setFiltData] = useState(data);
  const [inData, setInData] = useState(data);

  useEffect(() => {
    async function getData() {
      console.log("in useeffect", parent, id);
      if (parent && setDpId && id) {
        if(id[parent["parent"]]){
          var api = await fetch(
            `http://localhost:8000/api/lookup/${field}/filt/${id[parent["parent"]]}`
          );
          let resp = await api.json();
  
          setData(resp);
          setFiltData(resp);
        }else{
        var api = await fetch(
          `http://localhost:8000/api/lookup/${field}/filt/${parent["id"]}`
        );
        let resp = await api.json();

        setData(resp);
        setFiltData(resp);}
      } else if (parent && id) {
        console.log("in parent && id", parent, id);
        if (id[parent["parent"]]) {
          console.log("in course")
          // id&&edit&&value && setDpId ? setDpId((prev)=>(
          //   {...prev,[field]:value.id}
          // )) : null
          var api = await fetch(
            `http://localhost:8000/api/lookup/${field}/filt/${
              id[parent["parent"]]
            }`
          );
          let resp = await api.json();

          setData(resp);
          setFiltData(resp);
        }else{
          
          var api = await fetch(
            `http://localhost:8000/api/lookup/${field}/filt/${parent["id"]}`
          );
          let resp = await api.json();
  
          setData(resp);
          setFiltData(resp);}
      }
      else {
        // edit && value && setDpId
        //   ? setDpId(field,value)
        //   : null;

        const api = await fetch(`http://localhost:8000/api/lookup/${field}`);
        let resp = await api.json();

        setData(resp);
        setFiltData(resp);
      }
    }

    getData();
  }, [id, field, value, setDpId, parent]);
  function handleOutsideClick(e) {
    const thisIpTagName = e.target.name;
    // thisIpTagName == "SECTION" ? close() : null;
    // thisIpTagName== "FORM" ? close() : null;
    // thisIpTagName == "form-container" ? close() : null;
    thisIpTagName !== field ? close() : null;
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
    setDpId ? setDpId((prev) => ({ ...prev, [field]: arry.id })) : null;
    console.log(field, arry.id);
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
      return arry.value.toLowerCase().startsWith(value.toLowerCase()) &&
        arry.value.toLowerCase().includes(value.toLowerCase())
        ? true
        : false;
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
      {/* { edit&&value && setDpId ? setDpId((prev)=>(
            {...prev,[field]:value.id}
          )) : null
        } */}
      <input
        type="text"
        className={`${className ? className : null} input`}
        placeholder={`Enter your ${field}`}
        onClick={(e) => {
          handleClick();
          onChange ? onChange(e) : null;
        }}
        onChange={(e) => {
          handleChange(e);
        }}
        value={inData.value}
        defaultValue={value ? value["value"] : null}
        name={field}
        required
        dp_key={inData.id}
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
        {filtData ? (
          <div className="dropdown-container" id={`${field}`}>
            {parent && id
              ? filtData.map((arry) => (
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
                ))
              : parent
              ? null
              : filtData.map((arry) => (
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
