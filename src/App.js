import { BtnPrimary } from "./components/atoms/button/BtnPrimary";
import { BtnSecondary } from "./components/atoms/button/BtnSecondary";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organism/user/UserCard";
import "./styles.css";

const user = {
  image: "https://source.unsplash.com/LEpfefQf4rU",
  name: "kisuke",
  email: "12345@abc.com",
  tel: "000-0000-0000",
  company: {
    name: "ktcompany",
    web: "https://google.com"
  }
};

export default function App() {
  return (
    <div className="App">
      <BtnPrimary>test</BtnPrimary>
      <BtnSecondary>検索</BtnSecondary>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
