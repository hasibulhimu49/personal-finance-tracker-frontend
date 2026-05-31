import React from "react";
import {
  Wallet,
  DollarSign,
  TrendingUp,
  TrendingDown,
  PieChart,
  Bell,
  Search,
  User,
} from "lucide-react";

const Dashboard = () => {
  const transactions = [
    {
      id: 1,
      title: "Salary",
      amount: "+$4,500",
      type: "income",
      date: "May 28, 2026",
    },
    {
      id: 2,
      title: "Groceries",
      amount: "-$120",
      type: "expense",
      date: "May 27, 2026",
    },
    {
      id: 3,
      title: "Netflix",
      amount: "-$15",
      type: "expense",
      date: "May 26, 2026",
    },
    {
      id: 4,
      title: "Freelance",
      amount: "+$850",
      type: "income",
      date: "May 25, 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <div className="flex items-center gap-2 mb-10">
          <Wallet className="text-green-600" size={32} />
          <h1 className="text-2xl font-bold text-gray-800">PerFin</h1>
        </div>

        <nav className="flex flex-col gap-4">
          <a
            href="#"
            className="bg-green-100 text-green-700 px-4 py-3 rounded-lg font-medium"
          >
            Overview
          </a>

          <a
            href="#"
            className="hover:bg-gray-100 px-4 py-3 rounded-lg text-gray-700"
          >
            Budget
          </a>

          <a
            href="#"
            className="hover:bg-gray-100 px-4 py-3 rounded-lg text-gray-700"
          >
            Expenses
          </a>

          <a
            href="#"
            className="hover:bg-gray-100 px-4 py-3 rounded-lg text-gray-700"
          >
            Analytics
          </a>

          <a
            href="#"
            className="hover:bg-gray-100 px-4 py-3 rounded-lg text-gray-700"
          >
            Savings
          </a>

          <a
            href="#"
            className="hover:bg-gray-100 px-4 py-3 rounded-lg text-gray-700"
          >
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Topbar */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Financial Dashboard
            </h2>
            <p className="text-gray-500">
              Track your income, expenses & savings
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-full shadow cursor-pointer">
              <Search size={20} />
            </div>

            <div className="bg-white p-3 rounded-full shadow cursor-pointer">
              <Bell size={20} />
            </div>

            <div className="bg-white p-3 rounded-full shadow cursor-pointer">
              <User size={20} />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Balance */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500">Total Balance</h3>
              <DollarSign className="text-green-600" />
            </div>

            <h2 className="text-3xl font-bold">$12,450</h2>
            <p className="text-green-600 mt-2">+12% this month</p>
          </div>

          {/* Income */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500">Income</h3>
              <TrendingUp className="text-blue-600" />
            </div>

            <h2 className="text-3xl font-bold">$6,200</h2>
            <p className="text-blue-600 mt-2">Monthly income</p>
          </div>

          {/* Expenses */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500">Expenses</h3>
              <TrendingDown className="text-red-600" />
            </div>

            <h2 className="text-3xl font-bold">$2,750</h2>
            <p className="text-red-600 mt-2">Monthly spending</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Transactions */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">
                Recent Transactions
              </h3>

              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                Add Transaction
              </button>
            </div>

            <div className="space-y-4">
              {transactions.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-3"
                >
                  <div>
                    <h4 className="font-medium text-gray-800">
                      {item.title}
                    </h4>

                    <p className="text-sm text-gray-500">
                      {item.date}
                    </p>
                  </div>

                  <span
                    className={`font-semibold ${
                      item.type === "income"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {item.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Budget Overview */}
          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">
                Budget Overview
              </h3>

              <PieChart className="text-purple-600" />
            </div>

            <div className="space-y-5">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Food</span>
                  <span>$400 / $600</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full w-2/3"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Transport</span>
                  <span>$150 / $300</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full w-1/2"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Entertainment</span>
                  <span>$220 / $250</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-red-500 h-3 rounded-full w-[88%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Savings</span>
                  <span>$1,000 / $2,000</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-purple-500 h-3 rounded-full w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;