interface MainProps {
  children: any;
}
const Main: React.FC<MainProps> = ({ children }) => {
  return <main className={"relative"}>{children}</main>;
};

export default Main;
