export let csr = false
 
export async function load() {
  try {
      const response = await fetch('https://fdnd.directus.app/items/person/');
      if (!response.ok) throw new Error('Failed to fetch data');
      
      const data = await response.json();
 
      // Filter out people with no name
      const filteredPersons = data.data.filter(person => person.name && person.name.trim() !== '');
 
      return {
          persons: filteredPersons || []
      };
  } catch (error) {
      console.error('Error fetching data:', error);
      return {
          persons: [],
          error: error.message
      };
  }
}