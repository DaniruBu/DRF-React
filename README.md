# DRF-React Project

Полнофункциональное веб-приложение для управления карточками с категориями, построенное на Django REST Framework (backend) и React (frontend).

## 🚀 Технологический стек

### Backend
- **Django 5.2.5** - основной веб-фреймворк
- **Django REST Framework 3.16.1** - для создания REST API
- **Djoser 2.3.3** - для аутентификации и управления пользователями
- **djangorestframework-simplejwt 5.5.1** - JWT токены для аутентификации
- **PostgreSQL** - база данных
- **Pillow 11.3.0** - для работы с изображениями
- **django-cors-headers 4.7.0** - для CORS поддержки

### Frontend
- **React 19.1.1** - основная библиотека для UI
- **Vite 7.1.2** - сборщик и dev-сервер
- **MobX 6.13.7** - управление состоянием приложения
- **React Router 7.8.0** - маршрутизация
- **Ant Design 5.27.0** - UI компоненты
- **Tailwind CSS 4.1.11** - CSS фреймворк
- **Axios 1.11.0** - HTTP клиент

### DevOps
- **Docker & Docker Compose** - контейнеризация
- **PostgreSQL** - база данных в контейнере

## 📊 Модели данных

### User (Пользователь)
```python
class User(AbstractUser):
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)
```
- Расширяет стандартную модель Django User
- Добавляет поле для аватара пользователя

### Category (Категория)
```python
class Category(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=128)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
```
- Категории для группировки карточек
- Связь с пользователем-создателем

### Card (Карточка)
```python
class Card(models.Model):
    id = models.AutoField(primary_key=True)
    question = models.CharField(max_length=128)
    answer = models.TextField(max_length=512, blank=True)
    category = models.ForeignKey("Category", on_delete=models.CASCADE, blank=True, null=True)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
```
- Основная сущность приложения
- Содержит вопрос и ответ
- Может быть привязана к категории
- Связь с пользователем-создателем

## 🔐 Аутентификация

Проект использует JWT (JSON Web Tokens) для аутентификации:
- **Access Token** - короткоживущий (5 минут)
- **Refresh Token** - долгоживущий (1 день)
- Автоматическое обновление токенов на frontend
- Email активация аккаунтов

## 🛠 Установка и запуск

### Предварительные требования
- Docker и Docker Compose
- Git

### 1. Клонирование репозитория
```bash
git clone <repository-url>
cd DRF-React
```

### 2. Создание файла окружения
Создайте файл `.env` в корневой директории проекта:
```env
# Database
DB_HOST=database
DB_NAME=drf_react_db
DB_USER=postgres
DB_PASS=your_password
DB_PORT=5432

# Django
SECRET_KEY=your_secret_key_here

# Email (для активации аккаунтов)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=465
EMAIL_HOST_USER=your_email@gmail.com
EMAIL_HOST_PASSWORD=your_app_password
DEFAULT_FROM_EMAIL=your_email@gmail.com
```

### 3. Запуск с Docker Compose
```bash
# Сборка и запуск всех сервисов
docker-compose up --build

# Или в фоновом режиме
docker-compose up -d --build
```

### 4. Создание суперпользователя (опционально)
```bash
docker-compose exec backend python manage.py createsuperuser
```

## 🌐 Доступ к приложению

После успешного запуска:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8000/api/
- **Django Admin**: http://localhost:8000/admin/
- **Database**: localhost:5432

## 📁 Структура проекта

```
DRF-React/
├── backend/                 # Django backend
│   ├── apps/
│   │   ├── accounts/        # Модели и API пользователей
│   │   └── cards/          # Модели и API карточек
│   ├── config/             # Настройки Django
│   ├── fixtures/           # Фикстуры данных
│   └── requirements.txt    # Python зависимости
├── frontend/               # React frontend
│   ├── src/
│   │   ├── api/           # API сервисы
│   │   ├── components/    # React компоненты
│   │   ├── pages/         # Страницы приложения
│   │   ├── store/         # MobX store
│   │   └── router/        # Роутинг
│   └── package.json       # Node.js зависимости
├── docker-compose.yaml    # Docker конфигурация
└── README.md             # Документация
```

## 🔧 API Endpoints

### Аутентификация (Djoser)
- `POST /api/auth/users/` - регистрация
- `POST /api/auth/jwt/create/` - вход (получение токенов)
- `POST /api/auth/jwt/refresh/` - обновление токенов
- `POST /api/auth/users/activation/` - активация аккаунта

### Карточки
- `GET /api/cards/` - список карточек
- `POST /api/cards/` - создание карточки
- `GET /api/cards/{id}/` - получение карточки
- `PUT /api/cards/{id}/` - обновление карточки
- `DELETE /api/cards/{id}/` - удаление карточки

### Категории
- `GET /api/categories/` - список категорий
- `POST /api/categories/` - создание категории[нет]
- `GET /api/categories/{id}/` - получение категории[нет]
- `PUT /api/categories/{id}/` - обновление категории[нет]
- `DELETE /api/categories/{id}/` - удаление категории[нет]

## 🎯 Функциональность

### Для неавторизованных пользователей:
- Просмотр главной страницы
- Просмотр категорий
- Регистрация и вход в систему

### Для авторизованных пользователей:
- Создание, редактирование и удаление карточек
- Создание, редактирование и удаление категорий
- Просмотр своих карточек
- Управление профилем

## 🚀 Разработка

### Запуск в режиме разработки

#### Backend (локально)
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

#### Frontend (локально)
```bash
cd frontend
npm install
npm run dev
```

### Полезные команды

```bash
# Остановка контейнеров
docker-compose down

# Просмотр логов
docker-compose logs -f

# Выполнение команд в контейнере
docker-compose exec backend python manage.py shell
docker-compose exec frontend npm run build

# Очистка данных
docker-compose down -v
```

## 🔒 Безопасность

- JWT токены для аутентификации
- CORS настройки для безопасности
- Валидация паролей Django
- Email активация аккаунтов
- Автоматическое обновление токенов

## 📝 Лицензия

Этот проект создан для образовательных целей.

---

**Автор**: Буянов Данил  
**Версия**: 0.1.0  
**Дата**: 2025