import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import MixedChart from "./components/MixedChart";
import { UserData } from "./Data";

function App() {
  const [userData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
      },
      {
        label: "Another Metric",
        data: UserData.map((data) => data.otherMetric),
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        type: 'line',
      }
    ]
  });

  const pieData = {
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Distribution",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: 'black',
        borderWidth: 2,
      }
    ]
  };

  const chartOptions = {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 14,
          },
        },
      },
      y: {
        grid: {
          color: "#e0e0e0",
        },
        ticks: {
          font: {
            size: 14,
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 16,
          },
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#333",
        titleFont: {
          size: 16,
        },
        bodyFont: {
          size: 14,
        },
        borderColor: "#ccc",
        borderWidth: 1,
      },
    },
  };

  return (
    <Router>
      <div className="App">
        <div className="sidebar">
          <h1>Dashboard</h1>
          <button className="sidebar-button">
            <Link to="/" className="sidebar-link">Dashboard</Link>
          </button>
          <button className="sidebar-button">
            <Link to="/rooms" className="sidebar-link">Rooms</Link>
          </button>
          <button className="sidebar-button">
            <Link to="/another-page" className="sidebar-link">Another Page</Link>
          </button>
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard userData={userData} pieData={pieData} chartOptions={chartOptions} />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/another-page" element={<AnotherPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function Dashboard({ userData, pieData, chartOptions }) {
  return (
    <div className="chart-container">
      <div className="card">
        <BarChart chartData={userData} options={chartOptions} />
      </div>
      <div className="card">
        <LineChart chartData={userData} options={chartOptions} />
      </div>
      <div className="card">
        <PieChart chartData={pieData} options={chartOptions} />
      </div>
      <div className="card">
        <MixedChart chartData={userData} options={chartOptions} />
      </div>
    </div>
  );
}

function Rooms() {
  const [cards, setCards] = useState([]);

  const addCard = () => {
    setCards([...cards, { id: cards.length + 1 }]);
  };

  return (
    <div className="rooms-page">
      <button className="add-card-button" onClick={addCard}>+</button>
      <div className="cards-container">
        {cards.map((card) => (
          <div key={card.id} className="room-card">
            Card {card.id}
          </div>
        ))}
      </div>
    </div>
  );
}

function AnotherPage() {
  return <div>Another Page Content</div>;
}

export default App;
