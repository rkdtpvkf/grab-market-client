import React from "react";
function TimerComponent() {
  const [time, settime] = React.useState(10);
  console.log("Update");
  React.useEffect(function () {
    settime(time + 1);
  }, []);

  return (
    <div>
      <h3>({time})초</h3>
      <button> 1씩 증가</button>
    </div>
  );
}

export default TimerComponent;
