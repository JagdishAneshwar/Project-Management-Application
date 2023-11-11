import React from 'react'
import "./_tasks.scss";

const Tasks = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    spent: '',
    done: '',
    project_id: '',
    priority: '',
    due_date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to the server)
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input type="text" name="title" value={formData.title} onChange={handleChange} required />

      <label>Description:</label>
      <textarea name="description" value={formData.description} onChange={handleChange} required />

      <label>Spent:</label>
      <input type="text" name="spent" value={formData.spent} onChange={handleChange} required />

      <label>Done:</label>
      <input type="text" name="done" value={formData.done} onChange={handleChange} required />

      <label>Project ID:</label>
      <input type="text" name="project_id" value={formData.project_id} onChange={handleChange} required />

      <label>Priority:</label>
      <input type="text" name="priority" value={formData.priority} onChange={handleChange} required />

      <label>Due Date:</label>
      <input type="text" name="due_date" value={formData.due_date} onChange={handleChange} required />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Tasks