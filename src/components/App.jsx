import './App.css';
import { Profile } from './Profile';
import { FriendList } from './FriendList';
import { TransactionHistory } from './TransactionHistory';
import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";



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
