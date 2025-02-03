import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import Button from '../components/ui/button';
import Input from '../components/ui/input';
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
import styles from '../css/WalletDashboard.module.css';

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
    <div className={styles.dashboardContainer}>
      <div className={styles.contentWrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>Wallet Dashboard</h1>
          <p className={styles.subtitle}>Track your expenses and income across all accounts</p>
        </header>

        {/* Quick Stats */}
        <div className={styles.statsGrid}>
          <Card>
            <CardHeader className={styles.cardHeader}>
              <CardTitle className={styles.cardTitle}>Total Balance</CardTitle>
              <Wallet className={styles.icon} />
            </CardHeader>
            <CardContent>
              <div className={styles.statAmount}>$2,450.00</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className={styles.cardHeader}>
              <CardTitle className={styles.cardTitle}>Monthly Income</CardTitle>
              <ArrowUpRight className={styles.iconGreen} />
            </CardHeader>
            <CardContent>
              <div className={styles.statAmount}>$3,500.00</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className={styles.cardHeader}>
              <CardTitle className={styles.cardTitle}>Monthly Expenses</CardTitle>
              <ArrowDownLeft className={styles.iconRed} />
            </CardHeader>
            <CardContent>
              <div className={styles.statAmount}>$1,050.00</div>
            </CardContent>
          </Card>
        </div>

        {/* Budget Alert */}
        {budget.spent > budget.limit * 0.9 && (
          <Alert className={styles.alert}>
            <AlertDescription>
              Warning: You have spent {((budget.spent / budget.limit) * 100).toFixed(1)}% of your monthly budget!
            </AlertDescription>
          </Alert>
        )}

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className={styles.tabs}>
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className={styles.tabContent}>
            <Card>
              <CardHeader>
                <CardTitle>Spending Overview</CardTitle>
              </CardHeader>
              <CardContent className={styles.chartContainer}>
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
          <TabsContent value="transactions" className={styles.tabContent}>
            <Card>
              <CardHeader className={styles.cardHeaderWithButton}>
                <CardTitle>Recent Transactions</CardTitle>
                <Button className={styles.addButton}>
                  <Plus className={styles.buttonIcon} /> Add Transaction
                </Button>
              </CardHeader>
              <CardContent>
                <div className={styles.transactionList}>
                  {transactions.map(transaction => (
                    <div key={transaction.id} className={styles.transactionItem}>
                      <div>
                        <p className={styles.transactionCategory}>{transaction.category}</p>
                        <p className={styles.transactionDate}>{transaction.date}</p>
                      </div>
                      <div
                        className={transaction.type === 'expense' ? styles.expenseAmount : styles.incomeAmount}
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
          <TabsContent value="categories" className={styles.tabContent}>
            <Card>
              <CardHeader className={styles.cardHeaderWithButton}>
                <CardTitle>Categories & Subcategories</CardTitle>
                <Button className={styles.addButton}>
                  <Plus className={styles.buttonIcon} /> Add Category
                </Button>
              </CardHeader>
              <CardContent>
                <div className={styles.categoryList}>
                  {categories.map((category, index) => (
                    <div key={index} className={styles.categoryItem}>
                      <h3 className={styles.categoryName}>{category.name}</h3>
                      <div className={styles.subcategoryList}>
                        {category.subcategories.map((sub, subIndex) => (
                          <div key={subIndex} className={styles.subcategoryItem}>
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
