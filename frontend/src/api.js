// src/api.js
const API_URL = "http://localhost:5000/api";

async function fetchData(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`);
  }
  return response.json();
}

export async function getTasks() {
  return fetchData(`${API_URL}/tasks`);
}

export async function createTask(task) {
  return fetchData(`${API_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
}

export async function updateTask(task) {
  return fetchData(`${API_URL}/tasks/${task._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
}

export async function deleteTask(taskId) {
  return fetchData(`${API_URL}/tasks/${taskId}`, {
    method: "DELETE",
  });
}
