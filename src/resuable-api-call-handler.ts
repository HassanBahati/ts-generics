interface ApiResponse<T> {
  data: T;
  status: number;
}

interface ApiUser {
  id: number;
  name: string;
}

async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// const userApiResponse = await fetchData<User[]>("/api/users");
const userApiResponse = fetchData<ApiUser[]>("/api/users"); //await it
