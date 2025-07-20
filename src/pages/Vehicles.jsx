import { useState } from "react";
import Layout from "../components/Layout";
import VehicleList from "../components/VehicleList";
import VehicleSearchBar from "../components/VehicleSearchBar";
import VehicleToolbar from "../components/VehicleToolbar";

const vehicleData = [
  {
    plate: "ABC-123",
    type: "Sedan",
    owner: "John Doe",
    status: "Active",
    amount: 247.5,
    trips: 45,
  },
  {
    plate: "XYZ-789",
    type: "SUV",
    owner: "Jane Smith",
    status: "Active",
    amount: 384.0,
    trips: 32,
  },
  {
    plate: "DEF-456",
    type: "Truck",
    owner: "Mike Johnson",
    status: "Flagged",
    amount: 936.0,
    trips: 78,
  },
  {
    plate: "GHI-321",
    type: "Motorcycle",
    owner: "Sarah Wilson",
    status: "Active",
    amount: 138.0,
    trips: 23,
  },
];

export default function Vehicles({ onLogout }) {
  const [vehicles, setVehicles] = useState(vehicleData);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(vehicleData);

  // Add Vehicle (demo)
  const handleAddVehicle = () => {
    const plate = prompt("Enter license plate:");
    if (!plate) return;
    const newList = [
      ...vehicles,
      {
        plate,
        type: "Sedan",
        owner: "New Owner",
        status: "Active",
        amount: 0,
        trips: 0,
      },
    ];
    setVehicles(newList);
    setFiltered(newList);
  };

  // Edit Vehicle (demo)
  const handleEdit = (plate) => {
    const newOwner = prompt("Edit owner name:");
    if (!newOwner) return;
    const updated = vehicles.map((v) =>
      v.plate === plate ? { ...v, owner: newOwner } : v
    );
    setVehicles(updated);
    setFiltered(updated);
  };

  // View Vehicle (demo)
  const handleView = (plate) => {
    alert(`Viewing details for ${plate}`);
  };

  // Filter button handler
  const handleFilter = () => {
    setFiltered(
      vehicles.filter(
        (v) =>
          v.plate.toLowerCase().includes(search.toLowerCase()) ||
          v.owner.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  // Clear button handler
  const handleClear = () => {
    setSearch("");
    setFiltered(vehicles);
  };

  return (
    <Layout onLogout={onLogout}>
      <VehicleToolbar onAdd={handleAddVehicle} />
      <VehicleSearchBar
        value={search}
        onChange={setSearch}
        onFilter={handleFilter}
        onClear={handleClear}
      />
      <VehicleList
        vehicles={filtered}
        onEdit={handleEdit}
        onView={handleView}
      />
    </Layout>
  );
}
