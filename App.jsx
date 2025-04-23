import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";

export default function App() {
  const [cases, setCases] = useState([]);
  const [clients, setClients] = useState([]);
  const [newCase, setNewCase] = useState({ title: "", client: "", date: "", note: "" });
  const [newClient, setNewClient] = useState({ name: "", phone: "", address: "" });
  const [reminders, setReminders] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const addCase = () => {
    if (newCase.title && newCase.client && newCase.date) {
      setCases([...cases, { ...newCase, id: Date.now() }]);
      setNewCase({ title: "", client: "", date: "", note: "" });
    }
  };

  const addClient = () => {
    if (newClient.name) {
      setClients([...clients, { ...newClient, id: Date.now() }]);
      setNewClient({ name: "", phone: "", address: "" });
    }
  };

  const addReminder = () => {
    if (selectedDate) {
      setReminders([...reminders, selectedDate.toLocaleDateString()]);
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">مدیریت کامل پرونده‌های حقوقی</h1>
      <Card>
        <CardContent className="grid gap-3 p-4">
          <h2 className="text-xl font-semibold">افزودن پرونده جدید</h2>
          <Input placeholder="عنوان پرونده" value={newCase.title} onChange={(e) => setNewCase({ ...newCase, title: e.target.value })} />
          <Input placeholder="نام موکل" value={newCase.client} onChange={(e) => setNewCase({ ...newCase, client: e.target.value })} />
          <Input type="date" value={newCase.date} onChange={(e) => setNewCase({ ...newCase, date: e.target.value })} />
          <Textarea placeholder="توضیحات یا یادداشت" value={newCase.note} onChange={(e) => setNewCase({ ...newCase, note: e.target.value })} />
          <Button onClick={addCase}>ثبت پرونده</Button>
        </CardContent>
      </Card>
    </div>
  );
}