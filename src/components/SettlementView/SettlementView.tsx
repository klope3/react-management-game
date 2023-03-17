import "./SettlementView.css";

export function SettlementView() {
  const placeholder = new Array(16).fill({});
  return (
    <div className="settlement-view">
      {placeholder.map((_) => (
        <div></div>
      ))}
    </div>
  );
}
