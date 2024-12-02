const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

server.use(middlewares);
server.use(bodyParser.json());

// Logowanie użytkownika
server.post('/login', (req, res) => {
  const { name } = req.body;

  const users = router.db.get('user').value();
  const user = users.find(u => u.basicInfo.name === name);

  if (user) {
    res.status(200).json({
      message: 'Login successful',
      user
    });
  } else {
    res.status(401).json({
      message: 'Invalid credentials'
    });
  }
});

// Rejestracja użytkownika
server.post('/register', (req, res) => {
  const { name, ...rest } = req.body;

  const users = router.db.get('user').value();
  const existingUser = users.find(u => u.basicInfo.name === name);

  if (existingUser) {
    res.status(400).json({
      message: 'Username already exists'
    });
  } else {
    const newUser = {
      id: uuidv4(),
      basicInfo: {
        name,
        ...rest.basicInfo
      },
      contact: rest.contact,
      address: rest.address,
      additionals: rest.additionals
    };

    router.db.get('user').push(newUser).write();

    res.status(201).json({
      message: 'User registered successfully',
      user: newUser
    });
  }
});

// Middleware do ochrony tras (opcjonalne)
server.use((req, res, next) => {
  if (req.path.startsWith('/protected')) {
    const token = req.headers.authorization;

    if (token === 'Bearer valid-token') {
      next();
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  } else {
    next();
  }
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});