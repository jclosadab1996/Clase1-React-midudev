import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

const users = [
  {
    userName: "juancalosada22",
    name: "Camilo",
    isFollowing: true,
  },
  {
    userName: "JaimeUrrutias",
    name: "Jaime",
    isFollowing: false,
  },
  {
    userName: "LauAndreis07",
    name: "Laura Andrea",
    isFollowing: true,
  },
  {
    userName: "lamujerbionicca",
    name: "Carolina",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
