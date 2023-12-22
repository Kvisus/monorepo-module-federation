const Usercard = ({ userName }: { userName?: string }) => {
  return (
    <div style={{ border: "1px solid red", padding: "10px" }}>
      <div>username:{userName ?? "user"}</div>;<div>password:123</div>
    </div>
  );
};
export default Usercard;
