import { SyncLoader } from "react-spinners";
const Loading = () => {
  return (
    <div className="loading-container">
      <SyncLoader
        color="blue"
        size={20}
        speedMultiplier={1.2}
        margin={5}
        cssOverride={{ height: "4rem" ,width:"8rem",display:"flex",alignItems:"center",justifyContent:"center"}}
      />
    </div>
  );
};

export default Loading;
