//자식 컴포넌트 (ChildComponent.js)
function ChildComponent(props) {
  const { name, age } = props;
  return (
    <div>
      <p>
        이름은 {name}, {age} 살임
      </p>
    </div>
  );
}

export default ChildComponent;
