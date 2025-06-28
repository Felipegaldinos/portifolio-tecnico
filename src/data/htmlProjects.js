export const htmlProjects = [
  {
    name: "Landing Page Moderna",
    description: "Landing page responsiva com animações CSS, gradientes modernos e design minimalista. Inclui seções hero, sobre, serviços e contato.",
    technologies: ["HTML", "CSS", "JavaScript"],
    type: "html-preview",
    htmlContent: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechSolutions</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        header {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            padding: 1rem 0;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
        }
        
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: white;
        }
        
        .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
        }
        
        .nav-links a {
            color: white;
            text-decoration: none;
            transition: color 0.3s;
        }
        
        .nav-links a:hover {
            color: #ffd700;
        }
        
        .hero {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
        }
        
        .hero-content h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            animation: fadeInUp 1s ease;
        }
        
        .hero-content p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            animation: fadeInUp 1s ease 0.3s both;
        }
        
        .btn {
            display: inline-block;
            padding: 12px 30px;
            background: linear-gradient(45deg, #ffd700, #ffed4e);
            color: #333;
            text-decoration: none;
            border-radius: 25px;
            font-weight: bold;
            transition: transform 0.3s, box-shadow 0.3s;
            animation: fadeInUp 1s ease 0.6s both;
        }
        
        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(255, 215, 0, 0.3);
        }
        
        .services {
            padding: 4rem 0;
            background: white;
        }
        
        .services h2 {
            text-align: center;
            margin-bottom: 3rem;
            font-size: 2.5rem;
            color: #333;
        }
        
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }
        
        .service-card {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 2rem;
            border-radius: 15px;
            text-align: center;
            transition: transform 0.3s;
        }
        
        .service-card:hover {
            transform: translateY(-10px);
        }
        
        .service-card h3 {
            margin-bottom: 1rem;
            font-size: 1.5rem;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @media (max-width: 768px) {
            .hero-content h1 {
                font-size: 2rem;
            }
            
            .nav-links {
                display: none;
            }
        }
    </style>
</head>
<body>
    <header>
        <nav class="container">
            <div class="logo">TechSolutions</div>
            <ul class="nav-links">
                <li><a href="#home">Início</a></li>
                <li><a href="#services">Serviços</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
        </nav>
    </header>

    <section class="hero" id="home">
        <div class="hero-content">
            <h1>Soluções Tecnológicas Inovadoras</h1>
            <p>Transformamos suas ideias em realidade digital</p>
            <a href="#services" class="btn">Conheça Nossos Serviços</a>
        </div>
    </section>

    <section class="services" id="services">
        <div class="container">
            <h2>Nossos Serviços</h2>
            <div class="services-grid">
                <div class="service-card">
                    <h3>Desenvolvimento Web</h3>
                    <p>Sites modernos e responsivos com as melhores tecnologias do mercado.</p>
                </div>
                <div class="service-card">
                    <h3>Design UI/UX</h3>
                    <p>Interfaces intuitivas e experiências de usuário excepcionais.</p>
                </div>
                <div class="service-card">
                    <h3>Consultoria Tech</h3>
                    <p>Estratégias tecnológicas para impulsionar seu negócio.</p>
                </div>
            </div>
        </div>
    </section>

    <script>
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.color = '#333';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.1)';
                header.style.color = 'white';
            }
        });
    </script>
</body>
</html>`,
    github: "#",
    demo: "#"
  },
  {
    name: "Calculadora Interativa",
    description: "Calculadora funcional com design moderno, operações básicas e avançadas. Interface responsiva com animações suaves.",
    technologies: ["HTML", "CSS", "JavaScript"],
    type: "html-preview",
    htmlContent: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #1e3c72, #2a5298);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        .calculator {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .display {
            width: 100%;
            height: 80px;
            background: rgba(0, 0, 0, 0.3);
            border: none;
            border-radius: 15px;
            color: white;
            font-size: 2rem;
            text-align: right;
            padding: 0 20px;
            margin-bottom: 20px;
            outline: none;
        }

        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
        }

        button {
            height: 60px;
            border: none;
            border-radius: 15px;
            font-size: 1.2rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            backdrop-filter: blur(10px);
        }

        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            background: rgba(255, 255, 255, 0.3);
        }

        button:active {
            transform: translateY(0);
        }

        .operator {
            background: linear-gradient(135deg, #ff6b6b, #ee5a24);
        }

        .operator:hover {
            background: linear-gradient(135deg, #ee5a24, #ff6b6b);
        }

        .equals {
            background: linear-gradient(135deg, #00d2d3, #54a0ff);
        }

        .equals:hover {
            background: linear-gradient(135deg, #54a0ff, #00d2d3);
        }

        .clear {
            background: linear-gradient(135deg, #ff9ff3, #f368e0);
        }

        .clear:hover {
            background: linear-gradient(135deg, #f368e0, #ff9ff3);
        }

        .zero {
            grid-column: span 2;
        }

        @media (max-width: 480px) {
            .calculator {
                padding: 20px;
            }
            
            button {
                height: 50px;
                font-size: 1rem;
            }
            
            .display {
                height: 60px;
                font-size: 1.5rem;
            }
        }
    </style>
</head>
<body>
    <div class="calculator">
        <input type="text" class="display" id="display" readonly>
        <div class="buttons">
            <button class="clear" onclick="clearDisplay()">C</button>
            <button class="clear" onclick="deleteLast()">⌫</button>
            <button class="operator" onclick="appendToDisplay('/')">/</button>
            <button class="operator" onclick="appendToDisplay('*')">×</button>
            
            <button onclick="appendToDisplay('7')">7</button>
            <button onclick="appendToDisplay('8')">8</button>
            <button onclick="appendToDisplay('9')">9</button>
            <button class="operator" onclick="appendToDisplay('-')">-</button>
            
            <button onclick="appendToDisplay('4')">4</button>
            <button onclick="appendToDisplay('5')">5</button>
            <button onclick="appendToDisplay('6')">6</button>
            <button class="operator" onclick="appendToDisplay('+')">+</button>
            
            <button onclick="appendToDisplay('1')">1</button>
            <button onclick="appendToDisplay('2')">2</button>
            <button onclick="appendToDisplay('3')">3</button>
            <button class="equals" onclick="calculate()" rowspan="2">=</button>
            
            <button class="zero" onclick="appendToDisplay('0')">0</button>
            <button onclick="appendToDisplay('.')">.</button>
        </div>
    </div>

    <script>
        let display = document.getElementById('display');
        let currentInput = '';
        let operator = '';
        let previousInput = '';

        function appendToDisplay(value) {
            if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput !== '') {
                    if (previousInput !== '' && operator !== '') {
                        calculate();
                    }
                    operator = value;
                    previousInput = currentInput;
                    currentInput = '';
                }
            } else {
                currentInput += value;
            }
            updateDisplay();
        }

        function updateDisplay() {
            if (currentInput !== '') {
                display.value = currentInput;
            } else if (operator !== '') {
                display.value = previousInput + ' ' + operator;
            }
        }

        function calculate() {
            if (previousInput !== '' && currentInput !== '' && operator !== '') {
                let result;
                const prev = parseFloat(previousInput);
                const current = parseFloat(currentInput);
                
                switch (operator) {
                    case '+':
                        result = prev + current;
                        break;
                    case '-':
                        result = prev - current;
                        break;
                    case '*':
                        result = prev * current;
                        break;
                    case '/':
                        result = current !== 0 ? prev / current : 'Erro';
                        break;
                    default:
                        return;
                }
                
                display.value = result;
                currentInput = result.toString();
                operator = '';
                previousInput = '';
            }
        }

        function clearDisplay() {
            currentInput = '';
            operator = '';
            previousInput = '';
            display.value = '';
        }

        function deleteLast() {
            if (currentInput !== '') {
                currentInput = currentInput.slice(0, -1);
                display.value = currentInput;
            }
        }

        document.addEventListener('keydown', function(event) {
            const key = event.key;
            
            if (key >= '0' && key <= '9' || key === '.') {
                appendToDisplay(key);
            } else if (['+', '-', '*', '/'].includes(key)) {
                appendToDisplay(key);
            } else if (key === 'Enter' || key === '=') {
                calculate();
            } else if (key === 'Escape' || key === 'c' || key === 'C') {
                clearDisplay();
            } else if (key === 'Backspace') {
                deleteLast();
            }
        });
    </script>
</body>
</html>`,
    github: "#",
    demo: "#"
  },
  {
    name: "Todo List Avançado",
    description: "Aplicação de lista de tarefas com funcionalidades completas: adicionar, editar, excluir, filtrar e marcar como concluído. Dados salvos no localStorage.",
    technologies: ["HTML", "CSS", "JavaScript"],
    type: "html-preview",
    htmlContent: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        h1 {
            text-align: center;
            color: #333;
            margin-bottom: 30px;
            font-size: 2.5rem;
        }

        .input-section {
            display: flex;
            gap: 10px;
            margin-bottom: 30px;
        }

        #todoInput {
            flex: 1;
            padding: 15px;
            border: 2px solid #ddd;
            border-radius: 10px;
            font-size: 1rem;
            outline: none;
            transition: border-color 0.3s;
        }

        #todoInput:focus {
            border-color: #667eea;
        }

        #addBtn {
            padding: 15px 25px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: bold;
            transition: transform 0.3s;
        }

        #addBtn:hover {
            transform: translateY(-2px);
        }

        .filters {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-bottom: 20px;
        }

        .filter-btn {
            padding: 8px 16px;
            border: 2px solid #667eea;
            background: transparent;
            color: #667eea;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s;
        }

        .filter-btn.active,
        .filter-btn:hover {
            background: #667eea;
            color: white;
        }

        .todo-list {
            list-style: none;
        }

        .todo-item {
            background: white;
            margin-bottom: 10px;
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
            gap: 15px;
            transition: all 0.3s;
        }

        .todo-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
        }

        .todo-item.completed {
            opacity: 0.7;
            background: #f8f9fa;
        }

        .todo-item.completed .todo-text {
            text-decoration: line-through;
            color: #6c757d;
        }

        .todo-checkbox {
            width: 20px;
            height: 20px;
            cursor: pointer;
        }

        .todo-text {
            flex: 1;
            font-size: 1rem;
            color: #333;
        }

        .todo-actions {
            display: flex;
            gap: 10px;
        }

        .edit-btn,
        .delete-btn {
            padding: 5px 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.8rem;
            transition: all 0.3s;
        }

        .edit-btn {
            background: #28a745;
            color: white;
        }

        .edit-btn:hover {
            background: #218838;
        }

        .delete-btn {
            background: #dc3545;
            color: white;
        }

        .delete-btn:hover {
            background: #c82333;
        }

        .stats {
            text-align: center;
            margin-top: 20px;
            color: #666;
        }

        .empty-state {
            text-align: center;
            color: #666;
            font-style: italic;
            padding: 40px;
        }

        @media (max-width: 480px) {
            .container {
                padding: 20px;
            }
            
            .input-section {
                flex-direction: column;
            }
            
            .filters {
                flex-wrap: wrap;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>📝 Todo List</h1>
        
        <div class="input-section">
            <input type="text" id="todoInput" placeholder="Adicione uma nova tarefa...">
            <button id="addBtn">Adicionar</button>
        </div>

        <div class="filters">
            <button class="filter-btn active" data-filter="all">Todas</button>
            <button class="filter-btn" data-filter="pending">Pendentes</button>
            <button class="filter-btn" data-filter="completed">Concluídas</button>
        </div>

        <ul class="todo-list" id="todoList"></ul>

        <div class="stats" id="stats"></div>
    </div>

    <script>
        class TodoApp {
            constructor() {
                this.todos = JSON.parse(localStorage.getItem('todos')) || [];
                this.currentFilter = 'all';
                this.init();
            }

            init() {
                this.bindEvents();
                this.render();
            }

            bindEvents() {
                document.getElementById('addBtn').addEventListener('click', () => this.addTodo());
                document.getElementById('todoInput').addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') this.addTodo();
                });

                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => this.setFilter(e.target.dataset.filter));
                });
            }

            addTodo() {
                const input = document.getElementById('todoInput');
                const text = input.value.trim();

                if (text) {
                    const todo = {
                        id: Date.now(),
                        text: text,
                        completed: false,
                        createdAt: new Date().toLocaleString()
                    };

                    this.todos.unshift(todo);
                    this.saveTodos();
                    this.render();
                    input.value = '';
                }
            }

            toggleTodo(id) {
                const todo = this.todos.find(t => t.id === id);
                if (todo) {
                    todo.completed = !todo.completed;
                    this.saveTodos();
                    this.render();
                }
            }

            editTodo(id) {
                const todo = this.todos.find(t => t.id === id);
                if (todo) {
                    const newText = prompt('Editar tarefa:', todo.text);
                    if (newText && newText.trim()) {
                        todo.text = newText.trim();
                        this.saveTodos();
                        this.render();
                    }
                }
            }

            deleteTodo(id) {
                if (confirm('Tem certeza que deseja excluir esta tarefa?')) {
                    this.todos = this.todos.filter(t => t.id !== id);
                    this.saveTodos();
                    this.render();
                }
            }

            setFilter(filter) {
                this.currentFilter = filter;
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.toggle('active', btn.dataset.filter === filter);
                });
                this.render();
            }

            getFilteredTodos() {
                switch (this.currentFilter) {
                    case 'pending':
                        return this.todos.filter(t => !t.completed);
                    case 'completed':
                        return this.todos.filter(t => t.completed);
                    default:
                        return this.todos;
                }
            }

            render() {
                const todoList = document.getElementById('todoList');
                const filteredTodos = this.getFilteredTodos();

                if (filteredTodos.length === 0) {
                    todoList.innerHTML = '<div class="empty-state">Nenhuma tarefa encontrada</div>';
                } else {
                    todoList.innerHTML = filteredTodos.map(todo => \`
                        <li class="todo-item \${todo.completed ? 'completed' : ''}">
                            <input type="checkbox" class="todo-checkbox" 
                                   \${todo.completed ? 'checked' : ''} 
                                   onchange="app.toggleTodo(\${todo.id})">
                            <span class="todo-text">\${todo.text}</span>
                            <div class="todo-actions">
                                <button class="edit-btn" onclick="app.editTodo(\${todo.id})">Editar</button>
                                <button class="delete-btn" onclick="app.deleteTodo(\${todo.id})">Excluir</button>
                            </div>
                        </li>
                    \`).join('');
                }

                this.updateStats();
            }

            updateStats() {
                const total = this.todos.length;
                const completed = this.todos.filter(t => t.completed).length;
                const pending = total - completed;

                document.getElementById('stats').innerHTML = \`
                    Total: \${total} | Concluídas: \${completed} | Pendentes: \${pending}
                \`;
            }

            saveTodos() {
                localStorage.setItem('todos', JSON.stringify(this.todos));
            }
        }

        const app = new TodoApp();
    </script>
</body>
</html>`,
    github: "#",
    demo: "#"
  }
];