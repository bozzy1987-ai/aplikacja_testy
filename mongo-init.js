// MongoDB initialization script for bike shop database
// This script creates the database and inserts sample data

// Switch to the bike_shop database
db = db.getSiblingDB('bike_shop');

// Create collections and insert sample data
db.createCollection('products');
db.createCollection('categories');
db.createCollection('customers');
db.createCollection('orders');

// Insert sample categories
db.categories.insertMany([
  {
    _id: ObjectId(),
    name: "Górskie",
    description: "Rowery górskie do trudnego terenu",
    slug: "mountain",
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    _id: ObjectId(),
    name: "Miejskie",
    description: "Rowery miejskie do codziennej jazdy",
    slug: "urban",
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    _id: ObjectId(),
    name: "Szosowe",
    description: "Rowery szosowe do szybkiej jazdy po asfalcie",
    slug: "road",
    created_at: new Date(),
    updated_at: new Date()
  }
]);

// Insert sample products
db.products.insertMany([
  {
    _id: ObjectId(),
    name: "Trek Marlin 7",
    description: "Wszechstronny rower górski idealny dla początkujących",
    price: 3499.00,
    category_id: db.categories.findOne({slug: "mountain"})._id,
    image_url: "https://via.placeholder.com/400x300/4CAF50/white?text=Trek+Marlin+7",
    stock_quantity: 15,
    is_available: true,
    specifications: {
      frame: "Aluminum",
      gears: "21",
      brakes: "Hydraulic disc",
      wheel_size: "29 cala"
    },
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    _id: ObjectId(),
    name: "Giant Escape 3",
    description: "Niezawodny rower miejski",
    price: 2199.00,
    category_id: db.categories.findOne({slug: "urban"})._id,
    image_url: "https://via.placeholder.com/400x300/2196F3/white?text=Giant+Escape+3",
    stock_quantity: 22,
    is_available: true,
    specifications: {
      frame: "Aluminum",
      gears: "21",
      brakes: "V-brake",
      wheel_size: "28 cali"
    },
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    _id: ObjectId(),
    name: "Specialized Allez",
    description: "Lekki rower szosowy",
    price: 5999.00,
    category_id: db.categories.findOne({slug: "road"})._id,
    image_url: "https://via.placeholder.com/400x300/FF5722/white?text=Specialized+Allez",
    stock_quantity: 8,
    is_available: true,
    specifications: {
      frame: "Carbon",
      gears: "18",
      brakes: "Caliper",
      wheel_size: "700c"
    },
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    _id: ObjectId(),
    name: "Scott Scale 970",
    description: "Profesjonalny rower górski",
    price: 7899.00,
    category_id: db.categories.findOne({slug: "mountain"})._id,
    image_url: "https://via.placeholder.com/400x300/9C27B0/white?text=Scott+Scale+970",
    stock_quantity: 5,
    is_available: true,
    specifications: {
      frame: "Carbon",
      gears: "30",
      brakes: "Hydraulic disc",
      wheel_size: "29 cala"
    },
    created_at: new Date(),
    updated_at: new Date()
  }
]);

// Insert sample customers
db.customers.insertMany([
  {
    _id: ObjectId(),
    first_name: "Jan",
    last_name: "Kowalski",
    email: "jan.kowalski@email.pl",
    phone: "+48 123 456 789",
    address: {
      street: "ul. Krakowska 12",
      city: "Warszawa",
      postal_code: "00-001",
      country: "Polska"
    },
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    _id: ObjectId(),
    first_name: "Anna",
    last_name: "Nowak",
    email: "anna.nowak@email.pl",
    phone: "+48 987 654 321",
    address: {
      street: "ul. Wrocławska 45",
      city: "Kraków",
      postal_code: "30-001",
      country: "Polska"
    },
    created_at: new Date(),
    updated_at: new Date()
  }
]);

// Insert sample orders
db.orders.insertMany([
  {
    _id: ObjectId(),
    customer_id: db.customers.findOne({email: "jan.kowalski@email.pl"})._id,
    order_date: new Date("2024-01-15"),
    total_amount: 3499.00,
    status: "completed",
    items: [
      {
        product_id: db.products.findOne({name: "Trek Marlin 7"})._id,
        quantity: 1,
        price: 3499.00
      }
    ],
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    _id: ObjectId(),
    customer_id: db.customers.findOne({email: "anna.nowak@email.pl"})._id,
    order_date: new Date("2024-01-20"),
    total_amount: 8198.00,
    status: "pending",
    items: [
      {
        product_id: db.products.findOne({name: "Giant Escape 3"})._id,
        quantity: 1,
        price: 2199.00
      },
      {
        product_id: db.products.findOne({name: "Specialized Allez"})._id,
        quantity: 1,
        price: 5999.00
      }
    ],
    created_at: new Date(),
    updated_at: new Date()
  }
]);

print('Database initialized successfully with sample data!');
print('Collections created:');
print('- products: ' + db.products.countDocuments() + ' documents');
print('- categories: ' + db.categories.countDocuments() + ' documents');
print('- customers: ' + db.customers.countDocuments() + ' documents');
print('- orders: ' + db.orders.countDocuments() + ' documents');