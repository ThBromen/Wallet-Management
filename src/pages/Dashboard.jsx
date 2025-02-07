import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import Button from '../components/ui/button';
import { Alert, AlertDescription } from "../components/ui/alert";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Plus, Wallet, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const WalletDashboard = () => {
  const [transactions] = useState([
    { id: 1, date: '2024-01-15', type: 'expense', amount: 50, category: 'Food', subcategory: 'Groceries', account: 'Bank' },
    { id: 2, date: '2024-01-16', type: 'income', amount: 1000, category: 'Salary', account: 'Bank' },
    { id: 3, date: '2024-01-17', type: 'expense', amount: 30, category: 'Transport', account: 'Mobile Money' },
  ]);

  const [categories] = useState([
    { name: 'Food', subcategories: ['Groceries', 'Restaurants'] },
    { name: 'Transport', subcategories: ['Fuel', 'Public Transport'] },
    { name: 'Utilities', subcategories: ['Electricity', 'Water', 'Internet'] },
  ]);

  const [budget] = useState({
    limit: 1000,
    spent: 850,
  });

  return (
    <div className="dashboardContainer">
      
      {/* Navigation Bar */}
      <nav className="navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center cursor-pointer">
              <Wallet className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">BromenWallet</span>
              <span className="ml-2 text-xl font-bold text-gray-800">Profile</span>
            </div>
          </div>
        </div>
      </nav>



      <div className="contentWrapper">
        <header className="header">
          <h1 className="title">Wallet Dashboard</h1>
          <p className="subtitle">Track your expenses and income across all accounts</p>
        </header>

        {/* Quick Stats */}
        <div className="statsGrid">
          <Card>
            <CardHeader className="cardHeader">
              <CardTitle className="cardTitle">Total Balance</CardTitle>
              <Wallet className="icon" />
            </CardHeader>
            <CardContent>
              <div className="statAmount">$2,450.00</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="cardHeader">
              <CardTitle className="cardTitle">Monthly Income</CardTitle>
              <ArrowUpRight className="iconGreen" />
            </CardHeader>
            <CardContent>
              <div className="statAmount">$3,500.00</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="cardHeader">
              <CardTitle className="cardTitle">Monthly Expenses</CardTitle>
              <ArrowDownLeft className="iconRed" />
            </CardHeader>
            <CardContent>
              <div className="statAmount">$1,050.00</div>
            </CardContent>
          </Card>
        </div>

        {/* Budget Alert */}
        {budget.spent > budget.limit * 0.9 && (
          <Alert className="alert">
            <AlertDescription>
              Warning: You have spent {((budget.spent / budget.limit) * 100).toFixed(1)}% of your monthly budget!
            </AlertDescription>
          </Alert>
        )}

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="tabs">
          <TabsList className='list'>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="tabContent">
            <Card>
              <CardHeader>
                <CardTitle>Spending Overview</CardTitle>
              </CardHeader>
              <CardContent className="chartContainer">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={transactions}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="amount" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Transactions Tab */}
          <TabsContent value="transactions" className="tabContent">
            <Card>
              <CardHeader className="cardHeaderWithButton">
                <CardTitle>Recent Transactions</CardTitle>
                <Button className="addButton">
                  <Plus className="buttonIcon" /> Add Transaction
                </Button>
              </CardHeader>
              <CardContent>
                <div className="transactionList">
                  {transactions.map(transaction => (
                    <div key={transaction.id} className="transactionItem">
                      <div>
                        <p className="transactionCategory">{transaction.category}</p>
                        <p className="transactionDate">{transaction.date}</p>
                      </div>
                      <div
                        className={transaction.type === 'expense' ? "expenseAmount" : "incomeAmount"}
                      >
                        {transaction.type === 'expense' ? '-' : '+'}${transaction.amount}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Categories Tab */}
          <TabsContent value="categories" className="tabContent">
            <Card>
              <CardHeader className="cardHeaderWithButton">
                <CardTitle>Categories & Subcategories</CardTitle>
                <Button className="addButton">
                  <Plus className="buttonIcon" /> Add Category
                </Button>
              </CardHeader>
              <CardContent>
                <div className="categoryList">
                  {categories.map((category, index) => (
                    <div key={index} className="categoryItem">
                      <h3 className="categoryName">{category.name}</h3>
                      <div className="subcategoryList">
                        {category.subcategories.map((sub, subIndex) => (
                          <div key={subIndex} className="subcategoryItem">
                            {sub}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default WalletDashboard;
