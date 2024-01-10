import './App.css';
import { Profile } from './Profile';
import { FriendList } from './FriendList';
import { TransactionHistory } from './TransactionHistory';
import userData from "../data/userData.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";



export function App() {
  return (
    <div className='container'>
      <Profile 
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      image={userData.avatar}
      stats={userData.stats}
      />
       <FriendList friends={friends} />
       <TransactionHistory items={transactions} />
    </div>
  );
}
