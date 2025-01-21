import { useState, useEffect } from 'react';
import { fetchSupabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

const Admin = () => {
  const [cars, setCars] = useState([]);
  const [newCar, setNewCar] = useState({
    name: '',
    year: '',
    transmission: '',
    price: '',
    image_url: '',
  });
  const [editCarId, setEditCarId] = useState(null);
  const [editCar, setEditCar] = useState({
    name: '',
    year: '',
    transmission: '',
    price: '',
    image_url: '',
  });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const session = localStorage.getItem('session');
    if (session) {
      setLoggedIn(true);
    }
    if (loggedIn) {
      fetchCars();
    }
  }, [loggedIn]);

  const fetchCars = async () => {
    const data = await fetchSupabase('cars');
    setCars(data);
  };

  const handleInputChange = (e, setter) => {
    setter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isCarValid = (car) => {
    const { name, year, transmission, price, image_url } = car;
    return name && year && transmission && price && image_url;
  };

  const handleAddCar = async () => {
    console.log('Adding car:', newCar);
    const data = await fetchSupabase('cars', 'POST', newCar);
    console.log('Response from Supabase:', data);

    if (data) {
      fetchCars(); // Refresh the car list
      setNewCar({ name: '', year: '', transmission: '', price: '', image_url: '' });
    } else {
      alert('Failed to add the car.');
    }
  };

  const handleEditCar = (car) => {
    setEditCarId(car.id);
    setEditCar(car);
  };

  const handleUpdateCar = async () => {
    await fetchSupabase(`cars?id=eq.${editCarId}`, 'PATCH', editCar);
    fetchCars(); // Refresh the car list
    setEditCarId(null);
    setEditCar({ name: '', year: '', transmission: '', price: '', image_url: '' });
  };

  const handleDeleteCar = async (id) => {
    await fetchSupabase(`cars?id=eq.${id}`, 'DELETE');
    fetchCars(); // Refresh the car list
  };

  const handleLogin = () => {
    if (username === 'admin' && password === '123123') {
      localStorage.setItem('session', 'loggedIn');
      setLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('session');
    setLoggedIn(false);
  };

  if (!loggedIn) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin}>Login</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Admin Panel</h1>
          <Button onClick={handleLogout} className="bg-red-500">
            Logout
          </Button>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Add New Car</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              placeholder="Name"
              name="name"
              value={newCar.name}
              onChange={(e) => handleInputChange(e, setNewCar)}
            />
            <Input
              placeholder="Year"
              name="year"
              value={newCar.year}
              onChange={(e) => handleInputChange(e, setNewCar)}
            />
            <Input
              placeholder="Transmission"
              name="transmission"
              value={newCar.transmission}
              onChange={(e) => handleInputChange(e, setNewCar)}
            />
            <Input
              placeholder="Price"
              name="price"
              value={newCar.price}
              onChange={(e) => handleInputChange(e, setNewCar)}
            />
            <Input
              placeholder="Image URL"
              name="image_url"
              value={newCar.image_url}
              onChange={(e) => handleInputChange(e, setNewCar)}
            />
            <Button onClick={handleAddCar} className="bg-primary">
              Add Car
            </Button>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Car List</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Year</TableHead>
              <TableHead>Transmission</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cars.map((car) => (
              <TableRow key={car.id}>
                <TableCell>{car.name}</TableCell>
                <TableCell>{car.year}</TableCell>
                <TableCell>{car.transmission}</TableCell>
                <TableCell>{car.price}</TableCell>
                <TableCell>
                  <img src={car.image_url} alt={car.name} className="w-20 h-20 object-cover" />
                </TableCell>
                <TableCell>
                  {editCarId === car.id ? (
                    <div className="flex gap-2">
                      <Button onClick={handleUpdateCar} className="bg-green-500">
                        Update
                      </Button>
                      <Button onClick={() => setEditCarId(null)}>Cancel</Button>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <Button onClick={() => handleEditCar(car)} className="bg-yellow-500">
                        Edit
                      </Button>
                      <Button onClick={() => handleDeleteCar(car.id)} className="bg-red-500">
                        Delete
                      </Button>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {editCarId && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Edit Car</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Name"
                name="name"
                value={editCar.name}
                onChange={(e) => handleInputChange(e, setEditCar)}
              />
              <Input
                placeholder="Year"
                name="year"
                value={editCar.year}
                onChange={(e) => handleInputChange(e, setEditCar)}
              />
              <Input
                placeholder="Transmission"
                name="transmission"
                value={editCar.transmission}
                onChange={(e) => handleInputChange(e, setEditCar)}
              />
              <Input
                placeholder="Price"
                name="price"
                value={editCar.price}
                onChange={(e) => handleInputChange(e, setEditCar)}
              />
              <Input
                placeholder="Image URL"
                name="image_url"
                value={editCar.image_url}
                onChange={(e) => handleInputChange(e, setEditCar)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
