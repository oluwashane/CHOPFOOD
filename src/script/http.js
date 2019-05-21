
class HTTP{
  constructor() {
    this.key = '334caaffb95f064d9f48d7f18ca6df07';
    this.search = 'fish'
  }
  // GET
  
  async get() {
    const response = await fetch(`https://www.food2fork.com/api/search?key=${this.key}&q=${this.search}`);
    // https://www.food2fork.com/api/search?key=YOUR_API_KEY&
    const data = await response.json();

    return data;
  }
}