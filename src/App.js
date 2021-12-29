
//import UserTable from "./components/UserTable";
import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
   const addExpenseHadler = (expense)=>{
     console.log('In App.js');
     console.log(expense)
   }

  // return React.createElement('div', {},
  // React.createElement('h2', {}, "Let's get started!"),
  // React.createElement(Expenses, {items: expenses}),
  // );

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHadler}/>
      <Expenses items={expenses}/>
    </div>
  );
 };
// const App = () => {
//   const array = [
//     {
//       id: 1,
//       name: "rachi",
//       email: "rachi@gmail.com",
//       address: "munipally",
//       phone: 1235354523,
//     },
//     {
//       id: 12,
//       name: "hanu",
//       email: "hanu@gmail.com",
//       address: "munipally",
//       phone: 334743546,
//     },
//   ];
//   return (
//     <div>
//       <UserTable users={array}></UserTable>
//     </div>
//   );
// };

export default App;
