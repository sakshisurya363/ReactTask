
function App() {
  // 1)  student data
  const student = { name: "Sakshi", age: 20 };

  // 2)  product data
  const product = {
    productName: "charger",
    quantity: 3,
    price: 399,
  };
  const totalCost = product.quantity * product.price;

  // 3)  Attendance Status
  const student1 = {
  name: 'Sakshi',
  isPresent: true
};


  // 4)  person  data
  const person = {
    firstName: "Sakshi",
    lastName: "Suryawanshi",
  };
  const fullName = person.firstName + " " + person.lastName;


  // 5)Favourite Subjects
  const student2 = {
  name: 'Priya',
  subjects: ['Math', 'Java', 'Python', 'JavaScript']
};


  return (
    <div>
    
      <h2>Hello, {student.name}!</h2>
      <p>You are {student.age} years old.</p>
      <hr/>

      <h2>Product Details</h2>
      <p>Name: {product.productName}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Price: ₹{product.price}</p>
      <h3>Total Cost: ₹{totalCost}</h3>
      <hr/>

      <h2>Attendance Status</h2>
      <p>{student1.name} is {student1.isPresent ? 'Present' : 'Absent'}</p>
      <hr/>

      <h2>Person Details</h2>
      <p>Full Name: {fullName}</p>
      <hr/>

      <h2>Favourite Subjects</h2>
      <ul>
        {student2.subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
      <hr/>

    </div>
  );
}
export default App;
